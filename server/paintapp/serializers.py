from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    mobile_num = serializers.CharField(max_length=15, required=True)
    name = serializers.CharField(max_length=30, required=True)

class RoomSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(required=True)
    name = serializers.CharField(max_length=30, required=True)

class JoinRoomSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(required=True)
    room_id = serializers.IntegerField(required=True)

class UpdateCoordinatesSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(required=True)
    room_id = serializers.IntegerField(required=True)
    x = serializers.IntegerField(required=True)
    y = serializers.IntegerField(required=True)