from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

from users import views as user_views
from feedbacks.models import Feedback


app_name='shop'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('home/', include('users.urls', namespace='users')),
    path('info/', include('info.urls', namespace='info')),
    path('news/', include('news.urls')),
    path('cart/', include('cart.urls', namespace='cart')),
    path('orders/', include('orders.urls', namespace='orders')),
    path('feedbacks/', include('feedbacks.urls', namespace='feedbacks')),
    path('', include(('shop.urls','shop'), namespace='shop'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)