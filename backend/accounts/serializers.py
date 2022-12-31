from rest_framework import serializers
from django.core import exceptions
import django.contrib.auth.password_validation as validators
from rest_framework import serializers
from knox.models import AuthToken

from .models import User

def build_fields(mdl, extra=[], exclude=[]):
    fields = [field.name for field in mdl._meta.fields if field.name not in exclude]
    fields += extra 
    return fields

class UserSerializer(serializers.HyperlinkedmodelSerializer):
    class Meta:
        model = User
        fields = build_fields(User, [], ['password'])

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password':{'write_only':True}}
    
    def validade(self, data):
        user = User(**data)
        password = data.get('password')
        errors = dict()
        try:
             validators.validate_password(password = password, user = user)
        except exceptions.ValidationError as e:
            errors['password'] = list(e.messages)
        if errors:
            raise serializers.ValidationError(errors)
        return super(RegisterSerializer, self).validate(data)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user
    

class UserRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthToken
        fields= ('token_key', 'user', 'expiry')
