from rest_framework import serializers
from .models import Project, Category, Asset

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']



class ProjectSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'subtitle', 'display_priority', 'cover_image',
            'secondary_cover_image',
            'summary', 'published_date', 'categories', 'artworks'
        ]


class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = ['id', 'title', 'image', 'description', 'created_at']
