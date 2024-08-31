from rest_framework import viewsets, permissions, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

from .models import Command
from .models import User
from .serializers import CommandSerializer, UserSerializer


class CommandPagination(PageNumberPagination):
    page_size = 5  # Default page size
    page_size_query_param = 'page_size'  # Client can control page size with this query parameter
    max_page_size = 100  # Maximum page size allowed


class CommandViewSet(viewsets.ModelViewSet):
    queryset = Command.objects.order_by('-uploaded_at')
    serializer_class = CommandSerializer
    parser_classes = (MultiPartParser, FormParser)
    pagination_class = CommandPagination

    def get_permissions(self):
        if self.request and self.request.method == 'POST':
            return [permissions.AllowAny()]  # Allow POST requests without authentication
        return [permissions.IsAuthenticated()]  # Require authentication for other requests

    def get_authenticators(self):
        if self.request and self.request.method == 'POST':
            return []  # Skip authentication for POST requests
        return [JWTAuthentication()]  # Use JWT authentication for other requests
    
    def perform_create(self, serializer):
        command = serializer.save()

        # Prepare email details
        context = {
            'name': command.name,
            'phone_number': command.phone_number,
            'city': command.city,
            'address': command.home_address,
            'image': f"http://scolivre.com{command.image.url}",
            'comment_client': command.comment_client,
        }

        receiver_email = 'kamalmiftah42@gmail.com'
        template_name = 'email.html'  # Correct path to the template
        convert_to_html_content = render_to_string(
            template_name=template_name,
            context=context
        )
        plain_message = strip_tags(convert_to_html_content)

        yo_send_it = send_mail(
            subject="New Command Received",
            message=plain_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[receiver_email,],
            html_message=convert_to_html_content,
            fail_silently=True    # Optional
        )




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated])
    def logout(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
