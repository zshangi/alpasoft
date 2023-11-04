from django.db.models.signals import pre_save
from django.contrib.auth.models import User


def updateUser(sender, instance, **kwargs):
    user = instance



    # print(f'{user.username} updated !  ;-)')


pre_save.connect(receiver=updateUser, sender=User)
