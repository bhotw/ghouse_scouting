from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        if not password:
            raise ValueError('A password is required.')
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)

class CustomUser(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    # password = models.CharField(max_length=128)
    # is_active = models.BooleanField(default=True)
    # is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = CustomUserManager()

    def __str__(self):
        return self.username


# class Event(Base):
#     __tablename__ = 'event'

#     id = Column(Integer, primary_key=True)
#     event_name = Column(String(50))
#     match_scouting_data = relationship('MatchScoutingData', back_populates='event')

#     def __repr__(self):
#         return f"Event(id={self.id}, event_name={self.event_name})"
    


class MatchScoutingData(models.Model):
    __tablename__ = 'match_scouting_data'

    id = models.AutoField(primary_key=True)

    match_number = models.IntegerField()
    team_number = models.IntegerField()

    starting_position = models.CharField(max_length=50)
    auto_speaker_scored = models.IntegerField()
    auto_speaker_missed = models.IntegerField()
    auto_line_crossed = models.CharField(max_length=50)
    auto_penalty = models.IntegerField()

    teleop_speaker_scored = models.IntegerField()
    teleop_speaker_missed = models.IntegerField()
    teleop_amp_scored = models.IntegerField()
    temop_amp_missed = models.IntegerField()

    teleop_penalty = models.IntegerField()

    climbed = models.CharField(max_length=50)
    trap = models.CharField(max_length=50)
    end_game_penalty = models.IntegerField()

    need_to = models.CharField(max_length=50)
    comments = models.TextField()

    who_created = models.CharField(max_length=50)
    # created = models.DateTimeField(null=True)

    


    def __repr__(self):
        return f"MatchScoutingData(id={self.id}, match_number={self.match_number}, team_number={self.team_number})"
