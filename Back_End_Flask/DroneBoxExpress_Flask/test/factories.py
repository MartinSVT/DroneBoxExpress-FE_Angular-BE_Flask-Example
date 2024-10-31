import factory
from werkzeug.security import generate_password_hash
from DataBase import db
from models.UserModel import UserModel


class BaseFactory(factory.Factory):
    @classmethod
    def create(cls, **kwargs):
        current_object = super().create(**kwargs)
        if hasattr(current_object, "password:"):
            clean_pass = current_object.password
            current_object.password = generate_password_hash(clean_pass, method="pbkdf2:sha256")
        db.session.add(current_object)
        db.session.flush()
        return current_object


class UserFactory(BaseFactory):
    class Meta:
        model = UserModel

    id = factory.Sequence(lambda n: n)
    username = f'{factory.Faker("first_name")}id{id}'
    email = f'id{id}{factory.Faker("email")}'
    password = factory.Faker("password")
    first_name = factory.Faker("first_name")
    last_name = factory.Faker("last_name")
    is_staff = False
