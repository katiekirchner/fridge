var fetch = require('node-fetch')


fetch('http://localhost:8080/backend/item',

{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'old1',
        type: 'abcdefg1',
        frozen: 1,
        quantity: 1,
        exp: '2020-05-02',
        last: '2020-05-02',
        img_id: 121,
        household_id: 121
    })
})
.then(res => res.text())
.then(rs => console.log(rs))