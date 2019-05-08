const initialData = {
    tasks: {
        'task-1': { id: 'task-1', img: '', content: 'Они осуждают меня прежде, чем узнают. Вот почему мне лучше быть одному.' },
        'task-2': { id: 'task-2', img: '', content: 'Я не ценил всего, пока не потерял…' },
        'task-3': { id: 'task-3', img: '', content: 'Не будьте как дома, вам тут официально не рады. Это факт.' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Шрек',
            taskIds: ['task-1', 'task-2', 'task-3']
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: []
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData