from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy
# Create your views here.
def companies_list(request):
    companies = Vacancy.objects.all()
    companies_json =  [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe = False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(company.to_json())

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(vacancy.to_json())

def companies_vacancies(request, company_id):
    try:
        companies = Vacancy.objects.all().filter(company=company_id)
        companies_json = [company.to_json() for company in companies]
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(companies_json, safe=False)

def vacancies_top(request):
    try:
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Vacancy.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)}, status=400)
    return JsonResponse(vacancies_json, safe=False)