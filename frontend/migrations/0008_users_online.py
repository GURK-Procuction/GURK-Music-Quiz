# Generated by Django 3.2.4 on 2021-11-07 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0007_auto_20211005_0011'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='online',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]