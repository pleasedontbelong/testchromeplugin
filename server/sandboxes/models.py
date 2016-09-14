from __future__ import unicode_literals

from django.db import models


class Sandbox(models.Model):
    name = models.CharField(max_length=250, unique=True)
    user = models.CharField(max_length=250, blank=True, null=True)
    branch = models.CharField(max_length=250, blank=True, null=True)
    date_assigned = models.DateTimeField(auto_now=False, auto_now_add=False, blank=True, null=True)

    def __unicode__(self):
        return self.name
