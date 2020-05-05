from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class TipoIdentificacion(models.Model):
    dscrpcn_tpo_idntfcn = models.CharField(max_length=50)
    
    def __str__(self):
        return self.dscrpcn_tpo_idntfcn
    
class TipoCliente(models.Model):
    dscrpcn_tpo_clnte = models.CharField(max_length=50)
    
    def __str__(self):
        return self.dscrpcn_tpo_clnte
    
    
class Tarifa(models.Model):
    vlr_kwh = models.FloatField(default=0)
    inco_vgnca = models.DateTimeField(auto_now_add=True)
    obsrvcn = models.CharField(max_length=150)
    estdo = models.BooleanField(default= True)
    
class Departamento(models.Model):
    nmbre_dprtmnto = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nmbre_dprtmnto
    
class Ciudad(models.Model):
    cnsctvo_dprtmnto = models.ForeignKey(Departamento,on_delete=models.CASCADE)
    nmbre_cdd = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nmbre_cdd
    
#Pago.objects.filter(cnsctvo_fctra=Factura.objects.filter(ide=?))
#from datetime import date
#Article.objects.create(headline="Paul's story", pub_date=date(2006, 1, 17), reporter=r)
class Banco(models.Model):
    nmbre_bnco = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey(Ciudad,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nmbre_bnco 


class Cliente(models.Model):
    nmbre = models.CharField(max_length=50)
    aplldo = models.CharField(max_length=50, null=True)
    nmro_idntfccn = models.CharField(max_length=11)
    fcha_ncmnto = models.DateField(null=True)
    tpo_idntfcn = models.ForeignKey(TipoIdentificacion,on_delete=models.CASCADE)
    tpo_clnte = models.ForeignKey(TipoCliente,on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s %s" % (self.nmbre, self.cnsctvo_tpo_clnte.dscrpcn_tpo_clnte)

class Contrato(models.Model):
    cliente=models.OneToOneField(Cliente, on_delete=models.CASCADE)
    estrt_scl = models.CharField(max_length=150, default='0')
    drccn = models.CharField(max_length=150)
    cnsctvo_cdd = models.ForeignKey(Ciudad,on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s %s" % (self.cliente.nmbre, self.drccn)
    
class Consumo(models.Model):
    nmro_unco_idntfccn_cntrto = models.ForeignKey(Contrato,on_delete=models.CASCADE, null=False)
    kwh = models.IntegerField(default=0)
    prdo_cnsmo = models.DateField()
    
    class Meta:
        ordering = ['prdo_cnsmo']
    
class Facturacion(models.Model):
    cnsctvo_cnsmo = models.ForeignKey(Consumo,on_delete=models.CASCADE)
    cnsctvo_trfa = models.FloatField(default=0)
    vlr_cnsmo = models.FloatField(default=0)
    vlr_intrss_mra = models.FloatField(default=0)
    vlr_rcnxn = models.FloatField(default=0)
    vlr_ttl = models.FloatField(default=0)
    fcha_lmte_pgo = models.DateField()
    cntdd_fctrs_pndts = models.IntegerField(default=0)
    fcha_crte_srvco = models.DateField()

class Pago(models.Model):
    nmro_unco_idntfccn_bnco = models.ForeignKey(Banco,on_delete=models.CASCADE, null=True)
    cnsctvo_fctra = models.OneToOneField(Facturacion,on_delete=models.CASCADE, unique = True)
    vlr_pgdo = models.FloatField(default=0)
    nmro_unco_idntfccn_usro = models.ForeignKey(User,on_delete=models.CASCADE, null=True)
    fcha_pgo = models.DateTimeField(auto_now_add=True)

class SubEstacion(models.Model):
    nombre = models.CharField(max_length=50)
    drccn = models.CharField(max_length=50)
    tlfno = models.CharField(max_length=50)
    lngtd = models.FloatField(default=0)
    lttd = models.FloatField(default=0)
    estdo = models.BooleanField(default=True)
    
    def __str__(self):
        return "%s %s" % (self.cliente.nmbre, self.drccn)
    
    
class Transformador(models.Model):
    nmro_unco_idntfccn_sub_estcn = models.ForeignKey(SubEstacion,on_delete=models.CASCADE)
    tnsn_prmra = models.IntegerField(default=0)
    tnsn_mxma_srvco = models.IntegerField(default=0)
    tnsn_scndra = models.IntegerField(default=0)
    ptnca_nmnl = models.IntegerField(default=0)
    rlcn_trnsfrmcn = models.IntegerField(default=0)
    intnsdd_nmnl_prmra = models.IntegerField(default=0)
    tnsn_crto_crcto = models.IntegerField(default=0)
    grpo_cnxn = models.IntegerField(default=0)
    lngtd = models.FloatField(default=0)
    lttd = models.FloatField(default=0)
    estdo = models.BooleanField(default=True)

