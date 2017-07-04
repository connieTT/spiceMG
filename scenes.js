import {Actions, Router, Scene} from 'react-native-router-flux';
import React from 'react';
import ScheduleList from './Components/ScheduleList';
import PlayerList from './Components/PlayerList';
import addSchedule from './Components/addSchedule';
import addPlayer from './Components/addPlayer';


const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="scheduleList"
      component={ScheduleList}
      title={"Training Schedule"}
      type='replace'
      rightTitle={'Add'}
      onRight={() => Actions.addSchedule()}
    />
    <Scene
      key="addSchedule"
      component={addSchedule}
      title={"Add Schedule"}
      type='replace'
      leftTitle='back'
      onLeft={() => Actions.scheduleList()}
    />
    <Scene
      key="playerList"
      component={PlayerList}
      title={"Team Members"}
      type='replace'
      rightTitle={'Add'}
      onRight={() => Actions.addPlayer()}
    />
    <Scene
      key="addPlayer"
      component={addPlayer}
      title={"Add Player"}
      type='replace'
      leftTitle='back'
      onLeft={() => Actions.playerList()}
    />
  </Scene>
);

export default scenes;