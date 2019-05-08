import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging && props.name === 'Finn'
                        ? '#deebff' : props.isDragging && props.name === 'Jake'
                            ? '#fffae6' : props.isDragging && props.name === 'Princess bubblegum'
                                ? '#eae6ff' : '#fff')};
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
    background: ${(props) => (props.name === 'Finn'
                ? '#deebff' : props.name === 'Jake'
                    ? '#fffae6' : '#eae6ff')};
    border-radius: 5px;
    font-size: 12px;
    padding: 3px 5px;
    margin-left: 10px;
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
                        name={this.props.task.name}
                    >
                        <Item>
                            <Image src={this.props.task.img} alt='' />
                        </Item>
                        <Item>
                            <Quote>"{this.props.task.content}"</Quote>
                            <Description>
                                <Name name={this.props.task.name}>{this.props.task.name}</Name>
                                <Id>id: {parseInt(/[0-9]+/.exec(this.props.task.id))}</Id>
                            </Description>
                        </Item>
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Task;