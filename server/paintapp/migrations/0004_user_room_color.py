# Generated by Django 3.2.8 on 2021-10-28 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paintapp', '0003_user_coordinate'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_room',
            name='color',
            field=models.CharField(default='#000000', max_length=7, unique=True),
        ),
    ]
