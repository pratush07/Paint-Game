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
    if user_room == "NoRoom":
        return {'message': 'No room'}
    if ex_req or ex_db or not user_room:
        return {}

    return {'message': 'Room joined', 'id': user_room.room_id}