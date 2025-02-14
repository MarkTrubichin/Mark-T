"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import os
from django.http import HttpResponse

def index(request):
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    frontend_path = os.path.join(BASE_DIR, "frontend", "build", "index.html")

    if os.path.exists(frontend_path):
        with open(frontend_path, "r", encoding="utf-8") as file:
            return HttpResponse(file.read(), content_type="text/html")

    return HttpResponse(f"React frontend not found. Expected path: {frontend_path}", status=404)


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", index, name="home"),
    path("api/", include("api.urls")),
]
