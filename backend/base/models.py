from django.db import models
from django.contrib.auth.models import User


class State(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    state_title = models.CharField(max_length=200)
    
    
    class Meta:
        verbose_name_plural = "استان"
        
    def __str__(self):
            return self.state_title
class Omour(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    state = models.ForeignKey(State, on_delete=models.CASCADE,null=True, blank=True)
    omour_title = models.CharField(max_length=200)
    
    
    class Meta:
        verbose_name_plural = "امور"
    def __str__(self):
                return self.omour_title
                
class City(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    omuor = models.ForeignKey(Omour, on_delete=models.CASCADE,null=True, blank=True)
    city_title = models.CharField(max_length=200)
    
    
    class Meta:
        verbose_name_plural = "شهر"
    def __str__(self):
                return self.city_title



class Subscriber(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False)
    name=models.CharField(max_length=200)
    city=models.ForeignKey(City, on_delete=models.CASCADE,null=True, blank=True)
    state = models.ForeignKey(State, on_delete=models.CASCADE,null=True, blank=True)
    subscribeNum = models.CharField(max_length=400,null=True)
    passCom = models.CharField(max_length=400,null=True)

    class Meta:
        verbose_name_plural = "اطلاعات مشترکین"
        
    def __str__(self):
                return self.name

class WaterBill(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False)
    state = models.ForeignKey(State, on_delete=models.CASCADE,null=True, blank=True)
    subscribeNum=models.CharField(max_length=200,null=True)
    subscriber=models.ForeignKey(Subscriber, on_delete=models.CASCADE,null=True, blank=True)
    totalProduction=models.IntegerField(default=0)
    totalHours = models.IntegerField(default=0)
    month = models.IntegerField(default=0)
    year = models.IntegerField(default=0)


    class Meta:
        verbose_name_plural = "قبض آب"

    def __str__(self):
        return self.subscriber

class ElectBill(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False)
    subscribeNum=models.CharField(max_length=200,null=True)
    subscriber=models.ForeignKey(Subscriber, on_delete=models.CASCADE,null=True, blank=True)
    dayNum=models.IntegerField(default=0)
    high = models.IntegerField(default=0)
    medium = models.IntegerField(default=0)
    low = models.IntegerField(default=0)
    activeTotalConsumption=models.IntegerField(default=0)
    activeTotalAmount=models.IntegerField(default=0)
    consumptionDemand=models.CharField(max_length=200,null=True)
    calculationlDemand=models.CharField(max_length=200,null=True)
    ractiveTotalConsumption=models.IntegerField(default=0)
    totalAmount= models.IntegerField(default=0)
    month = models.IntegerField(default=0)
    year = models.IntegerField(default=0)
    state = models.ForeignKey(State, on_delete=models.CASCADE,null=True, blank=True)


    class Meta:
        verbose_name_plural = "قبض برق"
    
    def __str__(self):
        return self.subscriber


















                
# ************************************************              
class Type(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    type_title = models.CharField(max_length=200)
    def __str__(self):
            return self.type_title
    
    class Meta:
        verbose_name_plural = "نوع کنتور"        

# نوع کنتور
class Electype(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False) 
    elec_title = models.CharField(max_length=200)
    
    
    class Meta:
        verbose_name_plural = "نوع مصرف"

    def __str__(self):
        return self.elec_title



class ElectSubscriber(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False)
    name=models.CharField(max_length=200)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    cityname = models.CharField(max_length=400,null=True)
    address=models.CharField(max_length=400,null=True)
    subscriptionType = models.CharField(max_length=20, choices=(('دیماندی', 'دیماندی'),('آمپری', 'آمپری')),null=True)
    docNo= models.CharField(max_length=200,null=True)
    idNo=models.CharField(max_length=200,null=True)
    teriffCode=models.IntegerField(null=True)
    buildingNo=models.IntegerField(null=True)



    class Meta:
        verbose_name_plural = "اطلاعات قبض برق"
        
    def __str__(self):
                return self.name
    
class ElectricityMeter(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False)
    electsubscriber =models.ForeignKey(ElectSubscriber, on_delete=models.CASCADE,verbose_name='نام مشترک')
    active_choices = (('1', 'فعال'),('0', 'not_active') ) 
    passCom=  models.CharField(max_length=200,null=True)
    electype =models.ForeignKey(Electype, on_delete=models.CASCADE,verbose_name='نوع مصرف')
    coefficientElec=models.IntegerField(null=True)
    type = models.ForeignKey(Type, on_delete=models.CASCADE,verbose_name='نوع کنتور')
    active_stat = models.CharField(max_length=10, choices=active_choices,verbose_name='وضعیت')
    billingId=models.DecimalField(max_digits=9, decimal_places=2, null=True, blank=True)


    class Meta:
        verbose_name_plural = "اطلاعات کنتورها"
        
    def __str__(self):
                return self.electsubscriber.name
    

class Tarrif(models.Model): 
    _id = models.AutoField(primary_key=True, editable=False)
    choices = (
        ('high', 'high'),
        ('medium', 'medium'),
        ('low', 'low')
    )    
    electype =models.ForeignKey(Electype, on_delete=models.CASCADE)
    stat = models.CharField(max_length=6, choices=choices)
    price = models.IntegerField(default=0)
    
    
    class Meta:
        verbose_name_plural = "قیمت ها و تعرفه ها"
    
    def __str__(self):
                return self.choices

class Bill(models.Model):   
    _id = models.AutoField(primary_key=True, editable=False)
    name=models.CharField(max_length=200,null=True)
    dayNum=models.IntegerField(default=0)
    high = models.IntegerField(default=0)
    medium = models.IntegerField(default=0)
    low = models.IntegerField(default=0)
    activeTotalConsumption=models.IntegerField(default=0)
    activeTotalAmount=models.IntegerField(default=0)
    consumptionDemand=models.CharField(max_length=200,null=True)
    calculationlDemand=models.CharField(max_length=200,null=True)
    ractiveTotalConsumption=models.IntegerField(default=0)
    totalAmount= models.IntegerField(default=0)
    electsubscriber = models.ForeignKey(ElectSubscriber,null=True,on_delete=models.CASCADE)
    month = models.IntegerField(default=0)
    year = models.IntegerField(default=0)
    passCom=  models.CharField(max_length=200,null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    state = models.ForeignKey(State, on_delete=models.CASCADE,null=True, blank=True)


    class Meta:
        verbose_name_plural = "قبض برق"
    
    def __str__(self):
        return self.electsubscriber.name
    
