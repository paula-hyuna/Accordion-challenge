const accordionHeader = document.getElementsByClassName('header');
const contentSections = document.querySelectorAll('[role="region"]');

////EVENT LISTENERS////

//create an event listener for each button header
for(let i=0; i<accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', showHideContent);
}

//listen to keyboard events (up and down arrows)


////FUNCTIONS////
function showHideContent(event) {

    let header = event.target;
    let expanded = header.getAttribute('aria-expanded');
    let headerContent = header.getAttribute('aria-controls');
    let buttonIcon = header.children[1];

    if(expanded == 'false') {
        
        header.setAttribute('aria-expanded', 'true');
        
        for(let i=0;i<contentSections.length; i++) {
            
                
            //hide content from expanded headers and reset their attributes
            contentSections[i].setAttribute('aria-hidden', true);
            
            for(let x=0; x<accordionHeader.length; x++) {

                if(contentSections[i].getAttribute('id') == accordionHeader[x].getAttribute('aria-controls')){
                    accordionHeader[x].setAttribute('aria-expanded', false);
                    accordionHeader[x].children[1].innerHTML = ' &#xe5cf';
                    break;
                }

            }
            
            //clicked header should be shown
            if(contentSections[i].id == headerContent) {
                
                contentSections[i].setAttribute('aria-hidden', false);
                header.setAttribute('aria-expanded', true);
                buttonIcon.innerHTML = '&#xe5ce';

            }
        }
    }
    else {

        //find clicked header's content
        for (let i = 0; i < contentSections.length; i++) {

            if(contentSections[i].getAttribute('id') === headerContent) {
                //hide content, reset aria-expanded
                contentSections[i].setAttribute('aria-hidden', true);
                header.setAttribute('aria-expanded', false);
                buttonIcon.innerHTML = ' &#xe5cf';
            }

        }
    }

}






