from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

"""Настройка, чтобы забирать картинки из папки media"""
urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('', include('lastar_app.urls'))
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
