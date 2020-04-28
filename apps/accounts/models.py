from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    identificacion= models.CharField(max_length=11, blank=False, null=False)
    tipo_usuario= models.CharField(max_length=15, blank=False, null=False)
    
    
    def __str__(self):
        return self.user.username
    