import json

def get_request_body(request):
    exception = None
    req_json = {}

    try:
        req_json = json.loads(request.body.decode("utf-8"))
    except Exception as e:
        exception = "Invalid request body"
    
    return req_json, exception