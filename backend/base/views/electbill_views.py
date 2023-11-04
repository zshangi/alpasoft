
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.serializers import UserSerializer, StateSerializer,CitySerializer,TypeSerializer,ElectSubscriberSerializer,ElectypeSerializer,BillSerializer,TarrifSerializer,WaterBillSerializer,ElectBillSerializer
from base.models import State,City,ElectSubscriber,Bill,Electype,Tarrif,Type,WaterBill,ElectBill
import pandas as pd
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
import pymysql
from sqlalchemy import create_engine  # Add this import statement
import MySQLdb
@api_view(http_method_names=['GET'])
def getBills(request):
    products = ElectBill.objects.all()
    serializer = ElectBillSerializer(products, many=True)
    return Response(serializer.data)


@api_view(http_method_names=['GET'])
def getBill(request, pk):
    product = ElectBill.objects.get(_id=pk)
    serializer = ElectBillSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
def upload_data(request):
    if request.method == 'POST':
        data = request.data  # Adjust the key based on your frontend data payload
        if data:
            print(data['state'])
            try:
                df = pd.DataFrame(data)  # Convert JSON data to a pandas DataFrame
                database = MySQLdb.connect (host='alpasoft.ir',port=int(3306),user='alpasoft_alpasoft',passwd='zfqyFxgXg=.$',db='alpasoft_alpa',autocommit=True)
                cursor = database.cursor()
                
                insert_query = "INSERT INTO base_electbill(dayNum,medium,high,low,activeTotalConsumption,activeTotalAmount,ractiveTotalConsumption,consumptionDemand,calculationlDemand,totalAmount,month,year,state_id,subscribeNum) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                
                print(data)
                for r in range(0,len(df)):
                    dayNum =data['data'][r]["dayNum"]
                    medium =data['data'][r]["medium"]
                    high=data['data'][r]["high"]
                    low = data['data'][r]["low"]
                    activeTotalConsumption= data['data'][r]["activeTotalConsumption"]
                    activeTotalAmount= data['data'][r]["activeTotalAmount"]
                    ractiveTotalConsumption  = data['data'][r]["ractiveTotalConsumption"]
                    consumptionDemand  = data['data'][r]["consumptionDemand"]
                    calculationlDemand=data['data'][r]["calculationlDemand"]
                    totalAmount= data['data'][r]["totalAmount"]
                    month=data['month']
                    year=data['year']
                    subscribeNum = data['data'][r]["subscribeNum"]
                    state=data['state']
                    product_details_value = (dayNum,medium,high,low,activeTotalConsumption,activeTotalAmount,ractiveTotalConsumption,consumptionDemand,calculationlDemand,totalAmount,month,year,state,subscribeNum)
                    print(dayNum)
                    
                    cursor.execute(insert_query,product_details_value)
                    database.commit()


                return JsonResponse({'message': 'Data uploaded and processed successfully.'}, status=201)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'No data received.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)        
        

@api_view(['POST'])
@csrf_exempt
def uploadwater_data(request):
    if request.method == 'POST':
        data = request.data  # Adjust the key based on your frontend data payload
        if data:
            print(data['user'])
            try:
                df = pd.DataFrame(data)  # Convert JSON data to a pandas DataFrame
                database = MySQLdb.connect (host='alpasoft.ir',port=int(3306),user='alpasoft_alpasoft',passwd='zfqyFxgXg=.$',db='alpasoft_alpa',autocommit=True)
                cursor = database.cursor()
                
                insert_query = "INSERT INTO base_waterbill(name,totalProduction,totalHours,month,year,passCom,user_id) VALUES (%s,%s,%s,%s,%s,%s,%s)"
                
                print(data)
                for r in range(0,len(df)):
                    name=data['data'][r]["name"]
                    totalProduction =data['data'][r]["totalProduction"]
                    totalHours =data['data'][r]["totalHours"]
                    month=data['month']
                    year=data['year']
                    passCom = data['data'][r]["passCom"]
                    user=data['user']
                    product_details_value = (name,totalProduction,totalHours,month,year,passCom,user)
                    print(dayNum)
                    
                    cursor.execute(insert_query,product_details_value)
                    database.commit()


                return JsonResponse({'message': 'Data uploaded and processed successfully.'}, status=201)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'No data received.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)        
    



@api_view(http_method_names=['GET'])
def WaterBill_list(request,pk):
    data = WaterBill.objects.filter(state_id=1)
    serializer = WaterBillSerializer(data, many=True)
    return Response(serializer.data)