var dataWithFlags = [
    {uniqueId: 1, title: 'setup intial markup', description: '', isDone: true},
    {uniqueId: 2, title: 'learned about semantic', description: '', isDone: true},
    {uniqueId: 3, title: 'research for including resscources', description: '(Css, Js, etc., Html 5 boilerplate)', isDone: true},
    {uniqueId: 4, title: 'research reset/normalize browser styled', description: 'differance between reset and normalize! Current solutions(medium, mdn, google developers, etc.)', isDone: true},
    {uniqueId: 5, title: 'css custom properties, css-variablen', description: '', isDone: true},
    {uniqueId: 6, title: 'Js: dom api, selectoren, node children, parents, etc.', description: '', isDone: true},
    {uniqueId: 7, title: 'template tag', description: 'natives hmtl tag', isDone: true},
    {uniqueId: 8, title: 'render left side of ToDo list', description: 'with js, function? array with content of list', isDone: true},
    {uniqueId: 9, title: 'import node second parameter, meaning', description: '', isDone: true},
    {uniqueId: 10, title: 'restructure data with flags', description: '', isDone: true},
    {uniqueId: 11, title: 'create getter and setter for Task class', description: '', isDone: true},
    {uniqueId: 12, title: 'read the class article again', description: '', isDone: true},
    {uniqueId: 13, title: 'adjust the controller to match the new data', description: '', isDone: true},
]

var templateSelector = document.querySelector('template');
var todoListSelector = document.querySelector('ol');
var doneListSelector = document.querySelector('ul');

dataWithFlags.forEach(task => {
    var singleTaskElement = document.importNode(templateSelector.content, true).firstElementChild;
    singleTaskElement.querySelector('.list-item__title').innerText = task.title;
    Boolean(task.description) && (singleTaskElement.querySelector('.list-item__description').innerText = task.description);

    if (task.isDone) {
        doneListSelector.appendChild(singleTaskElement);
    } else { 
        todoListSelector.appendChild(singleTaskElement);
    }
})

class Task {
    constructor(data) {
        this._title = data.title;
        this._description = data.description;
        this._uniqueId = data.uniqueId;
        this._isDone = data.isDone;
    }

    set title(title) {
        this._title = title;
    }
    
    get title() {
        return this._title;
    }

    set description(description) {
        this._description = description;
    }
    
    get description() {
        return this._description;
    }

    set uniqueId(uniqueId) {
        this._uniqueId = uniqueId;
    }
    
    get uniqueId() {
        return this._uniqueId;
    }

    set isDone(isDone) {
        this._isDone = isDone;
    }
    
    get isDone() {
        return this._isDone;
    }
}

console.log(new Task(dataWithFlags[0]));