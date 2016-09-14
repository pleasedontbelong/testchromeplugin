from django.conf.urls import include, url
from rest_framework import routers
from sandboxes import views

from django.contrib import admin
admin.autodiscover()


router = routers.DefaultRouter()
router.register(r'sandboxes', views.SandboxViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
