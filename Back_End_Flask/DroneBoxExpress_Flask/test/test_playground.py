from test.test_base import BaseTestCase
from models.UserModel import UserModel


def inc(x):
    return x + 1


class TestExample:

    def test_func(self):
        assert inc(4) == 5


class TestUsers(BaseTestCase):
    def test_register(self):
        self.register_user()
        users = UserModel.query.all()
        self.assertEqual(len(users), 1)


