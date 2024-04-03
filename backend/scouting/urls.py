from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views  # Assuming your viewset is in a file named 'views.py'


urlpatterns = [
    path('register', views.CreateUser.as_view(), name='register'),  
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('user', views.UserView.as_view(), name='user'),
    path('addscouting', views.AddMatchScouting.as_view(), name='addscouting'),
    path('getscouting', views.GetScoutingData.as_view(), name="getscouting"),
]