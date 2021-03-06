from .models import *
from datetime import datetime, timedelta
import random

def create_user(req_json={}, validation = {}):
    if not validation['success']:
        return None, None
    
    ex = None
    user = None
    
    try:
        user = User(name = req_json['name'], mobile_num = req_json['mobile_num'])
        user.save()
    except Exception as e:
        ex = str(e)

    return user, ex

def create_room(req_json={}, validation = {}):
    if not validation['success']:
        return None, None
    
    ex = None
    room = None
    
    try:
        expiry = datetime.now() + timedelta(minutes=5)
        room = Room(name = req_json['name'], user_id = req_json['user_id'], expiry=expiry)
        room.save()
    except Exception as e:
        ex = str(e)
    return room, ex


def join_room(req_json={}, validation={}):
    if not validation['success']:
        return None, None

    ex = None
    user_room = None

    try:
        user_room, created = User_Room.objects.get_or_create(user_id=req_json['user_id'], room_id=req_json['room_id'])
    except Exception as e:
        ex = str(e) + '( Room id and/or user id does not exist )'
    return user_room, ex

def update_coordinate(req_json={}, validation={}):
    if not validation['success']:
        return None, None

    ex = None
    user_coordinate = None

    try:
        # check if user has joined
        User_Room.objects.filter(user_id = req_json['user_id'], room_id = req_json['room_id'])
        # add coordinate
        user_coordinate = User_Coordinate(user_id = req_json['user_id'], room_id = req_json['room_id'], 
        x = req_json['x'], y = req_json['y'])
        user_coordinate.save()
        
    except Exception as e:
        ex = str(e)
    return user_coordinate, ex

def get_room_info(req_get={}, validation={}):
    if not validation['success']:
        return None, None

    ex = None
    room_info = None

    try:
        user_coordinates = User_Coordinate.objects.filter(room_id = req_get['room_id']).values()
        user_rooms = User_Room.objects.filter(room_id = req_get['room_id'])
        room = Room.objects.get(id=req_get['room_id'])
        room_info = {'status': room.status, 'coordinates': {}, "user_info": [ {user_room.user.id : user_room.color} for user_room in user_rooms]}
        for user_c in user_coordinates:
            if user_c['user_id'] not in room_info['coordinates']:
                room_info['coordinates'][user_c['user_id']] = []
            room_info['coordinates'][user_c['user_id']].append({'x': user_c['x'], 'y': user_c['y']})

    except Exception as e:
        ex = str(e)
    return room_info, ex

def start_room(req_json={}, validation={}):
    if not validation['success']:
        return None, None

    ex = None
    room = None
    user_colours = {}
    try:
        user_colours = assign_colors(req_json)
        room = Room.objects.get(id=req_json['room_id'])
        room.status = 'STARTED'
        room.save()
    except Exception as e:
        ex = str(e) + '( Error starting game )'
    return room,user_colours, ex

def end_room(req_json={}, validation={}):
    if not validation['success']:
        return None, None

    ex = None
    room = None

    try:
        room = Room.objects.get(id=req_json['room_id'])
        room.status = 'TERMINATED'
        room.save()
    except Exception as e:
        ex = str(e) + '( Error ending game )'
    return room, ex

def get_user(req_get={}, validation={}):
    if not validation['success']:
        return None, None

    ex = None
    user = None
    user_id = None

    try:
        user = User.objects.get(mobile_num=req_get['mobile_num'])
        user_id = getattr(user,'id')
    except Exception as e:
        ex = str(e)
    return user_id, ex


def get_room(req_get={}, validation={}):
    if not validation['success']:
        return None, None, None, None

    ex = None
    room = None
    room_id = None
    room_name = None
    topic = None
    user_room = None

    try:
        user_room = User_Room.objects.get(user_id=req_get['user_id'])
        room_id = getattr(user_room,'room_id')
        room = Room.objects.get(id=room_id)
        room_name = getattr(room, 'name')
        topic = str(room_name)+'-'+str(room_id)
    except Exception as e:
        ex = str(e)
    return room_id, room_name, topic, ex

def assign_colors(req_json):
    user_colours = {}
    user_rooms = User_Room.objects.filter(room_id=req_json['room_id'])
    for entry in user_rooms:
        r = lambda: random.randint(0, 255)
        color = '#%02X%02X%02X' % (r(),r(),r())
        entry.color= color
        entry.save()
        user_colours[entry.user_id]=color
    
    return user_colours
