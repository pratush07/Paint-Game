from django.db import models

# Create your models here.

class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    class Meta:
        abstract=True

class User(BaseModel):
    name = models.CharField(max_length=30, null=False)
    mobile_num = models.CharField(max_length=15, unique=True)

class Room(BaseModel):
    STATUS_CHOICE = (('CREATED','CREATED'), ('STARTED', 'STARTED'), ('TERMINATED', 'TERMINATED'))

    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)
    name = models.CharField(max_length=30, null=False)
    status = models.CharField(max_length=12,choices=STATUS_CHOICE, default='CREATED')
    expiry = models.DateTimeField(null=True)

class User_Room(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

