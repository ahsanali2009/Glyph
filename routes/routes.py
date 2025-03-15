from flask import render_template,Blueprint
from main import getForm

route_bp = Blueprint("routes_bp",__name__)

@route_bp.route("/", methods=["GET","POST"])
def index():
    getForm()
    return render_template("index.html")
