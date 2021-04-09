const http = new easyHttp

//GET
http.get('https://jsonplaceholder.typicode.com/posts',function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
})

//POST
const data = {
    title: 'Test post',
    body: 'Test body'
}

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

//PUT
// http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/3',function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
})