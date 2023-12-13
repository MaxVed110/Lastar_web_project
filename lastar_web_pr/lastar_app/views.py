from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, 'lastar_app/base.html')
