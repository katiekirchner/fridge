var fetch = require('node-fetch')


fetch('http://localhost:8080/backend/account',

{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'old1',
        username: 'abcdefg1',
        email: 'old1',
        password: 'old1',
        birth: '2020-05-02',
        household_id: 121
    })
})
.then(res => res.text())
.then(rs => console.log(rs))