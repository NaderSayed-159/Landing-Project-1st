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

});

// adding active class to the viewed secion  on scroll
document.addEventListener('scroll', function () {

    sectionlinks.forEach(el => {
        //clear all items from active class in case no section has active class
        el.classList.remove("nav-active");

        sections.forEach(section => {
            //catch the section which has active class 
            if (section.classList.contains('active-sec')) {

                //checking if the button has the same content of any section to add active calss to
                if (el.textContent == section.getAttribute("data-nav")) {

                    el.classList.add("nav-active");
                } else {
                    el.classList.remove("nav-active");
                }
            }
        });
    });
});


// make nav bar disappear when no srolling

//creating var to clear timeout when we need
var Scrolling,
    headerTag = document.querySelector('header');
window.addEventListener('scroll', function () {

    // clearing timeout on scroll
    window.clearTimeout(Scrolling);
    //while scrolling nav has height and nav items appeared
    headerTag.style.maxHeight = 100 + 'px';
    navList.style.opacity = 1;

    // Set a timeout to run after scrolling ends
    Scrolling = setTimeout(function () {

        headerTag.style.maxHeight = null;
        navList.style.opacity = 0;
        //after 3sec time out will change the valus of nav items and header 
    }, 3000);

}, false);