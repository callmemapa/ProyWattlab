from django.shortcuts import render
from .models import *
from .serializers import *

from rest_framework import status,viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Count
from django.db.models import Avg, Max, Min, Sum
 
 
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

class TarifaViewSet(viewsets.ModelViewSet):
    queryset = Tarifa.objects.all()
    serializer_class = TarifaSerializer 
    
class BancoViewSet(viewsets.ModelViewSet):
    queryset = Banco.objects.all()
    serializer_class = BancoSerializer 

class ConsumoViewSet(viewsets.ModelViewSet):
    queryset = Consumo.objects.all()
    serializer_class = ConsumoSerializer 

class PagoViewSet(viewsets.ModelViewSet):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer 

class FacturaViewSet(viewsets.ModelViewSet):
    queryset = Facturacion.objects.all()
    serializer_class = FacturaSerializer   
    
@api_view(['GET'])
def ReporFinancieroView(request): 
    if request.method == 'GET': 
        clin=  Cliente.objects.count() 
        contrato = Contrato.objects.count() 
        subE = SubEstacion.objects.count() 
        trnsf= Transformador.objects.count() 
        banco_Activo= Banco.objects.filter(estado=True).count()
        banco_Inctivo= Banco.objects.filter(estado=False).count()
        consumo= Consumo.objects.all().aggregate(prom=Avg('kwh')) ['prom'] or 0
        pago = Pago.objects.all().aggregate(valor=Sum('vlr_pgdo'))['valor'] or 0
        
        return Response({'clientes': str(clin), 'contrato': str(contrato), 'subE': str(subE), 
                         'trnsf': str(trnsf), 'banco_Activo': str(banco_Activo),
                         'banco_Inctivo': str(banco_Inctivo),'consu_ener':str(consumo), 
                         'dinero':str(pago)}, status= status.HTTP_200_OK)
