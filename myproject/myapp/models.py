from django.contrib.auth.models import AbstractUser
from django.db import models

#Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    genre = models.CharField(max_length=50)
    published_date = models.DateField()
    isbn = models.CharField(max_length=13, blank=True, null=True)
    available = models.BooleanField(default=True)


    def __str__(self):
        return self.title