# Generated by Django 4.2.4 on 2023-08-31 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('course_route', '0001_initial'),
        ('assignment_route', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignment',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='course_route.course'),
        ),
    ]
