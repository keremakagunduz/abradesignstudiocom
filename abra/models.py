from django.db import models

class Asset(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='asset/')
    description = models.TextField(blank=True)
    created_at = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    """Categories such as Books, Editorial, etc."""
    name = models.CharField(max_length=50, unique=True)
    display_priority = models.IntegerField(default=0)

    class Meta:
        ordering = ['display_priority']
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200, unique=True)
    subtitle = models.CharField(max_length=200, blank=True)
    display_priority = models.IntegerField(default=0)
    cover_image = models.ImageField(upload_to='covers/')
    secondary_cover_image = models.ImageField(upload_to='covers/', null=True, blank=True)
    summary = models.TextField(null=True, blank=True)
    published_date = models.DateField(null=True, blank=True)

    categories = models.ManyToManyField(Category, related_name='projects')

    def category_list(self):
        return ", ".join([category.name for category in self.categories.all()])
    category_list.short_description = 'Categories'

    def __str__(self):
        return f"{self.title} - {self.subtitle}" if self.subtitle else self.title

    def is_published(self):
        return self.published_date is not None

