import React, {Component} from 'react';
import {Container, Header, Left, Title, Right, Content, Button, Icon, Text, Form, Item, Input} from 'native-base';
//import Realm from 'realm';

class addPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      position: '',
      phoneNumber: '',
    }
  }

  sendToRealm() {
    //Todo
  }

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" onChangeText={(text) => this.setState({name: text})}/>
            </Item>
            <Item>
              <Input placeholder="Number" onChangeText={(text) => this.setState({number: text})}/>
            </Item>
            <Item>
              <Input placeholder="Position" onChangeText={(text) => this.setState({position: text})}/>
            </Item>
            <Item>
              <Input placeholder="Phone Number" onChangeText={(text) => this.setState({phoneNumber: text})}/>
            </Item>
          </Form>
          <Button danger onPress={() => this.sendToRealm()} style={{alignSelf: 'center', marginTop:100}}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default addPlayer;