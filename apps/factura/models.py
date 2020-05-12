from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

class TipoId (models.Model): 
    dscrpcn_tpo_idntfcn = models.CharField(max_length=50)
    def __str__(self):
        return self.dscrpcn_tpo_idntfcn
    
class TipoCliente(models.Model): 
    dscrpcn_tpo_clnte = models.CharField(max_length=50)
    def __str__(self):
        return self.dscrpcn_tpo_clnte

class Tarifa (models.Model):
    vlr_kwh = models.FloatField(default=0)
    inco_vgca = models.DateTimeField(auto_now_add=True)
    obsrvcn =models.CharField(max_length=150)
    estdo = models.BooleanField(default=True)
    
    def __str__(self):
        return self.obsrvcn
    
class Cliente(models.Model): 
    nmro_idntfccn = models.CharField(max_length=11)
    prmr_nmbre = models.CharField(max_length=50)
    prmr_aplldo = models.CharField(max_length=50)
    fcha_ncmnto = models.DateField(null= True)
    tpo_idntfcn = models.ForeignKey(TipoId, on_delete=models.CASCADE)
    tpT_clnte = models.ForeignKey(TipoCliente, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.prmr_nmbre+' '+self.prmr_aplldo
    
class Contrato (models.Model): 
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    estrt_scl = models.CharField(max_length=2, default='0')
    drccn = models.CharField(max_length=150, default='')
    
    def __str__(self):
        return self.drccn
    
class Consumo (models.Model):
    idntfccn_cntrto = models.ForeignKey(Contrato, on_delete= models.CASCADE)
    kwh = models.IntegerField(default=0)
    prdo_cnsmo = models.CharField(max_length=50, default='')
    obsrvcn = models.CharField(max_length=150, default='')
    
    def __str__(self):
        return self.obsrvcn
    
class Banco(models.Model): 
    nmbre_bnco = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    estado = models.BooleanField(default=True)
    
    def __str__(self):
         return self.nmbre_bnco

class Facturacion(models.Model):
    cnsctvo_cnsmo = models.ForeignKey(Consumo, on_delete=models.CASCADE)
    cnsctvo_trfa = models.ForeignKey (Tarifa, on_delete=models.CASCADE)
    vlr_cnsmo= models.FloatField(default=0.0)
    vlr_intrss_mra= models.FloatField(default=0.0)
    vlr_rcnxn = models.FloatField(default=0.0)
    vlr_ttl = models.FloatField(default=0.0)
    fcha_lmte_pgo = models.DateField()
    cntdd_fctrs_pndts= models.IntegerField(default=0.0)
    fcha_crte_srvco = models.DateField()
    obsrvcn = models.CharField(max_length=150, default='')
    
    def __str__(self):
        return self.obsrvcn
    
class Pago(models.Model):
    idntfccn_bnco = models.ForeignKey(Banco, on_delete=models.CASCADE, null= True)
    cnsctvo_fctra = models.OneToOneField(Facturacion, on_delete=models.CASCADE)
    vlr_pgdo = models.FloatField(default=0)
    nmro_unco_idntfccn_usro = models.ForeignKey(User, on_delete=models.CASCADE)
    fcha_pgo = models.DateTimeField(auto_now_add=True)
    obsrvcn = models.CharField(max_length=150, default='')
    
    def __str__(self):
        return self.obsrvcn

class SubEstacion (models.Model):
    nombre = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    lngtd = models.FloatField(default=0)
    lttd = models.FloatField(default=0)
    estdo= models.BooleanField(default=True)
    
    def __str__(self):
        return self.nombre
    
class Transformador(models.Model): 
    sub_estcn= models.ForeignKey(SubEstacion, on_delete= models.CASCADE)
    grpo_cnxn= models.CharField(max_length=20)
    tnsn_prmra = models.IntegerField(default=0)
    tnsn_mxma_srvco = models.IntegerField(default=0)
    tnsn_scndra = models.IntegerField(default=0)
    ptnca_nmnl= models.IntegerField(default=0)
    intnsdd_nmnl_prmra = models.IntegerField(default=0)
    tnsn_crto_crcto = models.IntegerField(default=0)
    rlcn_trnsfrmcn = models.IntegerField(default=0)
    lngtd = models.FloatField(default=0)
    lttd= models.FloatField(default=0)
    estdo= models.BooleanField(default=True)
    obsrvcn= models.CharField(max_length=150, default='')
    
    def __str__(self):
        return self.obsrvcn
    
class Ciudad(models.Model):
    nmbre_cdd= models.CharField(max_length=150)
    
    def __str__(self):
        return self.nmbre_cdd
    

