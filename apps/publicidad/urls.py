from django.urls import path
from .views import  ArticuloListView,ArticuloDetailView,ArticuloDelView,ArticuloUpView, ArticuloCreateView, pqrs



urlpatterns = [
    path('articulo/', ArticuloListView.as_view()),
    path('articulo/create/', ArticuloCreateView.as_view()),
    path('articulo/detail/<pk>', ArticuloDetailView.as_view()),
    path('articulo/update/<pk>', ArticuloUpView.as_view()),
    path('pqrs/',pqrs),
]

