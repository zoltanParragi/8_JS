document.getElementsByTagName('button')[0].onclick = () => {
    const file = document.getElementById("fileId").files[0]

    const fd = new FormData
    fd.append('name', 'béla')
    fd.append('email', 'bela@asd.asd')
    fd.append('profile_img', file)

    const config = {
        method: 'POST',
        header: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'bearer 12312312923987238729',
        },
        body: fd
    }

    fetch('8_4_kiszolgalo_3.php', config)
        .then(res => res.json()) // json-t vár itt, a json-t akarja változóvá alakítani itt a res.json() metódussal
        .then(res => console.log(res))
        .catch((e) => {
            console.log(e)
        })
        .finally(()=> {
            document.getElementById("fileId").value=''
        })
}
