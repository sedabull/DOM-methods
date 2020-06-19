//core assignment
const main = document.createElement('main');
const mainBane = document.createElement('button');
const image = document.createElement('img');
const link = document.createElement('a');
const body = document.querySelector('body');


mainBane.append('This is a DESTRUCTIVE button!');

image.className = 'image';
image.alt = 'should be a picture of ancient runes on parchment';
image.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/CodexRunicus.jpeg'

link.className = 'link';
link.href = 'https://en.wikipedia.org/wiki/Runes';
link.append('The wikipedia page on germanic runes');

main.append(image);
main.append(link);

body.prepend(main);
body.prepend(mainBane);

mainBane.addEventListener('click', () => main.remove());

//stretch objectives
const br = document.createElement('br');
const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');

const removeInput = document.createElement('input');
const removeLabel = document.createElement('label');
const removeButton = document.createElement('button');

const addInput = document.createElement('input');
const addLabel = document.createElement('label');
const addButton = document.createElement('button');

legend.append('Extra Credit Buttons');

removeInput.type = 'text';
removeInput.name = 'remove-element';
removeLabel.htmlFor = 'remove-element';
removeLabel.append('Remove any element:');
removeButton.append('REMOVE!');

addInput.type = 'text';
addInput.name = 'add-elment';
addLabel.htmlFor = 'add-element';
addLabel.append('Add a div with text:');
addButton.append('ADD!');

fieldset.append(legend);
fieldset.append(removeInput);
fieldset.append(removeLabel);
fieldset.append(removeButton);
fieldset.append(br);
fieldset.append(addInput);
fieldset.append(addLabel);
fieldset.append(addButton);
body.prepend(fieldset);

removeButton.addEventListener('click', () => {
    let node = document.querySelector(removeInput.value);
    if(node) node.remove();
});//end removeButton click

addButton.addEventListener('click', () => {
    let div = document.createElement('div');
    div.append(addInput.value);
    body.append(div);
});//end addButton click