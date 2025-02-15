import os
from django.http import FileResponse
from django.conf import settings



def favicon_view(request):
    path = os.path.join(settings.BASE_DIR, "backend", "favicon.svg")
    return FileResponse(open(path, 'rb'), content_type='image/svg+xml')