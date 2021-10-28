from rest_framework import status
from django.http import JsonResponse

def create_user_success_response(user, ex_req, ex_db):
    if ex_req or ex_db or not user:
        return {}
    
    return {'message': 'User created', 'id': user.id}

def create_room_success_response(room, ex_req, ex_db):
    if ex_req or ex_db or not room:
        return {}
    
    return {'message': 'Room created', 'id': room.id}


def create_response_body(res = {}, validation={}, ex = None):
    status_code = status.HTTP_200_OK

    if ex['ex_db'] or ex['ex_req']:
        res['exception'] = ex
        status_code = status.HTTP_409_CONFLICT

    if not validation["success"]:
        res = {}
        if ex:
            res['exception'] = ex
        res["errors"] = validation["errors"]
        status_code = status.HTTP_400_BAD_REQUEST
    
    return JsonResponse(res, status=status_code)


def join_room_success_response(user_room, ex_req, ex_db):
    if ex_req or ex_db or not user_room:
        return {}

    return {'message': 'Room joined', 'room_id': user_room.room_id, 'user_id': user_room.user_id}

def update_coordinate_success_response(user_coordinate, ex_req, ex_db):
    if ex_req or ex_db or not user_coordinate:
        return {}

    return {'message': 'Hit added', 'room_id': user_coordinate.room_id, 
    'user_id': user_coordinate.user_id, 'x': user_coordinate.x, 'y': user_coordinate.y}

def room_info_success_response(room_info, ex_req=None, ex_db=None):
    if ex_req or ex_db or not room_info:
        return {}

    return {'message': 'Room info fetched', 'data': room_info}

def start_room_success_response(room, ex_db, ex_req):
    if ex_req or ex_db or not room:
        return {}

    return {'message': 'Game started'}

def end_room_success_response(room, ex_db, ex_req):
    if ex_req or ex_db or not room:
        return {}

    return {'message': 'Game terminated'}

def get_user_success_response(user_id, ex_req=None, ex_db=None):
    if ex_req or ex_db or not user_id:
        return {}

    return {'message': 'User Found', 'id': user_id}

def get_room_success_response(room_id, room_name, topic, ex_req=None, ex_db=None):
    if ex_req or ex_db or not room_id or not room_name or not topic:
        return {}

    return {'message': 'Room Found', 'id': room_id, 'Name': room_name, 'Topic': topic}