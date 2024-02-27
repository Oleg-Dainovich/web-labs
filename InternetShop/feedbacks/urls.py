from django.urls import path

from cart.urls import app_name
from .views import FeedbackListView, FeedbackCreateView, FeedbacksStatisticView

app_name = 'feedbacks'

urlpatterns = [
    path("", FeedbackListView.as_view(), name="feedback-list"),
    path("create", FeedbackCreateView.as_view(), name="feedback-create"),
    path("statistics", FeedbacksStatisticView.as_view(), name="statistics"),
]
