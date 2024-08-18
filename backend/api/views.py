from rest_framework import viewsets, permissions, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Command
from .models import User
from .serializers import CommandSerializer, UserSerializer


class CommandPagination(PageNumberPagination):
    page_size = 25  # Default page size
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
        serializer.save()


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
