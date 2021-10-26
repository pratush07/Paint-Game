from django.http import JsonResponse
from . import validators, response, request, modelhelper


def create_user(req):
    # get the body of the request
    req_json, ex_req = request.get_request_body(req)

    # validate the response
    validation = validators.validate_create_user(req_json)

    # create entry in the user table
    user, ex_db = modelhelper.create_user(req_json, validation)

    # create a response message
    res = response.create_user_success_response(user, ex_db, ex_req)

    # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': ex_req , 'ex_db': ex_db})

def create_room(req):
    # get the body of the request
    req_json, ex_req = request.get_request_body(req)

    # validate the response 
    validation = validators.validate_create_room(req_json)

    # create entry in the room table
    room, ex_db = modelhelper.create_room(req_json, validation)

    # create a response message
    res = response.create_room_success_response(room, ex_db, ex_req)

    # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': ex_req , 'ex_db': ex_db})


def join_room(req):
    # get the body of the request
    req_json, ex_req = request.get_request_body(req)

    # validate the response
    validation = validators.validate_join_room(req_json)

    # create entry in the User_Room table
    user_room, ex_db = modelhelper.join_room(req_json, validation)

    # create a response message
    res = response.join_room_success_response(user_room, ex_db, ex_req)

    # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': ex_req , 'ex_db': ex_db})

def update_coordinates(req):
    # get the body of the request
    req_json, ex_req = request.get_request_body(req)

    # validate the response
    validation = validators.validate_update_coordinate(req_json)

    # create entry in the User_Score table
    user_coordinate, ex_db = modelhelper.update_coordinate(req_json, validation)

    # create a response message
    res = response.update_coordinate_success_response(user_coordinate, ex_db, ex_req)

    # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': ex_req , 'ex_db': ex_db})