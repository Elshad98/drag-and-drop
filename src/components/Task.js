import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? '#eae6ff' : '#fff')};
    display: flex;
`;
const Item = styled.div``;
const Quote = styled.div`
    padding-left: 10px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%; 
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
                    >
                        <Item>
                            <Image src={this.props.task.img} alt='' />
                        </Item>
                        <Item>
                            <Quote>"{this.props.task.content}"</Quote>

                        </Item>
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Task;