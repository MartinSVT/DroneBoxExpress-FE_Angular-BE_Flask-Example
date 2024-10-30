from flask_restful import Resource
from flask import request
from utils.decorators import validate_schema
from schemas.request.UserSchema import RegisterUserSchema, RegisterStaffSchema, LoginUserSchema, UpdateUserSchema, PasswordChangeSchema
from managers.UserManager import UserManager
from managers.auth import auth


class RegisterUser(Resource):
    @validate_schema(RegisterUserSchema)
    def post(self):
        data = request.get_json()
        user = UserManager.register_user(data)
        return user, 201


class RegisterStaff(Resource):
    @validate_schema(RegisterStaffSchema)
    def post(self):
        data = request.get_json()
        user = UserManager.register_staff(data)
        return user, 201


class Login(Resource):
    @validate_schema(LoginUserSchema)
    def post(self):
        data = request.get_json()
        token = UserManager.login_user(data)
        return {"token": token}


class UserDetails(Resource):
    @auth.login_required
    def get(self):
        user = UserManager.user_details()
        return user


class UserUpdate(Resource):
    @auth.login_required
    @validate_schema(UpdateUserSchema)
    def put(self, id_):
        user = auth.current_user()
        data = request.get_json()
        if user.id == id_:
            new_user_data = UserManager.update_user(data)
            return new_user_data
        else:
            return "Not Authorized"


class DeleteUser(Resource):
    @auth.login_required
    def delete(self, id_):
        user = auth.current_user()
        if user.id == id_:
            UserManager.delete_user(id_)
            return 204
        else:
            return "Not Authorized"


class ChangePassword(Resource):
    @auth.login_required
    @validate_schema(PasswordChangeSchema)
    def post(self):
        data = request.get_json()
        UserManager.change_password(data)
        return 204
