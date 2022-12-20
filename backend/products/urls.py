from django.urls import path

from .views import ProductViewSet, ProductDetailView

app_name = 'products_api'

urlpatterns = [
    path('', ProductViewSet.as_view(), name="product_list"),
    path('<int:pk>/', ProductDetailView.as_view(), name="product_detail"),
]