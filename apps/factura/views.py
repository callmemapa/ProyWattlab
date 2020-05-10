from django.shortcuts import render
from .models import *
from .serializers import *

from rest_framework import status,viewsets
from rest_framework.response import Response

 
class ClienteViewSet(viewsets.ModelViewSet): 
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer    
    
class ContratoViewSet(viewsets.ModelViewSet):
    queryset = Contrato.objects.all()
    serializer_class= ContrIndiSerializer
    
class SubEstacionViewSet(viewsets.ModelViewSet):
    queryset = SubEstacion.objects.all()
    serializer_class= SubEstSerializer

class TransfoViewSet(viewsets.ModelViewSet):
    queryset = Transformador.objects.all()
    serializer_class= TranforSerializer
# Create your views here.
