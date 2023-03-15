const config = {
    method: 'POST',
    header: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        name: 'mr xy',
        email: 'email@email.com'
    })
}

fetch('8_4_kiszolgalo.php', config)
    .then(res => res.json()) // json-t vár itt, a json-t akarja változóvá alakítani itt
    .then(res => console.log(res))
