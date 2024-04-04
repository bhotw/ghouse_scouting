from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from .models import CustomUser, MatchScoutingData
from .serializers import createUserSerializer, UserLoginSerializer, UserSerializer, MatchScoutingDataSerializer, ViewScoutingSerializer
from rest_framework import permissions, status
from rest_framework.response import Response
from .validations import custom_validation, validate_email, validate_password

class CreateUser(APIView):
    permission_class = (permissions.AllowAny)
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = createUserSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    



class viewAllUsers(APIView):
    queryset = CustomUser.objects.all()
    serializer_class = createUserSerializer

class UserLogin(APIView):
    permission_class = (permissions.AllowAny)
    authentication_classes = (SessionAuthentication, )

    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user' : serializer.data}, status=status.HTTP_200_OK)
    

class AddMatchScouting(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        serializer = MatchScoutingDataSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response({
            "Scouting Data: " :
            serializer.data
        }, status=status.HTTP_200_OK)
    
class GetScoutingData(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##

    
    def get(self, request):
        matchscouting = MatchScoutingData.objects.all()
        serializer = MatchScoutingDataSerializer(matchscouting, many=True)
        return Response({" Scouting data ": serializer.data}, status=status.HTTP_200_OK)
