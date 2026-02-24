from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import ProjectViewSet, CategoryViewSet, ReactAppView
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
#router.register(r'artworks', ArtworkViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', ReactAppView.as_view(), name='home'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    #path("api/subscribe/", SubscribeCreateView.as_view(), name="api-subscribe"),

]

# media serving (development only)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
