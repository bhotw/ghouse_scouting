from rest_framework import serializers
from .models import CustomUser

class createUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


# class EventSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Event
#         fields = '__all__'

# class MatchScoutingDataSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MatchScoutingData
#         fields = '__all__'
