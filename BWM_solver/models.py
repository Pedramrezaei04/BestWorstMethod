from django.db import models

class Calculation(models.Model):
    n = models.IntegerField()
    m = models.FloatField()
    weights = models.TextField()
