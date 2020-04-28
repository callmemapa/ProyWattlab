
from rest_framework import status, generics, viewsets
from rest_framework.mixins import UpdateModelMixin

from rest_framework.response import Response
from rest_framework.authtoken.models import  Token
from rest_framework.authtoken.views import ObtainAuthToken

from django.contrib.auth.models import User
from .serializer import  UserSerializer, UpdateUserSerializer, ProfileSeralizer

#Listar/Registrar usuarios (GET/POST)
class UserView(viewsets.ModelViewSet): 
    queryset = User.objects.all()
    serializer_class = UserSerializer  
    

#Login usuarios 
class LoginUserView(ObtainAuthToken):
    
    def post(self, request, *args, **kwargs):    
        respons = super(LoginUserView, self).post(request, *args, **kwargs)
        token= Token.objects.get(key=respons.data['token'])
        user= User.objects.get(id= token.user_id)
        user_serializer = UserSerializer(user, many=False)
        
        return Response({
            'token': token.key, 
            'user': user_serializer.data
        }, status= status.HTTP_200_OK)

#Update user and profile
class UpdateUser(generics.GenericAPIView, UpdateModelMixin): 
    
    serializer_class= UpdateUserSerializer
    queryset= User.objects.all()
    
    def put(self, request, *args, **kwargs):    
        return self.partial_update(request, *args, **kwargs)
    



        
        
    

