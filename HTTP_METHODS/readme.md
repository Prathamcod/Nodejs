In Node.js, you can create HTTP servers using the built-in http module. This module allows you to handle various HTTP methods such as GET, POST, PUT, DELETE, etc.

Here's an explanation of the commonly used HTTP methods:

GET: The GET method is used to request data from a specified resource. When a client sends a GET request to a server, it is asking for the contents of the resource identified by the URL. In Node.js, you can handle GET requests using the http.createServer() function and listening for 'GET' events.

POST: The POST method is used to submit data to be processed to a specified resource. It often results in the creation of a new resource or the updating of an existing one. In Node.js, you handle POST requests similarly to GET requests but listen for 'POST' events instead.

PUT: The PUT method is used to update a resource or create a new one if it doesn't exist. It replaces the entire resource with the new data sent in the request. In Node.js, you handle PUT requests by listening for 'PUT' events.

DELETE: The DELETE method is used to delete a resource identified by a specific URL. In Node.js, you handle DELETE requests by listening for 'DELETE' events.

PATCH: The PATCH method is used to apply partial modifications to a resource. It's similar to PUT but only updates the parts of the resource specified in the request. In Node.js, you handle PATCH requests by listening for 'PATCH' events.