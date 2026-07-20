#!/usr/bin/env python
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from django.contrib.auth.models import User

if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@portafolio.com', 'Admin1234!')
    print('Superusuario creado: admin / Admin1234!')
else:
    print('El superusuario ya existe.')
