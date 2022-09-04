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
            <div onclick="newsDetails('${news._id}')" class="card mb-3" style="max-width: auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

const newsDetails = async (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    const modalTitle = document.getElementById('newsDetailsmodalLabel');
    const modalBody = document.getElementById('modal-body');
    modalTitle.innerText = data.data[0].title;
    modalBody.innerText = data.data[0].details;
    
}

loadCategory();
displayNews();
// newsDetails('0282e0e58a5c404fbd15261f11c2ab6a');

document.getElementById('blog').addEventListener('click', () => {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
                    <div class="First">
                        <div class="q">
                            <h5>Q: Why Should you use Templete String</h5>
                        </div>
                        <div class="ans">
                            <h6>Answer: Template strings are a powerful feature of modern JavaScript released in ES6. It lets us insert/interpolate variables
                            and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create
                            strings that are complex and contain dynamic elements.</h6>
                        </div>
                    </div>
                    <div class="Second">
                        <div class="q">
                            <h5>Q: Difference Between Arrow function and Regular Function</h5>
                        </div>
                        <div class="ans">
                            <h6>Answer: Unlike regular functions, arrow functions do not have their own this . The value of this inside an arrow function
                            remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest
                            non-arrow parent function.</h6>
                        </div>
                    </div>
                    <div class="Third">
                        <div class="q">
                            <h5>Q: Difference among var, let and const</h5>
                        </div>
                        <div class="ans">
                            <h6>Answer: var declarations are globally scoped or function scoped while let and const are block scoped.
                            var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const
                            variables can neither be updated nor re-declared.
                            They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const
                            variables are not initialized.
                            While var and let can be declared without being initialized, const must be initialized during declaration.</h6>
                        </div>
                    </div>
    `;
})