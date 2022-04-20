from django.contrib import admin
from .models import Company
from .models import Vacancy

admin.site.register(Company)
admin.site.register(Vacancy)
