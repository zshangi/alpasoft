from django.urls import path
from base.views import electbill_views as views

urlpatterns = [

    path('', views.getBills, name='Bills'),
    path('upload/', views.upload_data, name='Bill'),
    path('<str:pk>/', views.getBill, name='Bill'),

]
