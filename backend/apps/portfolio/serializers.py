from rest_framework import serializers
from .models import Project, ContactMessage


class ProjectListSerializer(serializers.ModelSerializer):
    technologies_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'description', 'image',
            'technologies_list', 'github_url', 'live_url', 'featured',
        ]

    def get_technologies_list(self, obj):
        return [t.strip() for t in obj.technologies.split(',') if t.strip()]


class ProjectDetailSerializer(serializers.ModelSerializer):
    technologies_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_technologies_list(self, obj):
        return [t.strip() for t in obj.technologies.split(',') if t.strip()]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message']
