# in scouting/views.py
from rest_framework import viewsets
from django.shortcuts import render
from .models import UserProfile, Event, MatchScoutingData
from .serializers import UserProfileSerializer, EventSerializer, MatchScoutingDataSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class MatchScoutingDataViewSet(viewsets.ModelViewSet):
    queryset = MatchScoutingData.objects.all()
    serializer_class = MatchScoutingDataSerializer


def home(request):
    return render(request, 'home.html')