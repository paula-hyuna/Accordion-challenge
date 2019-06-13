const accordion = document.getElementById('accordion');
const accordionHeader = document.getElementsByClassName('header');
const contentSections = document.querySelectorAll('[role="region"]');
let currentlyShowing = '';
let focusedHeader = window.getSelection;

////EVENT LISTENERS////

//create an event listener for each button header
for(let i=0; i<accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', showHideContent);
}

//listen to keyboard events (up and down arrows) 
accordion.addEventListener('keydown', arrowNav);

////FUNCTIONS////
function showHideContent(event) {

    let header = event.target;
    let expanded = header.getAttribute('aria-expanded');
    let headerContent = header.getAttribute('aria-controls');
    let buttonIcon = header.children[1];
    

    if(expanded == 'false') {
        
        header.setAttribute('aria-expanded', 'true');
        
        if (currentlyShowing !== '') {

            //hide content from expanded header and reset its attributes
            currentlyShowing.setAttribute('aria-hidden', true);

            //find corresponding content header and reset its attributes
            for(let x = 0; x < accordionHeader.length; x++) {

                if(currentlyShowing.getAttribute('id') === 
                   accordionHeader[x].getAttribute('aria-controls')) {

                    accordionHeader[x].setAttribute('aria-expanded', false);
                    accordionHeader[x].children[1].innerHTML = ' &#xe5cf';
                    break;

                }

            }
        }

        //find corresponding content for clicked header
        for(let i = 0; i < contentSections.length; i++) {

            //display content belonging to clicked header
            if(contentSections[i].id == headerContent) {

                currentlyShowing = contentSections[i];
                contentSections[i].setAttribute('aria-hidden', false);
                header.setAttribute('aria-expanded', true);
                buttonIcon.innerHTML = '&#xe5ce';
    
            }
        }    
        
    }
    else {

        //find clicked header's content/
        for (let i = 0; i < contentSections.length; i++) {

            if(contentSections[i].getAttribute('id') === headerContent) {
                //hide content, reset aria-expanded
                contentSections[i].setAttribute('aria-hidden', true);
                header.setAttribute('aria-expanded', false);
                buttonIcon.innerHTML = ' &#xe5cf';
                currentlyShowing = '';
            }

        }
    }

}

//to be continued..
function arrowNav(event) {

    let target = event.target;

        if (target.getAttribute('class') === accordionHeader[0].getAttribute('class')) {
           // console.log(focusedHeader);
           let focusedHeader = document.activeElement;
            switch(event.keyCode) {
                
                case 38: console.log('Up arrow was pressed');
                         focusedHeader.blur();

                         if(focusedHeader.getAttribute('id') === 'header1') {
                             accordionHeader[3].focus();
                         }
                         else {
                             let ID = focusedHeader.getAttribute('id').slice(6, 7) - 1;
                             accordionHeader[ID].focus();
                         }                              
                        break;
                case 40: console.log('down arrow was pressed');
                        break;

            }
        }
    
}




