from flask import Blueprint, Response, jsonify, send_file

api_bp = Blueprint("api", __name__, url_prefix="/api")

@api_bp.route('/downloads/<path>', methods=['GET', 'POST'])
def download(path):
    newPath = 'views/downloads/'+path
    return send_file(newPath, as_attachment=True)

@api_bp.route("/test", methods=["GET"])
def index() -> Response:
    """Defines the main website view"""
    return jsonify("hello world")
