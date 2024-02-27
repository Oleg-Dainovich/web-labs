from django.urls import path
from . import views

app_name = "info"

urlpatterns = [
    path('', views.about_us_page, name='about_us'),
    path('vacancies/', views.vacancies, name='vacancies'),
    path('coupons/', views.coupons, name='coupons'),
    path('contacts/', views.contacts, name='contacts'),
    path('faq/', views.faq, name='faq'),
    path('privacy/', views.privacy, name='privacy')
]