from django.utils.deprecation import MiddlewareMixin

class DisableCSRF(MiddlewareMixin):
    """
    Middleware to disable CSRF protection for API routes.
    This completely disables CSRF checks for any URL path that starts with /api/.
    """
    def process_request(self, request):
        if request.path.startswith('/api/'):
            setattr(request, '_dont_enforce_csrf_checks', True)