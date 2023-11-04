
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.serializers import UserSerializer, StateSerializer,CitySerializer,TypeSerializer,ElectSubscriberSerializer,ElectypeSerializer,BillSerializer,TarrifSerializer,WaterBillSerializer
from base.models import State,City,ElectSubscriber,Bill,Electype,Tarrif,Type,WaterBill
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
    products = Bill.objects.all()
    serializer = BillSerializer(products, many=True)
    return Response(serializer.data)


@api_view(http_method_names=['GET'])
def getBill(request, pk):
    product = Bill.objects.get(_id=pk)
    serializer = BillSerializer(product, many=False)
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
                
                insert_query = "INSERT INTO base_waterbill(subscribeNum,totalProduction,totalHours,year,month,state_id) VALUES (%s,%s,%s,%s,%s,%s)"
                
                print(data)
                for r in range(0,len(df)):
                    subscribeNum =data['data'][r]["subscribeNum"]
                    totalProduction =data['data'][r]["totalProduction"]
                    totalHours=data['data'][r]["totalHours"]
                    month=data['month']
                    year=data['year']
                    state=data['state']
                    product_details_value = (subscribeNum,totalProduction,totalHours,year,month,state)

                    cursor.execute(insert_query,product_details_value)
                    database.commit()


                return JsonResponse({'message': 'Data uploaded and processed successfully.'}, status=201)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'No data received.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)        
        

