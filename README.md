# DroneBoxExpress-FE_Angular-BE_Flask-Example
A repository for an example website for airplane deliveries using Flask as Back End and Angular as Front End

REST API ENDPOINTS
Description of User/Staff Functionality

User Login
POST -> http://127.0.0.1:5000/login
request
{
	"username": "exampleUser",
	"password": "12345567bg"
}
response
{
    "token": "sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec"
}


User Register
POST -> http://127.0.0.1:5000/register-user
request
{
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "password": "12345567bg",
    "password2": "12345567bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName"
}
response
{
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName"
}

Staff Register
POST -> http://127.0.0.1:5000/register-staff
Header {
  Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec
}
request
{
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "password": "12345567bg",
    "password2": "12345567bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName",
    "is_staff": true
}
response
{
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName"
}

User Update
PUT http://127.0.0.1:5000/user-update/<int>id/
Header {
  Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec
}
request
{
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName"
}
response
{
    "id": 1,
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName"
}

User Details
GET http://127.0.0.1:5000/user-details
Header {
  Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec
}
response
{
    "id": 1,
    "username": "exampleUser",
    "email": "exampleUser@abv.bg",
    "first_name": "exampleName",
    "last_name": "exampleLastName",
    "is_staff": false
}

Change Password
POST http://127.0.0.1:5000/user-change-password
Header {
  Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec
}
request
{
    "old_password": "12345567bg",
    "new_password1": "new12345567bg",
    "new_password2": "new12345567bg"
}

User Delete
DELETE http://127.0.0.1:5000/user-delete/<int>id/
Header {
  Authorization: TOKEN sadasd64d4f437asdsad051e42de#@$b84eb7asdsada@&^21353154d315350sad##$@#81aasdsadsad99eec
}
