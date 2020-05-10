from django.conf import settings
from django.core.mail import  EmailMultiAlternatives

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, viewsets
from rest_framework.mixins import UpdateModelMixin

from .models import Articulo
from .serializer import ArticuloSerializer

# Create and list  your views here Publicidad.
class ArticuloView(viewsets.ModelViewSet): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 

class ArticuloUpView(generics.GenericAPIView, UpdateModelMixin): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 
    
    def put(self, request, *args, **kwargs):    
        return self.partial_update(request, *args, **kwargs)
    
# Envio de correo electronicos 
@api_view(['POST'])
def pqrs(request): 
    if request.method == 'POST': 
        data= []
        data = request.data
        return sendEmail(data)
       
def sendEmail(data): 
        asunto="PQR's: "+data.get('asunto') 
        email_to= data.get('email')
        email_from= settings.EMAIL_HOST_USER
        mensaje="MENSAJE: "+data.get('contenido')+". EMAIL USUARIO: "+email_to
        
        try:
            email= EmailMultiAlternatives(
                asunto,
                mensaje, 
                email_from,
                [email_to, email_from],
             )
            email.send()
        except BadHeaderError:
            return Response("NO SE PUDO ENVIAR", status= status.HTTP_400_BAD_REQUEST)
        return Response("REALIZADO", status= status.HTTP_200_OK)
        
        