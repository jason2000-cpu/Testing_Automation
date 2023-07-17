# TEST AUTOMATION UNIVERSITY

## Test Automation Using Javascript

### Toggle todo
document.querySelector('ul.todo-list > li:nth-child(1) input.toggle').click()

### Delete todo
document.querySelector('ul.todo-list > li:nth-child(1) button.destroy).click()


### Clear completed todos
document.querySelectory('button.clear-completed').click()

### Filter dodos
document.querySelector('ul.filters > li:nth-child(3) > a').click()

+ or using hashchange

location.hash = "/completed"
location.hash = "/active"
location.hash = "/"

### Adding a todo
+ This requires two steps

1. appending a value to the new todo input

document.querySelector('input.new-todo').value = "hello"

2. dispaching the event

document.querySelector('input.new-todo').dispachEvent(new Event('change', {'bubbles': true}))

### Appending a Todo
+ This requres 3 steps

1. We enter edditing mode by double clicking the  todo

document.querySelector('ul.todo-list > li:nth-child(2) > div > label').dispachEvent(new Event('dbclick', {bubbles': true}))

2. we now edit the todo

document.querySelector('ul.todo-list > li:nth-child(2) .edit').value = "amended"

3. we dispatch the blur event

document.querySelector('ul.todo-list > li:nth-child(2) .edit').dispachEvent(new Event('blur'))

### To toggle every item

var toggles = document.querySelectorAll('.toggle');
for (togglepos = 0; togglepos < toggles.length; togglepos++) {
    toggles[togglepos].click();
}

### To toggle after every two todos

var toggles = document.querySelectorAll('.toggle');
for (togglepos = 0; togglepos < toggles.length; togglepos++) {
    if(togglepos % 2 === 0) {
        toggles[togglepos].click();
    }
}

### To toggle to todos set to false

var toggles = document.querySelectorAll('.toggle');
var toggleit = false;
for (togglepos = 0; togglepos < toggles.length; togglepos++) {
    if (toggleit) {
        toggles[togglepos].click();
    }
    toggleit = !toggleit;
}