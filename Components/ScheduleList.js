import React, {Component} from 'react';
import {Container, Header, Left, Body, Title, Right, Content, Button, Icon, Text, Form, Item, Input, ListItem, List, Thumbnail} from 'native-base';
import NavBarBelow from './Footer';
const schedules = require('../data/scheduleInfo.json');

class ScheduleList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <List
            dataArray={schedules}
            renderRow={(item) =>
              <ListItem style={ { height: 130 } }>
                <Thumbnail size={150} source={require(`../img/logo.png`)}/>
                <Body>
                <Text >{item.location}</Text>
                <Text note>Date: {item.date}, Time: {item.time}</Text>
                </Body>
              </ListItem>
            }/>
        </Content>
        <NavBarBelow/>
      </Container>
    );
  }
}

export default ScheduleList;