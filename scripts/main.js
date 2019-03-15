var template = document.querySelector('template');
var child = document.importNode(template.content, true);
var parent = document.querySelector('ol');

parent.appendChild(child);