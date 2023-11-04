from django.contrib import admin

from .models import State,City,ElectSubscriber,Bill,Electype,Tarrif,Type,ElectricityMeter,WaterBill,Omour,Subscriber,ElectBill

admin.site.register(State)
admin.site.register(City)
admin.site.register(Electype)
admin.site.register(Tarrif)
admin.site.register(Type)
admin.site.register(Omour)
admin.site.register(Subscriber)
admin.site.register(ElectBill)


class ElectricityMeterdisplay(admin.ModelAdmin):
    list_filter = [
         "electype",
         "type",
         "active_stat"
    ]
    list_display = ('electsubscriber','electype', 'type','passCom','active_stat')
admin.site.register(ElectricityMeter,ElectricityMeterdisplay)


class ElectSubscriberdisplay(admin.ModelAdmin):
      list_display = ('name','city','docNo','idNo','subscriptionType')
admin.site.register(ElectSubscriber,ElectSubscriberdisplay)


class BillFilter(admin.ModelAdmin):
      list_display = ('name','dayNum','high','medium','low','activeTotalConsumption','activeTotalAmount','consumptionDemand','calculationlDemand')
admin.site.register(Bill,BillFilter)


class WaterBillFilter(admin.ModelAdmin):
      list_display = ('subscribeNum','totalProduction','totalHours','year','month')
admin.site.register(WaterBill,WaterBillFilter)
