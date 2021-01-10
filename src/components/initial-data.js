import bmo from '../img/bmo.png';
import finn from '../img/finn.png';
import jake from '../img/jake.png';
import princess from '../img/princess.png';

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', img: jake, name: 'Jake', content: `Sucking at something is the first step towards being sorta good at something.`, color: '#fffae6' },
        'task-2': { id: 'task-2', img: jake, name: 'Jake', content: `You got to focus on what is real, man.`, color: '#fffae6' },
        'task-3': { id: 'task-3', img: bmo, name: 'BMO', content: `Sometimes life is scary and dark.`, color: '#e3fcef' },
        'task-4': { id: 'task-4', img: finn, name: 'Finn', content: `Is that where creativity comes from? From sad biz?`, color: '#deebff' },
        'task-5': { id: 'task-5', img: finn, name: 'Finn', content: `Homies help homies. Always.`, color: '#deebff' },
        'task-6': { id: 'task-6', img: finn, name: 'Finn', content: `People make mistakes. It is a part of growing up.`, color: '#deebff' },
        'task-7': { id: 'task-7', img: finn, name: 'Finn', content: `Don't you always call sweatpants 'give up on life pants,' Jake?`, color: '#deebff' },
        'task-8': { id: 'task-8', img: princess, name: 'Princess bubblegum', content: `Responsibility demands sacrifice.`, color: '#eae6ff' },
        'task-9': { id: 'task-9', img: princess, name: 'Princess bubblegum', content: `That's it! The answer was so simple, I was too smart to see it!`, color: '#eae6ff' },
        'task-10': { id: 'task-10', img: princess, name: 'Princess bubblegum', content: `I should not have drunk that much tea!`, color: '#eae6ff' },
        'task-11': { id: 'task-11', img: princess, name: 'Princess bubblegum', content: `Please!!! I need the real you!!!`, color: '#eae6ff' },
        'task-12': { id: 'task-12', img: princess, name: 'Princess bubblegum', content: `Haven't slept for a solid 83 hours, but, yeah, I'm good.`, color: '#eae6ff' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Jake',
            taskIds: ['task-1', 'task-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'BMO',
            taskIds: ['task-3']
        },
        'column-3': {
            id: 'column-3',
            title: 'Finn',
            taskIds: ['task-4', 'task-5', 'task-6', 'task-7']
        },
        'column-4': {
            id: 'column-4',
            title: 'Princess bubblegum',
            taskIds: ['task-8', 'task-9', 'task-10', 'task-11', 'task-12']
        }
    },
    /**
     * Facilitate reordering of the columns
     */
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
};

export default initialData