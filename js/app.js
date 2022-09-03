const loadCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);
    displayNavbar(data.data.news_category);
    // displayNews(data.data.news_category);
}

const displayNavbar = (navs) => {
    console.log(navs);
    const navUl = document.getElementById('nav-ul');
    navs.forEach(nav => {
        console.log(nav);
        const li = document.createElement('li');
        li.innerHTML = `
            <div onclick="displayNews('${nav.category_id}')" class="newsDiv">
                <li id="${nav.category_id}">${nav.category_name}</li>
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
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}

// document.getElementById(01).onclick, async(id) => {
//     const url = `https://openapi.programming-hero.com/api/news/category/${id}`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }


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