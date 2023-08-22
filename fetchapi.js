//testing

fetch("https://reqres.in/api/users",{
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then(res=>{
    return res.json()
   })
   .then(data=> console.log(data));
//dont know whats going on
   .catch(error => console.log('Error'))
