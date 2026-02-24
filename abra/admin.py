from django.contrib import admin
from .models import Project, Category, Asset

class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'title', 
        'subtitle', 
        'display_priority', 
        'cover_image', 
        'secondary_cover_image', 
        'summary', 
        'published_date',
        'category_list'
    )
    list_filter = ('published_date', 'categories')
    ordering = ('-display_priority', 'title')
    search_fields = ('title', 'subtitle', 'summary', 'categories__name')

class ArtworkAdmin(admin.ModelAdmin):
    list_display = ('project', 'id', 'image', 'created_at')
    search_fields = ('project__title',)

admin.site.register(Project, ProjectAdmin)
admin.site.register(Asset)
admin.site.register(Category)


