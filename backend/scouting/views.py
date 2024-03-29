from rest_framework import viewsets, generics
from django.shortcuts import render
from .models import CustomUser #, Event, MatchScoutingData
from .serializers import createUserSerializer#, EventSerializer, MatchScoutingDataSerializer

class createUsersViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()  # Use instance of the model
    serializer_class = createUserSerializer

class viewAllUsers(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = createUserSerializer

# class EventViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()  # Use instance of the model
#     serializer_class = EventSerializer

# class MatchScoutingDataViewSet(viewsets.ModelViewSet):
#     queryset = MatchScoutingData.objects.all()  # Use instance of the model
#     serializer_class = MatchScoutingDataSerializer

# def home(request):
#     return render(request, 'home.html')

