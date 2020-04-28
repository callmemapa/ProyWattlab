from django.urls import path, include
from django.contrib.auth import  views as auth_views 
from .views import  UserView, LoginUserView, UpdateUser
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', UserView)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginUserView.as_view()),
    path('account/change-active/<pk>/', UpdateUser.as_view()),
    path('account/password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('account/password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('account/password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'), 
   
]

