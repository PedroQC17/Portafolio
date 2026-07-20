from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Project, ContactMessage
from .serializers import (
    ProjectListSerializer,
    ProjectDetailSerializer,
    ContactMessageSerializer,
)


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectListSerializer
    permission_classes = [AllowAny]


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectDetailSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]


class FeaturedProjectListView(generics.ListAPIView):
    queryset = Project.objects.filter(featured=True)
    serializer_class = ProjectListSerializer
    permission_classes = [AllowAny]


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]
    authentication_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'detail': 'Mensaje enviado correctamente.'},
            status=status.HTTP_201_CREATED,
        )
