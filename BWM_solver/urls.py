from django.contrib import admin
from django.urls import path
from BWM_solver import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('calculate/', views.calculate, name='calculate'),
    path('solver/', views.solver, name='solver'),
    path('calculate/', views.calculate, name='calculate')
    
]
