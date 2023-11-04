from django.db.models import fields
from django.contrib.auth.models import User

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers

from base.models import Bill,City,State,Omour,Tarrif,Type,Electype,ElectSubscriber,ElectricityMeter,WaterBill,Subscriber,ElectBill


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get_name(self, obj):
        name = obj.first_name

        if name == "":
            name = obj.email
        return name

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'
        
class OmourSerializer(serializers.ModelSerializer):
    state = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Omour
        fields = '__all__'
        
    def get_state(self,obj):
        return StateSerializer(obj.state,many=False).data    
        
class CitySerializer(serializers.ModelSerializer):
    omour = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = City
        fields = '__all__'
        
    def get_omour(self,obj):
        return OmourSerializer(obj.omour,many=False).data
        
        
class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = '__all__'
        
            
        
class WaterBillSerializer(serializers.ModelSerializer):
    subscriber = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = WaterBill
        fields = '__all__'
        
    def get_subscriber(self,obj):
        return SubscriberSerializer(obj.subscriber,many=False).data           
        

class ElectBillSerializer(serializers.ModelSerializer):
    subscriber = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ElectBill
        fields = '__all__'
        
    def get_subscriber(self,obj):
        return SubscriberSerializer(obj.subscriber,many=False).data       











        

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'

class ElectypeSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Electype
        fields = '__all__'        


class TarrifSerializer(serializers.ModelSerializer):
    electype=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Tarrif
        fields = '__all__'

    
    def get_electype(self,obj):
        return ElectypeSerializer(obj.electype,many=False).data


class ElectSubscriberSerializer(serializers.ModelSerializer):
    city=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ElectSubscriber
        fields = '__all__'
        


    def get_city(self,obj):
        return CitySerializer(obj.city,many=False).data
    


class ElectricityMeterSerializer(serializers.ModelSerializer):
    electsubscriber = serializers.SerializerMethodField(read_only=True)
    electype=serializers.SerializerMethodField(read_only=True)
    type=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ElectricityMeter
        fields = '__all__'
        
    def get_electsubscriber(self,obj):
        return ElectSubscriberSerializer(obj.electsubscriber,many=False).data
        
    def get_electype(self,obj):
        return ElectypeSerializer(obj.electype,many=False).data
        
    def get_type(self,obj):
        return TypeSerializer(obj.type,many=False).data    
    

class BillSerializer(serializers.ModelSerializer):
    electsubscriber = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Bill
        fields = '__all__'
        
    def get_electsubscriber(self,obj):
        return ElectSubscriberSerializer(obj.electsubscriber,many=False).data        
        
        
