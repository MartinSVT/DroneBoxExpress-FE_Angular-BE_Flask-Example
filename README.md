# DroneBoxExpress-FE_Angular-BE_Flask-Example
A repository for an example website for airplane deliveries using Flask as Back End and Angular as Front End

REST API ENDPOINTS  
-------------------------------------------------------------------------------------------------------------------  
Description of User/Staff Functionality  
-------------------------------------------------------------------------------------------------------------------  
User Login  
POST -> http://127.0.0.1:5000/login  
request  
{  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "password": "12345567bg"  
}  
response  
{  
$\hspace{1cm}$ "token": "sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec"  
}  
  
User Register  
POST -> http://127.0.0.1:5000/register-user  
request  
{  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "password": "12345567bg",  
$\hspace{1cm}$ "password2": "12345567bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName"  
}  
response  
{  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName"  
}  
  
Staff Register  
POST -> http://127.0.0.1:5000/register-staff  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
request  
{  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "password": "12345567bg",  
$\hspace{1cm}$ "password2": "12345567bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName",  
$\hspace{1cm}$ "is_staff": true  
}  
response  
{  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName"  
}  
  
User Update  
PUT http://127.0.0.1:5000/user-update/<int>id/  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
request  
{  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName"  
}  
response  
{  
$\hspace{1cm}$ "id": 1,  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName"  
}  
  
User Details  
GET http://127.0.0.1:5000/user-details  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
response  
{  
$\hspace{1cm}$ "id": 1,  
$\hspace{1cm}$ "username": "exampleUser",  
$\hspace{1cm}$ "email": "exampleUser@abv.bg",  
$\hspace{1cm}$ "first_name": "exampleName",  
$\hspace{1cm}$ "last_name": "exampleLastName",  
$\hspace{1cm}$ "is_staff": false  
}  
  
Change Password  
POST http://127.0.0.1:5000/user-change-password  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
request  
{  
$\hspace{1cm}$ "old_password": "12345567bg",  
$\hspace{1cm}$ "new_password1": "new12345567bg",  
$\hspace{1cm}$ "new_password2": "new12345567bg"  
}  
  
User Delete  
DELETE http://127.0.0.1:5000/user-delete/<int>id/  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
  
Description of News Article Functionality  
-------------------------------------------------------------------------------------------------------------------  
List All News Articles  
GET http://127.0.0.1:5000/news  
response  
[  
$\hspace{1cm}$ {  
$\hspace{2cm}$ "id": 1,  
$\hspace{2cm}$ "article_title": "News1",  
$\hspace{2cm}$ "article_content": "Description1,  
$\hspace{2cm}$ "created_date": "2024-11-04",  
$\hspace{2cm}$ "updated_date": "2024-11-04",  
$\hspace{2cm}$ "article_user": 2  
$\hspace{1cm}$ },  
$\hspace{1cm}$ {  
$\hspace{2cm}$ "id": 2,  
$\hspace{2cm}$ "article_title": "News2",  
$\hspace{2cm}$ "article_content": "Description2",  
$\hspace{2cm}$ "created_date": "2024-11-04",  
$\hspace{2cm}$ "updated_date": "2024-11-04",  
$\hspace{2cm}$ "article_user": 3  
$\hspace{1cm}$ }  
]  
  
Create News Article  
POST http://127.0.0.1:5000/add-news  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
is_staff = True  
request  
{  
$\hspace{1cm}$ "article_title": "Test1",  
$\hspace{1cm}$ "article_content": "Test Content 1",  
$\hspace{1cm}$ "article_user": 2  
}  
response  
{  
$\hspace{1cm}$ "id": 1,  
$\hspace{1cm}$ "article_title": "Test1",  
$\hspace{1cm}$ "article_content": "Test Content 1",  
$\hspace{1cm}$ "created_date": "2024-11-04",  
$\hspace{1cm}$ "updated_date": "2024-11-04",  
$\hspace{1cm}$ "article_user": 2  
}  
  
Get Individual News Article  
GET http://127.0.0.1:5000/news/1/  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
is_staff = True  
response  
{  
$\hspace{1cm}$ "id": 1,  
$\hspace{1cm}$ "article_title": "Test1",  
$\hspace{1cm}$ "article_content": "Test Content 1",  
$\hspace{1cm}$ "created_date": "2024-11-04",  
$\hspace{1cm}$ "updated_date": "2024-11-04",  
$\hspace{1cm}$ "article_user": 2  
}  
  
Update News Article  
PUT http://127.0.0.1:5000/news/1/  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
is_staff = True  
request  
{  
$\hspace{1cm}$ "article_title": "Test1Changed",  
$\hspace{1cm}$ "article_content": "Test Content 1",  
$\hspace{1cm}$ "article_user": 2  
}  
response  
{  
$\hspace{1cm}$ "id": 1,  
$\hspace{1cm}$ "article_title": "Test1Changed",  
$\hspace{1cm}$ "article_content": "Test Content 1",  
$\hspace{1cm}$ "created_date": "2024-11-04",  
$\hspace{1cm}$ "updated_date": "2024-11-04",  
$\hspace{1cm}$ "article_user": 2  
}  
  
Delete News Article  
DELETE http://127.0.0.1:5000/news/1/  
Header  
{  
$\hspace{1cm}$ Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec  
}  
is_staff = True  
  
Description of Airports Functionality  
-------------------------------------------------------------------------------------------------------------------  
  
