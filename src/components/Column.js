﻿import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
    margin: 8px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    border-radius: 5px;
    background-color: #eee;
    overflow: hidden;
    width: 280px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s;
    background-color: ${(props) => (props.isDraggingOver ? 'lightgrey' : 'inherit')};
    flex-grow: 1;
    min-height: 100px;
`;

class InnerList extends React.Component {
    sholudComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) {
            return false;
        }
        return true;
    }

    render() {
        return this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
        ));
    }
}

class Column extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        <Title {...provided.dragHandleProps}>
                            {this.props.column.title}
                        </Title>
                        <Droppable droppableId={this.props.column.id} type="task">
                            {(provided, snapshot) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <InnerList tasks={this.props.tasks} />
                                    {provided.placeholder}
                                </TaskList>
                            )}
                        </Droppable>
                    </Container> 
                )}
            </Draggable>
        );
    }
}

export default Column;