from django.http import JsonResponse


def create_room(request):
    return JsonResponse({'status': 'success', 'id': 120})


def join_room(request):
    return JsonResponse({'status': 'success', 'message': 'room joined!'})