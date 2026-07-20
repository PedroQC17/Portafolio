#!/usr/bin/env bash
set -e

echo "Aplicando migraciones..."
python manage.py migrate --noinput

echo "Iniciando servidor..."
exec gunicorn config.wsgi:application --bind 0.0.0.0:$PORT
