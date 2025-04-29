from django.contrib import admin
from .models import Book

# Customize how Book appears in the admin
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'genre', 'published_date', 'available']
    search_fields = ['title', 'author']
    list_filter = ['genre', 'available']
