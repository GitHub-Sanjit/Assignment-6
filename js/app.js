const loadCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNavbar(data.data.news_category);
    } catch (error){
        console.log(error);
    }
}

const displayNavbar = (navs) => {
    // console.log(navs);
    const navUl = document.getElementById('nav-ul');
    navs.forEach(nav => {
        // console.log(nav);
        const li = document.createElement('li');
        li.innerHTML = `
            <div onclick="displayNews('${nav.category_id}')" class="newsDiv">
                <li id="${nav.category_id}">${nav.category_name ? nav.category_name : 'No Data Found'}</li>
            </div>
        `;
        // li.id = nav.category_id;
        // li.innerText = nav.category_name;
        navUl.appendChild(li);
       
        
    })
}

const displayNews = async(category_id) => {
    // console.log(category_id);
    
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id ? category_id : '01'}`;
    const res = await fetch(url);
    const data = await res.json();
    const newsCategory = data.data;
    newsCategory.forEach(news => {
        console.log(news._id);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = ``;
        newsDiv.innerHTML = `
            <div onclick="newsDetails'(${news._id})" class="card mb-3" style="max-width: auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title ? news.title : 'No Data Found'}</h5>
                        <p class="card-text">${news.details ? news.details : 'No Data Found'}</p>
                        <div class="d-flex justify-content-between mt-2">
                            <div class="author-image">
                                <img src="${news.author.img ? news.author.img : 'No Data Found'}" class="img-fluid rounded" alt="...">
                            </div>
                            <h6 class="author-name">${news.author.name ? news.author.name : 'No Data Found'}</h6>
                            <div class="viewer "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>${news.total_view}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv);
    });
}

const newsDetails = async(news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const modalDiv = document.getElementById('modal-div');
    // modalDiv.classList.add('modal-dialog modal-fullscreen-sm-down');
    const div = document.createElement('div');
    div.innerHTML = `

    `;
    modalDiv.appendChild(div);
    
}



// const displayNews = (categories) => {
//     console.log(categories);
//     const newsContainer = document.getElementById('news-container');
//     categories.forEach(category => {
//         const newsDiv = document.createElement('div');
//         newsDiv.classList.add('row');
//         newsDiv.innerHTML = `
//             <div class="card mb-3" style="max-width: auto">
//             <div class="row g-0">
//                 <div class="col-md-4">
//                     <img src="..." class="img-fluid rounded-start" alt="...">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
//                             additional
//                             content. This content is a little bit longer.</p>
//                         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//         newsContainer.appendChild(newsDiv);
//     })
// }


// experiment

// const loadPhoneDetails = async id =>{
//     const url =` https://openapi.programming-hero.com/api/news/category/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhoneDetails(data.data);
// }

// const displayPhoneDetails = phone =>{
//     console.log(phone);
//     const modalTitle = document.getElementById('phoneDetailModalLabel');
//     modalTitle.innerText = phone.name;
//     const phoneDetails = document.getElementById('phone-details');
//     console.log(phone.mainFeatures.sensors[0]);
//     phoneDetails.innerHTML = `
//         <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
//         <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
//         <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
//         <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
//     `
// }

// // experiment

// const breakingNews = document.getElementById('01');
// breakingNews.addEventListener("mousedown", (e) => {
//     const category_id = e.target.id;
//     const displayNews = async category_id =>{
//     const url =` https://openapi.programming-hero.com/api/news/category/${category_id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhoneDetails(data.data);
// }
// });


loadCategory();
displayNews()