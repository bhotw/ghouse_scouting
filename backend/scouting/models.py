from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)

class CustomUser(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin



# class Event(Base):
#     __tablename__ = 'event'

#     id = Column(Integer, primary_key=True)
#     event_name = Column(String(50))
#     match_scouting_data = relationship('MatchScoutingData', back_populates='event')

#     def __repr__(self):
#         return f"Event(id={self.id}, event_name={self.event_name})"

# class MatchScoutingData(Base):
#     __tablename__ = 'match_scouting_data'

#     id = Column(Integer, primary_key=True)
#     event_id = Column(Integer, ForeignKey('event.id'))
#     event = relationship('Event', back_populates='match_scouting_data')

#     match_number = Column(Integer)
#     team_number = Column(Integer)

#     auto_starting_position = Column(String(50))
#     auto_speaker = Column(Integer)
#     auto_line_crossed = Column(String(50))
#     auto_penalty = Column(Integer)

#     teleop_speaker = Column(Integer)
#     teleop_amp = Column(Integer)
#     teleop_penalty = Column(Integer)
#     teleop_good_for = Column(String(50))

#     climbed = Column(String(50))
#     trap = Column(String(50))
#     end_game_penalty = Column(Integer)

#     need_to = Column(String(50))
#     comments = Column(Text)

#     def __repr__(self):
#         return f"MatchScoutingData(id={self.id}, match_number={self.match_number}, team_number={self.team_number})"
