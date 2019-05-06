import React from 'react';
import initialData from './components/initial-data';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = initialData;
	}

	render(){
		return this.state.columnOrder.map((columnId) => {
			const column = this.state.columns[columnId];
			const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

			return column.title;
		});
	}
}

export default App;