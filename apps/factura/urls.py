from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('cliente',ClienteViewSet)
router.register('cliente-contrato', ContratoViewSet)
router.register('activo-sub', SubEstacionViewSet)
router.register('activo-trans', TransfoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

