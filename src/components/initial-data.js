import finn from '../img/finn.png';
import jake from '../img/jake.png';
import princess from '../img/princess.png';

const img = {
    finn: finn,
    jake: jake,
    princess: princess
};

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', img: img.jake, name: 'Jake', content: `Sucking at something is the first step towards being sorta good at something.` },
        'task-2': { id: 'task-2', img: img.jake, name: 'Jake', content: `You got to focus on what is real, man` },
        'task-3': { id: 'task-3', img: img.finn, name: 'Finn', content: `Is that where creativity comes from? From sad biz?` },
        'task-4': { id: 'task-4', img: img.finn, name: 'Finn', content: `Homies help homies. Always` },
        'task-5': { id: 'task-5', img: img.finn, name: 'Finn', content: `People make mistakes. It is a part of growing up` },
        'task-6': { id: 'task-6', img: img.finn, name: 'Finn', content: `Don't you always call sweatpants 'give up on life pants,' Jake?` },
        'task-7': { id: 'task-7', img: img.princess, name: 'Princess bubblegum', content: `Responsibility demands sacrifice` },
        'task-8': { id: 'task-8', img: img.princess, name: 'Princess bubblegum', content: `That's it! The answer was so simple, I was too smart to see it!` },
        'task-9': { id: 'task-9', img: img.princess, name: 'Princess bubblegum', content: `I should not have drunk that much tea!` },
        'task-10': { id: 'task-10', img: img.princess, name: 'Princess bubblegum', content: `Please!!! I need the real you!!!` },
        'task-11': { id: 'task-11', img: img.princess, name: 'Princess bubblegum', content: `Haven't slept for a solid 83 hours, but, yeah, I'm good.` },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Jake',
            taskIds: ['task-1', 'task-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'Finn',
            taskIds: ['task-3', 'task-4', 'task-5', 'task-6']
        },
        'column-3': {
            id: 'column-3',
            title: 'Princess bubblegum',
            taskIds: ['task-7', 'task-8', 'task-9', 'task-10', 'task-11']
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData