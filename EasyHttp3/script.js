const http = new EasyHttp

// Get Users
// http.get('http://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// User Data
const data = {
    name: 'Alexandr Cosov',
    username: 'Alex',
    email: 'kosovkosov@gmail.com'
}

// Create User
// http.post('http://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Update User
// http.put('http://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Delete User
http.delete('http://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))