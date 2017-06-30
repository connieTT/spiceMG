import React, {Component} from 'react';
import {Container, Header, Content, Body, Button, Icon, Text, ListItem, List, Thumbnail} from 'native-base';
import NavBarBelow from './Footer'
const players = require('../data/playersInfo.json');

class PlayerList extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content>
          <List
            dataArray={players}
            renderRow={(item) =>
              <ListItem>
                <Thumbnail size={100} source={require(`../img/basketball.png`)}/>
                <Body>
                <Text >{item.name}</Text>
                <Text note>Position: {item.position}</Text>
                <Text note>Number: {item.number}</Text>
                </Body>
              </ListItem>
            }/>
        </Content>
        <NavBarBelow/>
      </Container>
    );
  }
}


export default PlayerList;