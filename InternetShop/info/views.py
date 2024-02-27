from django.shortcuts import render

def about_us_page(request):
    return render(request, 'info/about_us.html')

def vacancies(request):
    return render(request, 'vacancies/vacancies.html')

def coupons(request):
    return render(request, 'coupons/coupons.html')

def contacts(request):
    return render(request, 'contacts/contacts.html')

def faq(request):
    return render(request, 'faq/faq.html')

def privacy(request):
    return render(request, 'privacy/privacy_policy.html')

# Create your views here.
