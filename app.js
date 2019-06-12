var accordionHeader = document.getElementsByClassName('header');
var contentSections = document.querySelectorAll('[role="region"]');

////EVENT LISTENERS////
for(var i=0; i<accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', showHideContent);
}

////FUNCTIONS////

function showHideContent(event) {

    let header = event.target;
    let expanded = header.getAttribute('aria-expanded');
    let headerContent = header.getAttribute('aria-controls');

    if(expanded == 'false') {
        
        header.setAttribute('aria-expanded', 'true');
        
        var match = false;
        for(var i=0;i<contentSections.length && !match; i++) {
            
                
            //hide content from expanded headers and reset their attributes
            contentSections[i].setAttribute('aria-hidden', true);
            
            for(var x=0; x<accordionHeader.length; x++) {

                if(contentSections[i].getAttribute('id') == accordionHeader[x].getAttribute('aria-controls')){
                    accordionHeader[x].setAttribute('aria-expanded', false);
                    match == true;
                    break;
                }

            }
            
            //clicked header should be shown
            if(contentSections[i].id == headerContent) {
                
                contentSections[i].setAttribute('aria-hidden', false);
                header.setAttribute('aria-expanded', true);
                
            }
        }
    }
    else {

        //find clicked header's content
        for (var i = 0; i < contentSections.length; i++) {

            if(contentSections[i].getAttribute('id') === headerContent) {
                //hide content, reset aria-expanded
                contentSections[i].setAttribute('aria-hidden', true);
                header.setAttribute('aria-expanded', false);
            }
        }
    }

}






