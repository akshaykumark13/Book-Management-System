from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, RegisterView, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

# Define the router
router = DefaultRouter()
router.register('books', BookViewSet)

# Define the URL patterns
urlpatterns = [
    path('', include(router.urls)),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
]




# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import BookViewSet, RegisterView,MyTokenObtainPairView
# from rest_framework_simplejwt.views import TokenRefreshView

# urlpatterns = [
#    path ('', include(router.urls)),
#    path ('token/', MyTokenObtainPairView.as_view(), name ='token_obtain_pair'),
#    path ('tocken/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#    path ('register/', RegisterView.as_view(), name='register'),
# ]
