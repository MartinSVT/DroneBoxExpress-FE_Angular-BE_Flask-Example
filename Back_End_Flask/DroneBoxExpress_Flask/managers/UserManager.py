from werkzeug.exceptions import BadRequest
from werkzeug.security import check_password_hash, generate_password_hash

from .auth import TokenManager, auth
from models.UserModel import UserModel
from DataBase import db


def generate_user(data, is_staff: bool):
    hashed_pass = generate_password_hash(data["password"], method="pbkdf2:sha256")
    user = UserModel(
        username=data["username"],
        email=data["email"],
        password=hashed_pass,
        first_name=data["first_name"],
        last_name=data["last_name"],
        is_staff=is_staff,
    )
    return user


class UserManager:
    @staticmethod
    def register_user(user_data):
        is_staff = False
        user = generate_user(user_data, is_staff)
        try:
            db.session.add(user)
            db.session.flush()
            # Add Email Service
            return user
        except Exception as ex:
            raise BadRequest(str(ex))

    @staticmethod
    def register_staff(staff_data):
        is_staff = staff_data["is_staff"]
        user = generate_user(staff_data, is_staff)
        try:
            db.session.add(user)
            db.session.flush()
            # Add Email Service
            return user
        except Exception as ex:
            raise BadRequest(str(ex))

    @staticmethod
    def login_user(data):
        user = db.session.execute(db.select(UserModel).filter_by(username=data["username"])).scalar()
        if not user or not check_password_hash(user.password, data["password"]):
            raise BadRequest("Invalid username or password")
        return TokenManager.encode_token(user)

    @staticmethod
    def user_details():
        user = auth.current_user()
        return user

    @staticmethod
    def update_user(update_data):
        user = auth.current_user()
        if update_data["username"] != user.username:
            user.username = update_data["username"]
        if update_data["first_name"] != user.first_name:
            user.first_name = update_data["first_name"]
        if update_data["last_name"] != user.last_name:
            user.last_name = update_data["last_name"]
        if update_data["email"] != user.email:
            user.email = update_data["email"]
        db.session.add(user)
        db.session.flush()
        return user

    @staticmethod
    def delete_user(id_):
        UserModel.query.filter_by(id=id_).delete()

    @staticmethod
    def change_password(pass_data):
        user = auth.current_user()
        if not check_password_hash(user.password, pass_data["old_password"]):
            raise BadRequest("Invalid password")
        user.password = generate_password_hash(pass_data["new_password1"], method='pbkdf2:sha256')
        db.session.add(user)
        db.session.flush()
