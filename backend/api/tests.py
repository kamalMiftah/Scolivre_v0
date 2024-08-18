from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone
from django.core.exceptions import ValidationError
from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from api.models import User  # Use your custom User model
from rest_framework_simplejwt.tokens import AccessToken
from .models import Command
from io import BytesIO
from PIL import Image


class CommandModelTest(TestCase):
    def setUp(self):
        # Setup run before every test case.
        self.test_image = SimpleUploadedFile(
            "testimage.jpg", b"image content", content_type="image/jpeg"
        )
        self.command = Command.objects.create(
            image=self.test_image,
            uploaded_at=timezone.now(),
            home_address="123 Main St",
            city="Casablanca",
            phone_number="0688995302",
            email="test@example.com",
            order_state="PENDING",
            comment_client="Please handle with care.",
            comment_admin="Urgent delivery."
        )
    
    def test_command_creation(self):
        # Test that a Command instance is created correctly.
        self.assertIsInstance(self.command, Command)
        self.assertEqual(self.command.home_address, "123 Main St")
        self.assertEqual(self.command.city, "Casablanca")
        self.assertEqual(self.command.phone_number, "0688995302")
        self.assertEqual(self.command.email, "test@example.com")
        self.assertEqual(self.command.order_state, "PENDING")
        self.assertEqual(self.command.comment_client, "Please handle with care.")
        self.assertEqual(self.command.comment_admin, "Urgent delivery.")
        self.assertTrue(self.command.image.name.startswith("lists/"))
        self.assertIn("testimage", self.command.image.name)

    def test_order_state_choices(self):
        # Test that order_state only accepts defined choices.
        self.command.order_state = "COMPLETED"
        self.command.save()
        self.assertEqual(self.command.order_state, "COMPLETED")
    
        self.command.order_state = "INVALID"
        with self.assertRaises(ValidationError) as e:
            self.command.full_clean()  # Validate the field choices
        self.assertIn("Value 'INVALID' is not a valid choice.", str(e.exception))

    def test_blank_and_null_fields(self):
        # Test fields that allow blank and null values.
        self.command.comment_client = None
        self.command.comment_admin = None
        self.command.save()
        
        command = Command.objects.get(id=self.command.id)
        self.assertIsNone(command.comment_client)
        self.assertIsNone(command.comment_admin)


class CommandViewSetTestCase(APITestCase):

    def setUp(self):
        # Create a user and authenticate
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.token = str(AccessToken.for_user(self.user))  # Generate JWT token
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)

        # Create a basic temporary image file
        self.image = self.create_temp_image()

        # Create some initial data
        self.command = Command.objects.create(
            image=self.image,
            home_address="123 Elm Street",
            city="Gotham",
            phone_number="123-456-7890",
            email="kamal@example.com",
            order_state="PENDING",
            comment_client="Please deliver by next week.",
            comment_admin="Handle with care."
        )
        self.url = reverse('command-detail', kwargs={'pk': self.command.pk})

    def create_temp_image(self):
        """Generate a simple temporary image file."""
        image = Image.new('RGB', (100, 100), color='red')
        image_file = BytesIO()
        image.save(image_file, format='JPEG')
        image_file.seek(0)
        return SimpleUploadedFile(
            name='test_image.jpg',
            content=image_file.read(),
            content_type='image/jpeg'
        )

    def test_get_command_list(self):
        """Test that authenticated users can get a list of commands."""
        response = self.client.get(reverse('command-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_command_detail(self):
        """Test that authenticated users can retrieve a command's details."""
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], self.command.email)

    def test_update_command(self):
        """Test that authenticated users can update a command."""
        # Updated data with all required fields
        updated_data = {
            'image': self.create_temp_image(),  # Include the valid image
            'home_address': "456 Oak Street",
            'city': "Metropolis",
            'phone_number': "987-654-3210",
            'email': "updated@example.com",
            'order_state': "COMPLETED",  # Ensure this value is within allowed choices
            'comment_client': "Updated comment.",
            'comment_admin': "Updated admin comment."
        }

        # Send the PUT request with multipart/form-data
        response = self.client.put(self.url, data=updated_data, format='multipart')

        # Assert that the update was successful
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], updated_data['email'])

    def test_delete_command(self):
        """Test that authenticated users can delete a command."""
        response = self.client.delete(self.url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Command.objects.filter(pk=self.command.pk).exists())

    def test_unauthorized_access(self):
        """Test unauthorized access returns HTTP 401."""
        self.client.credentials()  # Remove token
        url = reverse('command-list')
        response = self.client.get(url)  # Use GET request instead of POST
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
