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
        fields=('id','estrt_scl','drccn','cliente','estado')
        extra_kwargs={'cliente' :{"read_only":True}} 
        
class ClienteSerializer (serializers.ModelSerializer):
    contrato= ContrSerializer(write_only=True)
    
    class Meta: 
        model= Cliente
        fields = ('id','nmro_idntfccn', 'prmr_nmbre', 'prmr_aplldo',  'fcha_ncmnto', 
                  'tpo_idntfcn', 'tpT_clnte', 'contrato')
        extra_kwargs={'fcha_ncmnto' :{"write_only": True}}

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
        