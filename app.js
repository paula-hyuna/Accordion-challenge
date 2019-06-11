var accordionHeader = document.getElementsByClassName('header');
var contentSections = document.querySelectorAll('[role="region"]');

////EVENT LISTENERS////
for(var i=0; i<accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', showHideContent);
}

////FUNCTIONS////
function showHideContent(event) {

    var header = event.target;
    let expanded = header.getAttribute('aria-expanded');

    if(expanded == 'false') {
        
        header.setAttribute('aria-expanded', 'true');
        
        let headerContent = header.getAttribute('aria-controls');

        for(var i=0;i<contentSections.length; i++) {
            //hide content from all other headers and reset attributes
            contentSections[i].setAttribute('aria-hidden', true);
            for(var x=0; x<accordionHeader.length; x++) {

                if(contentSections[i].getAttribute('id') == accordionHeader[x].getAttribute('aria-controls')){
                    accordionHeader[x].setAttribute('aria-expanded', false);
                }
            }
            
            if(contentSections[i].id == headerContent) {
                
                contentSections[i].setAttribute('aria-hidden', false);
                
            }
        }
    }
    else {
        //close on click


    }



}





