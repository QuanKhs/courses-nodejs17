const fs = require('fs');

const addTask = (title, desc) => {
    const tasks = getTasks();

    const index = tasks.find(item => item.title === title);
    if (index) {
        return;
    }

    const task = { title, desc };
    tasks.push(task);

    saveTasks(tasks);
}

const removeTask = (title) => {
    const tasks = getTasks();
    const index = tasks.findIndex(item => item.title === title);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
    saveTasks(tasks);
}

const updateTask = (title, desc) => {
    const tasks = getTasks();
    const index = tasks.findIndex(item => item.title === title);
    if (index === -1) {
        return;
    }
    tasks[index].desc = desc;
    saveTasks(tasks);
}

const listAllTasks = () => {
    const tasks = getTasks();
    console.log(tasks.map((item, index) => `Task${index + 1}: title: ${item.title} - desc: ${item.desc} `).join('\n'));
}

const detailTask = (title) => {
    const tasks = getTasks();
    const index = tasks.findIndex(item => item.title === title);
    if (index === -1) {
        return;
    }
    console.log(`Task${index + 1}: title: ${tasks[index].title} - desc: ${tasks[index].desc} `);
}

const getTasks = () => {
    try {
        const tasksBuffer = fs.readFileSync('./tasks.json');

        return JSON.parse(tasksBuffer.toString());
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    fs.writeFileSync('./tasks.json', JSON.stringify(tasks));
}
module.exports = {
    addTask,
    removeTask,
    listAllTasks,
    updateTask,
    detailTask,
}