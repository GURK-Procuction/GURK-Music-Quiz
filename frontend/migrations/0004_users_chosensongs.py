# Generated by Django 3.2.4 on 2022-01-22 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0003_auto_20220122_2240'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='chosenSongs',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]