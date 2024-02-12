from django.urls import path

from . import views

"""
Root url directory for home app.
Builds path to appropriate views.py method.
"""

urlpatterns = [
    path('services/', views.faq_index, name='services'),
    path('aboutyou/', views.faq_index, name='aboutyou'),
    path('geekpasta/', views.faq_index, name='geekpasta'),
    path('desktrail/', views.faq_index, name='desktrail'),
    path('aboutus/', views.faq_index, name='aboutus'),
    path('contact/', views.faq_index, name='contact'),
    path('customweb/', views.faq_index, name='customweb'),
    path('marketing/', views.faq_index, name='marketing'),
    path('branding/', views.faq_index, name='branding'),
    path('structyourbus/', views.faq_index, name='structyourbus'),
    path('software/', views.faq_index, name='software'),
    path('apps/', views.faq_index, name='apps'),
    path('appint/', views.faq_index, name='appint'),
    path('yourideas/', views.faq_index, name='yourideas'),
    path('login/action/', views.login_action, name='login_action'),
    path('fail/', views.login_fail, name='login_fail'),
    path('logout/', views.logout_user, name='logout_user'),
    path('home/', views.home_index, name='home_index'),
    path('Oops/', views.oops_page, name='oops_page'),
    path('faq/', views.faq_index, name='faq_index'),
    path('login/', views.login_index, name='login_index'),
    path('unauthorized/', views.unauthorized_page, name='unauthorized_page'),
    path('', views.home_index, name='home_index')
]
