from django.urls import path
from .views import SkillListView, ProjectListAPIView, ProjectDetailView
from .views import favicon_view


urlpatterns = [
    path("skills/", SkillListView.as_view(), name="skill-list"),
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
]
