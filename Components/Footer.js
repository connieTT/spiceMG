import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Icon, Text, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';

class NavBarBelow extends Component{
  render(){
    const goToSchedule = () => Actions.scheduleList();
    const goToPlayers = () => Actions.playerList();

    return(
      <Footer>
        <FooterTab>
          <Button transparent onPress={goToSchedule}>
            <Icon active name="calendar"/>
            <Text>Schedule</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button transparent onPress={goToPlayers}>
            <Icon name="ios-people"/>
            <Text>Players</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

export default NavBarBelow;