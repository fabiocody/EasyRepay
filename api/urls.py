from django.urls import path
from rest_framework_simplejwt.views import token_obtain_pair, token_refresh, token_verify

from . import views

urlpatterns = [
    path('me', views.UserView.as_view()),
    path('people', views.PeopleView.as_view()),
    path('person/<int:person_id>', views.PersonView.as_view()),
    path('transactions/<int:person_id>', views.TransactionsView.as_view()),
    path('token', token_obtain_pair),
    path('token/refresh', token_refresh),
    path('token/verify', token_verify),
]
