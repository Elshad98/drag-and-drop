import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Task from '../task';

const Container = styled.div`
    margin: 8px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    border-radius: 8px;
    overflow: hidden;
    width: 270px;
    display: flex;
    flex-direction: column;
    background-color: ${({ isDragging }) => (isDragging ? '#e3fcef' : '#eee')}
`;
const Title = styled.h3`
    padding: 8px;
    &:hover {
        background-color: #e3fcef;
    }
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s;
    background-color: ${(props) => (props.isDraggingOver ? '#ffebe6' : 'inherit')};
    flex-grow: 1;
    min-height: 100px;
`;

class InnerList extends React.Component {
    sholudComponentUpdate(nextProps) {
        return nextProps.tasks !== this.props.tasks;
    }

    render() {
        return this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
        ));
    }
}

const Column = (props) => {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    isDragging={snapshot.isDragging}
                    {...provided.draggableProps}
                    ref={provided.innerRef}>
                    <Title {...provided.dragHandleProps}>
                        {props.column.title}
                    </Title>
                    <Droppable droppableId={props.column.id} type='task'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}>
                                <InnerList tasks={props.tasks} />
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
            )}
        </Draggable>
    );
}

export default Column;