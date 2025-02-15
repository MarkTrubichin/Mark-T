from django.db import models

# Create your models here.
class Skills(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=10, blank=True, null=True)
    level = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name



class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    technologies = models.CharField(max_length=500)
    githublink = models.URLField(blank=True, null=True)
    type = models.CharField(max_length=100, default="Other")

    def __str__(self):
        return self.title
