from django.urls import path, include
from rest_framework import routers

from .views import  ArticuloView, ArticuloUpView, pqrs


router = routers.DefaultRouter()
router.register('articulo',  ArticuloView)

urlpatterns = [
    path('', include(router.urls)),
    path('articulo/update/<pk>/', ArticuloUpView.as_view()),
    path('pqrs/',pqrs),
]

