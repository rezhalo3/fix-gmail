/*Round Compose button class = L3
Icons class = qr
*/

/*This will delete the Element - Element being the DIV or whatever is containing the class that is found.
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
*/

//Remove the round bubble around the compose button
$('div').removeClass('L3');
//Remove the icons next to the folders
$('div').removeClass('qj');