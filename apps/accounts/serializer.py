from rest_framework import serializers
from rest_framework.authtoken.models import  Token

from django.contrib.auth import authenticate
from django.db import transaction

from .models import Profile
from django.contrib.auth.models import User

#Profile
class ProfileSeralizer(serializers.ModelSerializer): 
    class Meta: 
        model= Profile
        fields =('identificacion', 'tipo_usuario')
        extra_kwargs = {'identificacion': {"write_only": True, 'required': True}}
     
    def update(self,instance,validated_data):
        instance.tipo_usuario= validated_data.get('tipo_usuario', instance.tipo_usuario)
        instance.save()
            

#Usuarios
class UserSerializer(serializers.ModelSerializer):
    profile= ProfileSeralizer()
    
    class Meta: 
        model= User
        fields = ('id', 'username', 'first_name', 'last_name','email','password','is_active','profile')
        extra_kwargs = {'password': {"write_only": True, 'required': True},
                        'email': {'required': True} }
    
    @transaction.atomic
    def create(self, validated_data):
        profile_data= validated_data.pop('profile')
        user = User.objects.create_user(**validated_data)
        user.profile = Profile.objects.create(user=user, **profile_data)
        user.save()
        Token.objects.create(user=user)
        
        return user 
    
        
#Update user and profile
class UpdateUserSerializer(serializers.ModelSerializer):
    profile= ProfileSeralizer()
    
    class Meta: 
        model= User
        fields = ('id', 'username', 'first_name', 'last_name','email','is_active', 'profile')
    
    
    def update(self, instance, validated_data):
        instance.username= validated_data.get('username', instance.username)
        instance.first_name= validated_data.get('first_name', instance.first_name)
        instance.last_name= validated_data.get('last_name', instance.last_name)
        instance.email= validated_data.get('email', instance.email)
        instance.is_active= validated_data.get('is_active', instance.is_active)
        
        nested_serializer = self.fields['profile']
        nested_instance = instance.profile
        
        nested_data = validated_data.pop('profile')
        nested_serializer.update(nested_instance, nested_data)
        # this will not throw an exception,
        # as `profile` is not part of `validated_data`
        return super(UpdateUserSerializer, self).update(instance, validated_data)


    