from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

from django.db import models
from django.contrib.auth.models import User

Base = declarative_base()

# class User(Base):
#     __tablename__ = 'user'

#     id = Column(Integer, primary_key=True)
#     username = Column(String(50), unique=True)
#     # Add other user fields as needed

#     profile = relationship("UserProfile", back_populates="user")

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user.username)

# class UserProfile(Base):
#     __tablename__ = 'user_profile'

#     id = Column(Integer, primary_key=True)
#     user = relationship("User", back_populates="profile")
#     is_active = Column(Boolean, default=True)
#     is_admin = Column(Boolean, default=False)

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
