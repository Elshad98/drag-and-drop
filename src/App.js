import React from 'react';
import initialData from './components/initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Column';

import '@atlaskit/css-reset';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = initialData;
    }

    onDragEnd = (result) => {
        //TODO: reorder our column
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map((columnId) => {
			        const column = this.state.columns[columnId];
			        const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
                    return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </DragDropContext>
        );
	}
}

export default App;