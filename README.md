# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Landing Project Features](#Landing-Project-Features)
* [Creating of Navbar](#Creat-NavBar)
* [Scrolling On Click Behaviour](#Scrolling-to-Sections)
* [Back To Top Button](#Back-To-Top)


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.


## Landing-Project-Features 

1. create dynmic navbar depends on sections number.
2. make section appear when click on nav item which refer to with smoothy behavior.
3. makes section highlighted when it appear in viewport.
4. make back to top button when scroll down. 
5. make navbar disapear when no scrolling. 
6. make nav item get highlighted when the section which it refer to appear in viewport
7. make webpage responsive specially navbar.


### Creat-NavBar 

1. select all sections by querySelectorAll to get how may are they.
2. loop on it using for each.
3. using Dom proprties and methods to create navbar and its items.
4. using of **createDocumentFragment** to create the nav list.


### Scrolling-to-Sections

1. using **addEventListener** to add click event to nav items.
2. looping on buttons then on sections using **forEach** to check where it scroll to on click
3. using **text-content** of nav item and **data-attribute** of sections in checking.
4. using **scrollIntoView** as mentiond in w3school to control scrolling and its behaviour


### Back-To-Top

1. create an element with zero width and zero height at top of page to refer scrolling too
2. use **addeventlistener** and **pageyoffset** to check how much user scrolled.
3. use **addeventlistener** and **scrollintoview** to control scroll behaviour by clicking on backtop button. 


### Section-Avtive-state

1. using **intersecting observer** from css tricks to check if section is in viewport or not
2. using **rootmargin** to detect if section in view port or not bu check margins values 
3. after creating observer object  and its function adding and removing active class 
4. loop on sections and observe it.

### Nav-item-Highlight

1. using add or remove classes element method to add active class
2. after looping on section  **class.contains** got iused to catch which section has active class
3. use **data-attr** to get which to get which section the nav item text content refer to.
 



