import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 50%;
    padding: 8px;
    margin-right: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

class Task extends React.Component {
    render() {
        const isDragDisabled = this.props.task.id === 'task-1';
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content[0]}
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Task;