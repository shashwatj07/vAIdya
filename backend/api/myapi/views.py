from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
import pickle
import pandas as pd
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
with open("myapi/model.pkl", "rb") as f:
    model = pickle.load(f)

with open("myapi/lb.pkl", "rb") as f:
    lb = pickle.load(f)

with open("myapi/symptoms.pkl", "rb") as f:
    symptoms_df = pickle.load(f)

def description(symptom):
    df = pd.read_csv('myapi/symptom_Description.csv')
    return df.loc[df['Disease'] == symptom]['Description'].values[0]
def predict(symptoms,lb,model):
    x = lb.transform(symptoms)
    x = sum(x)
    return model.predict([x])[0]

@csrf_exempt
def api(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        symptoms = data['symptoms']
        disease = predict(symptoms,lb,model)
        response = json.dumps({'disease': disease, 'description': description(disease)})
        return HttpResponse(response, content_type='text/json')
        

