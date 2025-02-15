from django.urls import path
from .views import SkillListView, ProjectListAPIView, ProjectDetailView


urlpatterns = [
    path("skills/", SkillListView.as_view(), name="skill-list"),
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
]
