from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
# router.register(r'home', views.home)
router.register(r'user-profiles', views.UserProfileViewSet)
# router.register(r'events', views.EventViewSet)
# router.register(r'match-scouting-data', views.MatchScoutingDataViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


