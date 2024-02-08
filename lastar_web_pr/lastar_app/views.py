from django.shortcuts import render, HttpResponse

"""Базовая вьюшка, чтобы просто посмотреть. Другие было лень писать)"""
def index(request):
    return render(request, 'lastar_app/list_categ_data_st.html')
