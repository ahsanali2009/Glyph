from flask import request

def getForm():
    if request.method == "POST":
        inputEmoji = request.form.get("emoji-form")