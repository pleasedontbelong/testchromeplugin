from django.contrib import admin
from .models import Sandbox


@admin.register(Sandbox)
class SandboxAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'branch', 'date_assigned')
