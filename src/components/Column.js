import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;

class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>Task go here</TaskList>
            </Container>    
        );
    }
}

export default Column;