from flask import Flask, request, Response
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api

from DataBase import db
from resources.routes import routes
from config import DevelopmentConfig

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)
db.init_app(app)
api = Api(app)
migrate = Migrate(app, db)
CORS(app)


@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        res = Response()
        res.headers['X-Content-Type-Options'] = '*'
        return res


@app.teardown_appcontext
def close_request(response):
    db.session.commit()
    return response


[api.add_resource(*route) for route in routes]


if __name__ == '__main__':
    app.run()
