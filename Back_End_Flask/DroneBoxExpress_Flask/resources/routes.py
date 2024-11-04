from resources.UserResource import RegisterUser, Login, RegisterStaff, UserDetails, UserUpdate, DeleteUser, ChangePassword
from resources.NewsArticleResource import ListAllNews, CreateNewsArticle, NewsArticleDetails

routes = (
    (RegisterUser, "/register-user"),
    (Login, "/login"),
    (RegisterStaff, "/register-staff"),
    (UserDetails, "/user-details"),
    (UserUpdate, "/user-update/<int:id_>/"),
    (DeleteUser, "/user-delete/<int:id_>/"),
    (ChangePassword, "/user-change-password"),
    (ListAllNews, "/news"),
    (CreateNewsArticle, "/add-news"),
    (NewsArticleDetails, "/news/<int:id_>/"),
)
