"""
create_timetable URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
"""
from django.conf.urls import url
from paintapp import views
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^create/room/', views.create_room, name='create_room'),
    url(r'^create/user/', views.create_user, name='create_user'),
    url(r'^join/room/', views.join_room, name='join_room'),
    url(r'^update/coordinate/', views.update_coordinates, name='update_coordinates'),
    url(r'^info/room/', views.info_room, name='info_room'),
    url(r'^start/room/', views.start_room, name='start_room'),
    url(r'^end/room/', views.end_room, name='end_room'),
    url(r'^user/', views.get_user, name='get_user'),
    url(r'^room/', views.get_room, name='get_room'),
]
