//'Content-Type': 'application/x-www-form-urlencoded' 

// form data object is needed, it is used for sending form data
const fd = new FormData
fd.append('name', 'béla')
fd.append('email', 'bela@asd.asd')

const config = {
    method: 'POST',
    header: {
        'Content-Type': 'application/x-www-form-urlencoded' 
    },
    body: fd
}

fetch('8_4_kiszolgalo_2.php', config)
    .then(res => res.json()) // json-t vár itt, a json-t akarja változóvá alakítani itt
    .then(res => console.log(res))