from django.http import JsonResponse
from . import validators, response, request, modelhelper
from django.http import HttpResponse


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

def info_room(req):
     # get the body of the request
    req_get = req.GET

    # # validate the response
    validation = validators.validate_room_info(req_get)

    # # create entry in the User_Score table
    user_coordinate, ex_db = modelhelper.get_room_info(req_get, validation)

    # # create a response message
    res = response.room_info_success_response(user_coordinate, ex_db)

    # # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': None , 'ex_db': ex_db})


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

def start_room(req):
    # get the body of the request
    req_json, ex_req = request.get_request_body(req)

    # validate the response
    validation = validators.validate_start_room(req_json)

    # update entry in the Room table
    room,user_colours, ex_db = modelhelper.start_room(req_json, validation)

    # create a response message
    res = response.start_room_success_response(room, user_colours, ex_db, ex_req)

    # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': ex_req , 'ex_db': ex_db})

def end_room(req):
    # get the body of the request
    req_json, ex_req = request.get_request_body(req)

    # validate the response
    validation = validators.validate_end_room(req_json)

    # update entry in the Room table
    room, ex_db = modelhelper.end_room(req_json, validation)

    # create a response message
    res = response.end_room_success_response(room, ex_db, ex_req)

    # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': ex_req , 'ex_db': ex_db})

def get_user(req):

    # get the body of the request
    req_get = req.GET

    # # validate the response
    validation = validators.validate_get_user(req_get)

    # # Retrieve id from User table
    user_id, ex_db = modelhelper.get_user(req_get, validation)

    # # create a response message
    res = response.get_user_success_response(user_id, ex_db)

    # # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': None , 'ex_db': ex_db})


def get_room(req):
    # get the body of the request
    req_get = req.GET

    # # validate the response
    validation = validators.validate_get_room(req_get)

    # # Retrieve room id and room name from User_Room table
    room_id, room_name, topic, ex_db = modelhelper.get_room(req_get, validation)

    # # create a response message
    res = response.get_room_success_response(room_id, room_name, topic, ex_db)

    # # create a http response body
    return response.create_response_body(res=res, validation=validation, ex={'ex_req': None, 'ex_db': ex_db})
