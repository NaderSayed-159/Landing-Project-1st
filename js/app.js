// global var

var sections = document.querySelectorAll('section');
var fragment = document.createDocumentFragment();
var nav = document.querySelector('#navBar');
var navList = document.querySelector('#navList');



//Creating the nav bar with its tabs using looping on query selector

//looping on sections to create nav items depend on sections numbers
sections.forEach(section => {

    //create nav list items
    var navItem = document.createElement('li');
    var navlink = document.createElement('button');

    //us data attr to make tet content of nav item equal to section heading
    var sectionName = section.getAttribute("data-nav");

    //add link attr to button to use it to reach the section which it refer to 
    navlink.setAttribute('href', "#" + section.id);
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
    link.addEventListener('click', () => {

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