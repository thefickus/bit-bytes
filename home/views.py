from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.template import loader
from django.urls import reverse
from django.contrib import auth


def login_index(request):
    """ Login page """
    return render(request, 'home/login/index.html', {})

def services(request):
    return render(request, 'home/services.html', {})

def aboutyou(request):
    return render(request, 'home/aboutyou.html', {})

def geekpasta(request):
    return render(request, 'home/geekpasta.html', {})

def desktrail(request):
    return render(request, 'home/desktrail.html', {})

def aboutus(request):
    return render(request, 'home/aboutus.html', {})

def contact(request):
    return render(request, 'home/contact.html', {})

def customweb(request):
    return render(request, 'home/customweb.html', {})

def marketing(request):
    return render(request, 'home/marketing.html', {})

def branding(request):
    return render(request, 'home/branding.html', {})

def structyourbus(request):
    return render(request, 'home/structyourbus.html', {})

def software(request):
    return render(request, 'home/software.html', {})

def apps(request):
    return render(request, 'home/apps.html', {})

def appint(request):
    return render(request, 'home/appint.html', {})

def yourideas(request):
    return render(request, 'home/yourideas.html', {})

def login_action(request):
    """ Queries user database """
    username = request.POST.get('username')
    password = request.POST.get('password')
    if request.method == 'POST':
        user = authenticate(username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('/home/')
        else:
            return redirect('/fail/')
    else:
        return redirect('/home/login/')


def login_fail(request):
    """ Failed login redirect, this code has issues """
    return render(request, 'home/login/fail.html', {})


def logout_user(request):
    """ Clears session """
    auth_logout(request)
    return redirect('/home/login/')


def home_index(request):
    """ Website splash screen after login """
    #if request.user.is_authenticated:
    return render(request, 'home/home.html', {})
    #else:
    #    return redirect('/login/')


def oops_page(request):
    """ Error page """
    return render(request, 'home/misc/oops.html', {})


def unauthorized_page(request):
    """ 503 redirect """
    return render(request, 'home/misc/unauthorized.html', {})


def faq_index(request):
    """ faq page """
    return render(request, 'home/faq.html')
