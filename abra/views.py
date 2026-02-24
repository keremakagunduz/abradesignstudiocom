from rest_framework import viewsets, status, generics
from .models import Asset, Project, Category
from .serializers import ProjectSerializer, CategorySerializer
from django.http import HttpResponse
from django.views.generic import TemplateView
from rest_framework.response import Response
#from django_filters.rest_framework import DjangoFilterBackend

class ReactAppView(TemplateView):
    template_name = 'index.html'


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.prefetch_related("categories").order_by('display_priority') 
    serializer_class = ProjectSerializer

    # ---- filtering ----
    #filter_backends = [DjangoFilterBackend]
    #filterset_class = ProjectFilter
    # (optional) allow the same param name as the front‑end:
    # filterset_fields = ["categories"]


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
