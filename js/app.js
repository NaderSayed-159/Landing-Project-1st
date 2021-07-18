// global var

var sections = document.querySelectorAll('section');
var fragment = document.createDocumentFragment();
var nav = document.querySelector('#navBar');
var navList = document.querySelector('#navList');

//add active class to section if it in viewport using intersection observer

//create observer object 

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        //check if the section in viewport add and remove class using elements mehtods
        if (entry.isIntersecting) {
            entry.target.classList.add("active-sec");
        } else {
            entry.target.classList.remove("active-sec");

        }
    });
}, {
    // using rootmargins to  calc how much section in viewport
    rootMargin: "-50% 0% -50% 0%"
});



//Creating the nav bar with its tabs using looping on query selector

//looping on sections to create nav items depend on sections numbers
sections.forEach(section => {
    //usig observer to observ the section
    observer.observe(section);


    //create nav list items
    var navItem = document.createElement('li');
    var navlink = document.createElement('button');

    //us data attr to make tet content of nav item equal to section heading
    var sectionName = section.getAttribute("data-nav");

    //add link attr to button to use it to reach the section which it refer to 

    //use css class to style items
    navlink.classList.add("menu__link");

    navItem.appendChild(navlink);
    navlink.textContent = sectionName;
    fragment.appendChild(navItem);
});
//appending fragment object to ul
navList.appendChild(fragment);


// make nav item scroll smoothly to the section which refer to
//selecting buttons after define it
var sectionlinks = document.querySelectorAll('button');

//looping on all links in nav bar to check for which it refer to 

sectionlinks.forEach(link => {
    link.addEventListener('click', function () {

        //looping in sections to get the right section 
        sections.forEach(section => {

            //check which secion the button will refer to
            if (link.textContent == section.getAttribute("data-nav")) {

                //using scroll into view to contol the scrolling and its behavior as mentiond in w3school
                section.scrollIntoView({
                    behavior: "smooth"
                });

            }
        });
    });
});


//back top bottom

var backTop = document.getElementById('backTop'),
    topPage = document.getElementById('top');

// scrolling event

document.addEventListener('scroll', function () {
    //use of pageYOffest to check how much user scrolled
    if (window.pageYOffset > 30) {
        backTop.style.opacity = "1";
    } else {
        backTop.style.opacity = "0";
    }
});

// back top top functionallity using scrollingtoview

backTop.addEventListener('click', function () {

    topPage.scrollIntoView({
        behavior: "smooth"
    });


})