from django.urls import path, include
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from .views import CommandViewSet, UserViewSet


# Create a router and register our viewset with it
router = DefaultRouter()
router.register(r'commands', CommandViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path("schema/docs/", SpectacularSwaggerView.as_view(url_name="schema")),
    
    # SimpleJWT URL paths
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]