from django.urls import path

from .views import ProductViewSet

app_name = 'products_api'

urlpatterns = [
    path('', ProductViewSet.as_view(), name="product_list")
]