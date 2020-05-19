from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('activo-sub', SubEstacionViewSet)
router.register('activo-trans', TransfoViewSet)
router.register('tarifa', TarifaViewSet)
router.register('banco', BancoViewSet)
router.register('consumo', ConsumoViewSet)
router.register('pago', PagoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cliente/', ClienteViewSet.as_view()),
    path('cliente/<pk>/',ClienteViewSet.as_view()),
    path('cliente-contrato/', ContratoViewSet.as_view()),
    path('cliente-contrato/<pk>/', ContratoViewSet.as_view()),
    path('reporte/', ReporFinancieroView),
    path('factura/', FactViewSet),
]

