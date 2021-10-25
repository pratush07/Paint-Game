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
    room = None

    try:
        #expiry = datetime.now() + timedelta(minutes=5)
        test_user = User.objects.get(id=req_json['user_id'])
        print(test_user.name)
        try:
            test_room = Room.objects.get(id=req_json['room_id'])
            print(test_room.name)
        except Exception as e:
            return "NoRoom",ex #Temporary
        user_room = User_Room(user=User.objects.get(id=req_json['user_id']),
                              room=Room.objects.get(id=req_json['room_id'])
                              )

        user_room.save()
    except Exception as e:
        ex = str(e)
    return user_room, ex

