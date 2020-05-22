from django.shortcuts import render
from .models import *
from .serializers import *

from rest_framework import status,viewsets, mixins,generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from django.db.models import Count
from django.db.models import Avg, Max, Min, Sum
  
    
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
    
    
class ClienteViewSet(generics.GenericAPIView, mixins.CreateModelMixin, 
                     mixins.ListModelMixin, mixins.UpdateModelMixin): 
    
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    
    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, *args, **kwargs):    
        return self.partial_update(request, *args, **kwargs)

class ContratoViewSet(generics.GenericAPIView, mixins.CreateModelMixin,
                       mixins.ListModelMixin, mixins.UpdateModelMixin):
    queryset = Contrato.objects.all()
    serializer_class= ContrIndiSerializer
    
    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, *args, **kwargs):    
        return self.partial_update(request, *args, **kwargs)


@api_view(['POST'])
def FactViewSet(request): 
    if request.method == 'POST': 
        contrat = Contrato.objects.get(id=request.data['contrato'])
        consumo = Consumo.objects.filter(idntfccn_cntrto=contrat.id).last()
        query = Facturacion.objects.filter(cnsctvo_cnsmo=consumo.id)
        serializer = FacturaSerializer(query, many=True)
        
        return Response(serializer.data,status= status.HTTP_200_OK)
        
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
