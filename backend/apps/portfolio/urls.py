from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('projects/featured/', views.FeaturedProjectListView.as_view(), name='project-featured'),
    path('projects/<slug:slug>/', views.ProjectDetailView.as_view(), name='project-detail'),
    path('contact/', views.ContactCreateView.as_view(), name='contact-create'),
]
