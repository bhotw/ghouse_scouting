from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

class Event(models.Model):
    event_name = models.CharField(max_length=50)
    match_scouting_data = models.ManyToManyField('MatchScoutingData', blank=True)

    # Add other fields for event details

    def __str__(self):
        return f"Match {self.event_name}"

class MatchScoutingData(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

    #Pre-Match 
    match_number = models.IntegerField()
    team_number = models.IntegerField()
    #Auto
    auto_starting_position = models.CharField(max_length=50)
    auto_speaker = models.IntegerField()
    auto_line_crossed = models.CharField(max_length=50)
    auto_penalty = models.IntegerField()
    #Teleop
    teleop_speaker = models.IntegerField()
    teleop_amp = models.IntegerField()
    teleop_penalty = models.IntegerField()
    temeop_good_for = models.CharField(max_length=50)
    #End Game
    climbed = models.CharField(max_length=50)
    trap = models.CharField(max_length=50)
    end_game_penalty = models.IntegerField()
    #Post-Match
    need_to =  models.CharField(max_length=50)
    comments = models.TextField()
    
    

    def __str__(self):
        return f"Match {self.event.event_name} - Match {self.match_number}"
