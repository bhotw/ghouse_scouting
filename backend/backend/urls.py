# in frc_scouting_backend/urls.py
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('scouting.urls')),  # Replace 'your_app' with your app's name
]
