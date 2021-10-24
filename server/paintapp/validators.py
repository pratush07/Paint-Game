from paintapp import serializers

def validate_create_user(request):
    validation = serializers.UserSerializer(data=request)
    return return_validator_body(validation)

def validate_create_room(request):
    validation = serializers.RoomSerializer(data=request)
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