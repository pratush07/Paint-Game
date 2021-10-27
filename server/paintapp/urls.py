"""
create_timetable URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
"""
from django.conf.urls import url
from paintapp import views

urlpatterns = [
    url(r'^create/room/', views.create_room, name='create_room'),
    url(r'^create/user/', views.create_user, name='create_user'),
    url(r'^join/room/', views.join_room, name='join_room'),
    url(r'^update/coordinate/', views.update_coordinates, name='update_coordinates'),
    url(r'^info/room/', views.info_room, name='info_room'),
]