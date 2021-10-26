from .models import *
from datetime import datetime, timedelta

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
    user_room = None

    try:
        user_coordinate = User_Coordinate(user_id = req_json['user_id'], room_id = req_json['room_id'], 
        x = req_json['x'], y = req_json['y'])
        user_coordinate.save()
    except Exception as e:
        ex = str(e)
    return user_coordinate, ex

