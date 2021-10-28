from paintapp import serializers

def validate_create_user(request):
    validation = serializers.UserSerializer(data=request)
    return return_validator_body(validation)

def validate_create_room(request):
    validation = serializers.RoomSerializer(data=request)
    return return_validator_body(validation)

def validate_join_room(request):
    validation = serializers.JoinRoomSerializer(data=request)
    return return_validator_body(validation)

def validate_update_coordinate(request):
    validation = serializers.UpdateCoordinatesSerializer(data=request)
    return return_validator_body(validation)

def validate_room_info(request):
    validation = serializers.RoomInfoSerializer(data=request)
    return return_validator_body(validation)
    
def validate_start_room(request):
    validation = serializers.StartRoomSerializer(data=request)
    return return_validator_body(validation)

def validate_end_room(request):
    validation = serializers.EndRoomSerializer(data=request)
    return return_validator_body(validation)

def validate_get_user(request):
    validation = serializers.GetUserSerializer(data=request)
    return return_validator_body(validation)


def validate_get_room(request):
    validation = serializers.GetRoomSerializer(data=request)
    return return_validator_body(validation)


def return_validator_body(validation):
    res = {}
    res["success"] = True
    res["errors"] = None
    res["details"] = None
    if validation.is_valid():
        res["success"] = True
    else:
        res["success"] = False
        res["details"] = "Bad Request Body"
        res["errors"] = validation.errors
    return res