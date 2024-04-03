from django.forms import ValidationError
from rest_framework import serializers
from .models import CustomUser, MatchScoutingData
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()

class createUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'],username=clean_data['username'],  
                                                 password=clean_data['password'])
        # user_obj.username = clean_data['username']
        user_obj.save()
        return user_obj
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        user = authenticate(username=clean_data['email'], password = clean_data['password'])
        if not user:
            raise ValidationError('User not found')
        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username')



# class EventSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Event
#         fields = '__all__'

class MatchScoutingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchScoutingData
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)

        return data
 
class ViewScoutingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchScoutingData
        fields = (
            'match_number',
            'team_number',
            'starting_position',
            'auto_speaker_scored',
            'auto_speaker_missed',
            'auto_line_crossed',
            'auto_penalty',
            'teleop_speaker_scored',
            'teleop_speaker_missed',
            'teleop_amp_scored',
            'temop_amp_missed',
            'teleop_penalty',
            'climbed',
            'trap',
            'end_game_penalty',
            'need_to',
            'comments',
            'who_created'
            )

