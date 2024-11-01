from config import create_app
from DataBase import db
from managers.auth import TokenManager
from flask_testing import TestCase
from models.UserModel import UserModel


def generate_token(user):
    return TokenManager.encode_token(user)


class BaseTestCase(TestCase):
    def create_app(self):
        return create_app("config.TestingConfig")

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def register_user(self):
        data = {
            "username": "martin",
            "email": "martin@abv.bg",
            "password": "123456bg",
            "password2": "123456bg",
            "first_name": "martin",
            "last_name": "martin"
        }
        users = UserModel.query.all()
        self.assertEqual(len(users), 0)
        resp = self.client.post("/register-user", json=data)
        self.assertEqual(resp.status_code, 201)
        self.assertEqual(
            resp.json,
            {
                "username": "martin",
                "email": "martin@abv.bg",
                "first_name": "martin",
                "last_name": "martin"
            }
        )
        return data["username"], data["password"]
