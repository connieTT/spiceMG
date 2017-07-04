import React, {Component} from 'react';
import {Container, Header, Left, Title, Right, Content, Button, Icon, Text, Form, Item, Input, Label} from 'native-base';

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

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input onChangeText={(text) => this.setState({name: text})}/>
            </Item>
            <Item floatingLabel>
              <Label>Number</Label>
              <Input onChangeText={(text) => this.setState({number: text})}/>
            </Item>
            <Item floatingLabel>
              <Label>Position</Label>
              <Input onChangeText={(text) => this.setState({position: text})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone Number</Label>
              <Input onChangeText={(text) => this.setState({phoneNumber: text})}/>
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