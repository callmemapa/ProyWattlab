from django.conf import settings
from django.core.mail import  EmailMultiAlternatives

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics 

from .models import Articulo
from .serializer import ArticuloSerializer


# Create your views here Publicidad.
class ArticuloListView(generics.ListAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 

class ArticuloDetailView(generics.RetrieveAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 
    
class ArticuloCreateView(generics.CreateAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 
    
class ArticuloDelView(generics.DestroyAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 

class ArticuloUpView(generics.UpdateAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 
    
# Envio de correo electronicos 
@api_view(['POST'])
def pqrs(request): 
    if request.method == 'POST': 
        data= []
        data = request.data
        sendEmail(data)
        return Response("Realizado")
    
    
def sendEmail(data): 
       
        asunto="PQR's: "+data.get('asunto') 
        email_to= data.get('email')
        email_from= settings.EMAIL_HOST_USER
        mensaje="MENSAJE: "+data.get('contenido')+". EMAIL USUARIO: "+email_to
            
        email= EmailMultiAlternatives(
            asunto,
            mensaje, 
            email_from,
            [email_to, email_from],
        )
        email.send()
        