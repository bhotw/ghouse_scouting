# in frc_scouting_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from scouting.views import TeamViewSet, MatchViewSet, ScoutingDataViewSet


router = DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'scoutingdata', ScoutingDataViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('scouting.urls')),  # Replace 'your_app' with your app's name
]
