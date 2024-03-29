from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import createUsersViewSet, viewAllUsers  # Assuming your viewset is in a file named 'views.py'

router = SimpleRouter()
router.register('create-users', createUsersViewSet, basename='create-users')
router.register('view-users', viewAllUsers, basename='view-users')


urlpatterns = [
    path('', include(router.urls)),  # Include router URLs at the root path
    # ... other URL patterns for your API ...
]