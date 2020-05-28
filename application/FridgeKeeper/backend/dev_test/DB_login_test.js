var fetch = require('node-fetch')


fetch('http://localhost:8080/backend/user',
{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'abcdefg',
        password: 'old1',
    })
})
.then(res => res.text())
.then(rs => console.log(rs))