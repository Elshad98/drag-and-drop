import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 8px;
    background-color: ${({ isDragging, color }) => (isDragging ? color : '#fff')};
    display: flex;
`;

const Item = styled.div``;

const Quote = styled.div`
    padding-left: 10px;
`;

const Description = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%; 
`;

const Id = styled.div`
    font-size: 12px;
    padding: 3px;
`;

const Name = styled.div`
    background: ${({ color }) => color};
    border-radius: 6px;
    font-size: 12px;
    padding: 3px 8px;
    margin-left: 10px;
`;

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    color={props.task.color}>
                    <Item>
                        <Image src={props.task.img} alt={props.task.name} />
                    </Item>
                    <Item>
                        <Quote>"{props.task.content}"</Quote>
                        <Description>
                            <Name color={props.task.color}>{props.task.name}</Name>
                            <Id>id: {parseInt(/[0-9]+/.exec(props.task.id))}</Id>
                        </Description>
                    </Item>
                </Container>
            )}
        </Draggable>
    );
}

export default Task;