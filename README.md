###  Credit du Maroc API 
[Admin]: # (Admin)

POST
registerAdmin

http://localhost:6000/admin/registerAdmin
Content-Type: application/json
```	
{
  "firstName": "ADMIN",
  "lastName": "admin",
  "email": "admin@gmail.com",
  "password": "admin1234"
}
```	
POST
admin login
http://localhost:6000/admin/login
```	
{
     "email": "admin@gmail.com",
     "password": "admin1234"
}
```

PUT admin update 
http://localhost:6000/admin/update/:id
````
```	
{
  "firstName": "ADMIN",
  "lastName": "admin",
  "email": "admin@gmail.com",
  "password": "admin1234"
}
```
GET admin totalClients
http://localhost:6000/admin/totalClients


GET Admin getClients
http://localhost:6000/admin/getClients


GET admin singleClient

http://localhost:6000/admin/singleClient/:id


[Client]: # (Client)


POST  register client

http://localhost:6000/admin/registerAdmin

```
{
  "firstName": "ADMIN",
  "lastName": "admin",
  "email": "admin@gmail.com",
  "password": "admin1234"
}
```
POST  client login
  http://localhost:6000/admin/login

```
{
    "email": "admin@gmail.com",
  "password": "admin1234"
}