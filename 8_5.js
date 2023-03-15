const container = document.querySelector('main>div')

fetch('http://kepzes.appworld.hu/api/products.php')
    .then(res => res.json())
    .then(res => res.products.forEach(e => {
        container.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
            <img src="${e.thumbnail}" class="card-img-top" style="height: 150px; object-fit: cover;" alt=${e.title}>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${e.title.substring(0, 40)}...</h5>
                        <p class="card-text">${e.description.substring(0, 65)}...</p>
                    </div>
                    <a href="#" class="btn btn-primary" data-item='${JSON.stringify(e)}' data-bs-toggle="modal" data-bs-target="#itemModal"">Details</a>
                    </div>
                </div>
            </div>
        </div>`
        document.querySelectorAll('.card-body>a').forEach((element)=> {
            element.addEventListener('click', function(){
                const details = {...JSON.parse(element.dataset.item)} 
                const roundedRating = Math.round(details.rating)
                /* for(let key in details) {
                    const class_name = key
                    const value = details[key]
                } */
                document.querySelector('#itemModal .modal-title').innerHTML= details.title
                document.querySelector('#itemModal .modal-body-img>img').src= details.thumbnail
                document.querySelector('#itemModal .modal-body-img>img').alt= details.title
                document.querySelector('#itemModal .modal-body-description').innerHTML= details.description
                document.querySelector('#itemModal .modal-body-price').innerHTML= "$" + details.price + ".00"
                document.querySelectorAll('#itemModal .modal-body-rating>span:not(:last-child)').forEach((e, i)=> {
                    if(i<= roundedRating-1) {
                        e.style.color = "yellow"
                    } else {
                        e.style.color = "lightgrey"
                    }
                })
                document.querySelector('#itemModal .modal-body-rating>span:last-child').innerHTML = "(" + details.stock + " reviews)"
            })
        })
    }))
