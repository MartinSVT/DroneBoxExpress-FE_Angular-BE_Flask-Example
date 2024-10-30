from resources.UserResource import RegisterUser, Login, RegisterStaff, UserDetails, UserUpdate, DeleteUser, ChangePassword

routes = (
    (RegisterUser, "/register-user"),
    (Login, "/login"),
    (RegisterStaff, "/register-staff"),
    (UserDetails, "/user-details"),
    (UserUpdate, "/user-update/<int:id_>/"),
    (DeleteUser, "/user-delete/<int:id_>/"),
    (ChangePassword, "/user-change-password"),
)
