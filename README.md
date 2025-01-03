# by running npm run devStart you start the server(server.js)
# by running npm run devStart1 you start the server(s.js)

on server.js you can do http methods 

-get  
*localhost:3000 ==> to get home page
*localhost:3000/users ==> to get users
*localhost:3000/users/byId/:id ==> to get users by their id

-post
*localhost:3000/users and put name in the key and put the username ==> to post a new user

-put
*localhost:3000/users/:id and put name in the key and put the updated username==> to update the username by using id

-delete
*localhost:3000/users/:id ==> to delete users using  id

## using postman


on s.js you can do http methods 

-get
*localhost:4000/post ==> to get users
*localhost:4000/post/byId/:id ==> to get users by their id

-post
*localhost:4000/post/new ==> to get a page where you submit your name there the post method will create a new post for user

## using the browser 
