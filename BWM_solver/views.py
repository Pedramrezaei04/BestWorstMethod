from django.shortcuts import render
from django.http import JsonResponse
from .utils import calculate_weights  # make sure this import is correct
from .forms import BWMForm

def index(request):
    form = BWMForm()
    return render(request, 'BWM_solver/index.html', {'form': form})

def solver(request):
    form = BWMForm()
    return render(request, 'BWM_solver/solver.html', {'form': form})

def calculate(request):
    if request.method == 'POST':
        data = request.POST

        compared2best = {}
        compared2worst = {}

        # update the data extraction based on your POST data format
        for key, value in data.items():
            if 'best' in key:
                values = value.split('\r\n')  # Split the values using newline character
                for i, val in enumerate(values):
                    compared2best[f"{key.replace('best_', '')}_{i+1}"] = float(val)
            elif 'worst' in key:
                values = value.split('\r\n')  # Split the values using newline character
                for i, val in enumerate(values):
                    compared2worst[f"{key.replace('worst_', '')}_{i+1}"] = float(val)

        weights, consistency_ratio = calculate_weights(compared2best, compared2worst)
        
        response_data = {
            'weights': weights,
            'consistency_ratio': consistency_ratio
        }

        return JsonResponse(response_data)

    else:
        return render(request, 'BWM_solver/index.html')

