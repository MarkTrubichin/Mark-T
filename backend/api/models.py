from django.db import models

# Create your models here.
class Skills(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=10, blank=True, null=True)
    level = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name