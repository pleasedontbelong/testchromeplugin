from .models import Sandbox
from rest_framework import serializers
from django.utils import timezone


class SandboxSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sandbox
        fields = ('name', 'user', 'branch', 'date_assigned')
        read_only_fields = ('date_assigned',)

    def create(self, validated_data):
        if validated_data.get("user"):
            validated_data['date_assigned'] = timezone.now()
        return Sandbox.objects.create(**validated_data)

    def update(self, instance, validated_data):
        if validated_data.get("user"):
            instance.date_assigned = timezone.now()
        return super(SandboxSerializer, self).update(instance, validated_data)
