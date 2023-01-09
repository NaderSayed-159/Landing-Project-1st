# Landing Page Project

## Table of Contents


* [Landing Project Features](#Landing-Project-Features)
* [the imortant features methods](#Features-Methods)
* [Creating of Navbar](#Creat-NavBar)
* [Scrolling On Click Behaviour](#Scrolling-to-Sections)
* [Back To Top Button](#Back-To-Top)
* [Nav item active state](#Nav-item-Highlight)
* [NavBar state while no scrolling](#NavBar-While-NoScrolling)
* [Responsive NavBar](#Responsive-NavBar)




## Landing-Project-Features 

1. create dynmic navbar depends on sections number.
2. make section appear when click on nav item which refer to with smoothy behavior.
3. makes section highlighted when it appear in viewport.
4. make back to top button when scroll down. 
5. make navbar disapear when no scrolling. 
6. make nav item get highlighted when the section which it refer to appear in viewport
7. make webpage responsive specially navbar.

## Features-Methods

1. intersection observer 
2. scrollIntoView from
3. document Fragment()
4. set time out and clear it as mention in suggested

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
 

### NavBar-While-NoScrolling

1. using **setTimeout**  method and **cleartimeout** to make nav bar disappear after certine time as mentioned in suggested in dev strategy.
2. changes done in styling proparties like **maxheight** of header and **opacity** of nav items.

### Responsive-NavBar

1. create class control displaying of nav items to toggle it on click
2. add event listener to **fontawesome** icon added to html only appear in certine view width using **media-query**.




