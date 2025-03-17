from flask import render_template,Blueprint,request,redirect
from main import form

route_bp = Blueprint("routes_bp",__name__)

@route_bp.route("/", methods=["GET","POST"])
def index():

    if request.method == "POST":
        form()
        return render_template("chart.html", content = form())
    return render_template("index.html")
