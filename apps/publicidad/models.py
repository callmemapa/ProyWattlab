from django.db import models

# Create your models here.
class Articulo(models.Model): 
    titulo= models.CharField(max_length=50, blank=True, null=False)
    descripcion=models.TextField(max_length=1000, blank=False, null= False)
    url=models.CharField(max_length=100,blank=False, null=True)
    estado= models.BooleanField(default=True)
    fechaPublicacion= models.DateField(auto_now_add=True, auto_now=False)
    
    def __str__(self):
        return self.titulo
    