from .models import Sandbox
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import SandboxSerializer


class SandboxViewSet(viewsets.ModelViewSet):
    queryset = Sandbox.objects.all().order_by('-pk')
    serializer_class = SandboxSerializer
    permission_classes = (AllowAny,)
    pagination_class = None
