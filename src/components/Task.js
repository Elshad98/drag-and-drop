import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? '#AACD00' : '#fff')};
    display: flex;
`;

class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        aria-roledescription="Press space to lift the task"
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Task;