// increment uniqe id/how to create unique ids?

var data = {
    open: [
        {uniqueId: 1, title: 'render left side of ToDo list', description: 'with js, function? array with content of list'},
        {uniqueId: 2, title: 'import node second parameter, meaning', description: ''}
    ],
    done: [
        {uniqueId: 3, title: 'setup intial markup', description: ''},
        {uniqueId: 4, title: 'learned about semantic', description: ''},
        {uniqueId: 5, title: 'research for including resscources', description: '(Css, Js, etc., Html 5 boilerplate)'},
        {uniqueId: 6, title: 'research reset/normalize browser styled', description: 'differance between reset and normalize! Current solutions(medium, mdn, google developers, etc.)'},
        {uniqueId: 7, title: 'css custom properties, css-variablen', description: ''},
        {uniqueId: 8, title: 'Js: dom api, selectoren, node children, parents, etc.', description: ''},
        {uniqueId: 9, title: 'template tag', description: 'natives hmtl tag'}
    ]
};

// var dataWithFlags = [
//     {uniqueId: 1,title: '1 Task', description: '1 Description', isDone: false},
//     {uniqueId: 2, title: '2 Task', description: '2 Description', isDone: true},
//     {uniqueId: 3, title: '3 Task', description: '3 Description', isDone: false}
// ]

var templateSelector = document.querySelector('template');
var todoListSelector = document.querySelector('ol');
var doneListSelector = document.querySelector('ul');

data.open.forEach((task) => {
    var singleTaskElement = document.importNode(templateSelector.content, true);
    singleTaskElement.querySelector('.list-item__title').innerText = task.title;
    Boolean(task.description) && (singleTaskElement.querySelector('.list-item__description').innerText = task.description);
    
    todoListSelector.appendChild(singleTaskElement);
});

data.done.forEach((task) => {
    var singleTaskElement = document.importNode(templateSelector.content, true);
    singleTaskElement.querySelector('.list-item__title').innerText = task.title;
    Boolean(task.description) && (singleTaskElement.querySelector('.list-item__description').innerText = task.description);
    
    doneListSelector.appendChild(singleTaskElement);
});
