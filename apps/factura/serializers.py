from rest_framework import serializers
from .models import * 
from django.db import transaction

        
###################################################### 
class ContrIndiSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contrato
        fields=('id','estrt_scl','drccn','cliente','estado') 
       
class ContrSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contrato
        fields=('id','estrt_scl','drccn')
        
class ClienteSerializer (serializers.ModelSerializer):
    contrato= ContrSerializer(write_only=True)
    
    class Meta: 
        model= Cliente
        fields = ('id','nmro_idntfccn', 'prmr_nmbre', 'prmr_aplldo',  'fcha_ncmnto', 
                  'tpo_idntfcn', 'tpT_clnte', 'contrato')

    @transaction.atomic
    def create(self, validated_data):
        contrato_data= validated_data.pop('contrato')
        cliente = Cliente.objects.create(**validated_data)
        cliente.contrato = Contrato.objects.create(cliente=cliente, **contrato_data)
        cliente.save()
        
        return cliente


##################################
class SubEstSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubEstacion
        fields= ('id', 'nombre', 'drccn', 'tlfno', 'lngtd', 'lttd', 'estdo')
        
class TranforSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Transformador
        fields=('id', 'sub_estcn','grpo_cnxn', 'tnsn_prmra',
                'tnsn_mxma_srvco','tnsn_scndra', 'ptnca_nmnl' ,
                'intnsdd_nmnl_prmra' ,'tnsn_crto_crcto' ,'rlcn_trnsfrmcn', 
                 'tnsn_crto_crcto', 'rlcn_trnsfrmcn', 
                 'lngtd','lttd', 'estdo', 'obsrvcn')
        extra_kwargs={'grpo_cnxn' :{"write_only": True},
                      'tnsn_prmra' :{"write_only": True},
                      'tnsn_mxma_srvco' :{"write_only": True},
                      'tnsn_scndra' :{"write_only": True},
                      'ptnca_nmnl' :{"write_only": True}, 
                      'intnsdd_nmnl_prmra' :{"write_only": True},
                      'tnsn_crto_crcto' :{"write_only": True},
                      'rlcn_trnsfrmcn' :{"write_only": True} }

##################PAGOS
class TarifaSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Tarifa
        fields = ('id', 'vlr_kwh', 'obsrvcn', 'estdo')

class BancoSerializer (serializers.ModelSerializer):
    class Meta:
        model=Banco
        fields=('id', 'nmbre_bnco', 'drccn', 'tlfno', 'estado')
        
class ConsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Consumo
        fields =('id', 'idntfccn_cntrto', 'kwh', 'prdo_cnsmo')

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Pago
        fields = ('id', 'idntfccn_bnco', 'cnsctvo_fctra', 'nmro_unco_idntfccn_usro',
                  'vlr_pgdo','tp_pgdo','nmro_trjt', 'fcha_pgo', 'obsrvcn')
        
class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Facturacion
        fields =('id', 'cnsctvo_cnsmo', 'cnsctvo_trfa', 
                 'vlr_cnsmo', 'vlr_intrss_mra', 'vlr_rcnxn', 
                  'vlr_ttl', 'fcha_lmte_pgo', 'cntdd_fctrs_pndts',
                  'fcha_crte_srvco', 'obsrvcn', 'estado')
        
        depth=2
