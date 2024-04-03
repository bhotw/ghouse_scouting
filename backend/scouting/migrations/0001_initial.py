# Generated by Django 5.0.3 on 2024-04-03 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('username', models.CharField(max_length=150, unique=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MatchScoutingData',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('match_number', models.IntegerField()),
                ('team_number', models.IntegerField()),
                ('starting_position', models.CharField(max_length=50)),
                ('auto_speaker_scored', models.IntegerField()),
                ('auto_speaker_missed', models.IntegerField()),
                ('auto_line_crossed', models.CharField(max_length=50)),
                ('auto_penalty', models.IntegerField()),
                ('teleop_speaker_scored', models.IntegerField()),
                ('teleop_speaker_missed', models.IntegerField()),
                ('teleop_amp_scored', models.IntegerField()),
                ('temop_amp_missed', models.IntegerField()),
                ('teleop_penalty', models.IntegerField()),
                ('climbed', models.CharField(max_length=50)),
                ('trap', models.CharField(max_length=50)),
                ('end_game_penalty', models.IntegerField()),
                ('need_to', models.CharField(max_length=50)),
                ('comments', models.TextField()),
                ('who_created', models.CharField(max_length=50)),
            ],
        ),
    ]
