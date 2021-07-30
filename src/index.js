import React from 'react';
import { Scene, Router, Stack, Drawer, } from 'react-native-router-flux';
import { Dimensions, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerBar from './component/Drawer/Drawer';
import Splash from './container/Splash/Splash';
import Login from './container/Login/Login';
import SignUp from './container/SignUp/SignUp';
import SignUpForm from './container/SignUpForm/SignUpForm';
import ForgetPass from './container/ForgetPass/ForgetPass';
import ResetPass from './container/ResetPass/ResetPass';
import UpdatePro from './container/UpdatePro/UpdatePro';
import Home from './container/Home/Home';
import DiscoverEvents from './container/DiscoverEvents/DiscoverEvents';
import MeetPeople from './container/MeetPeople/MeetPeople';
import RockingEvent from './container/RockingEvent/RockingEvent';
import Checkout from './container/Checkout/Checkout';
import CreditCard from './container/CreditCard/CreditCard';
import Ticket from './container/Ticket/Ticket';
import Me from './container/Me/Me';
import Matches from './container/Matches/Matches';
import ChatList from './container/ChatList/ChatList';
import PersonalChat from './container/PersonalChat/PersonalChat';
import PeopleList from './container/PeopleList/PeopleList';
import PaypalPayment from './container/PaypalPayment'
import Clothing from './container/Clothing/Clothing';
import colors from './theme/colors';
import { h, w } from './theme/Dimensions'
import { View } from 'native-base';
import Constants from './constants/BaseStyle'
import styles from './component/Drawer/styles';
const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();

import { connect } from "react-redux";
//var width = Dimensions.get('window').width;
const RouterWithRedux = connect()(Router);
var image;
var tintcolor
const TabIcon = ({ selected, title, img, focused }) => {
  switch (title) {
    case 'Home':
      image = focused ? require('./assets/assest/assest/Home1.png')
        : require('./assets/assest/assest/Home.png');
      tintcolor = focused ? "#df396b" : "#000"

      break;

    case 'Match':
      image = focused ? require('./assets/assest/assest/match.png')
        : require('./assets/assest/assest/icon_11-03.png');
      tintcolor = focused ? "#df396b" : "#000"
      break;

    case 'Inbox':
      image = focused ? require('./assets/assest/assest/inbox.png')
        : require('./assets/assest/assest/inbox1.png');
      tintcolor = focused ? "#df396b" : "#000"
      break;

    case 'Me':
      image = focused ? require('./assets/assest/assest/profile1.png')
        : require('./assets/assest/assest/profile.png');
      tintcolor = focused ? "#df396b" : "#000"
      break;


  }
  return (
    <Image source={image}
      style={{ width: h(4), height: h(4), tintColor: tintcolor }}
      resizeMode="contain">
    </Image>

  )
}

var width = Dimensions.get('window').width;



class Root extends React.Component {

  render() {
    return (
      <RouterWithRedux navigationBarStyle={{ backgroundColor: '#000', }}>
        <Scene key="root" hideNavBar hideTabBar>
          <Stack key="app">
            <Scene hideNavBar panHandlers={null}>
              <Scene>
                <Scene
                  component={Splash}
                  hideNavBar={true}
                  key='Splash'
                  title='Splash'
                />
                <Scene
                  component={Login}
                  hideNavBar={true}
                  key='Login'
                  title='Login'
                />
                <Scene
                  component={PersonalChat}
                  hideNavBar={true}
                  key='PersonalChat'
                  title='PersonalChat'
                />
                <Scene
                  component={SignUp}
                  hideNavBar={true}
                  wrap={false}
                  key="SignUp"
                  title="SignUp"
                />
                <Scene
                  component={SignUpForm}
                  hideNavBar={true}
                  wrap={false}
                  key="SignUpForm"
                  title="SignUpForm"
                />
                <Scene
                  component={ForgetPass}
                  hideNavBar={true}
                  wrap={false}
                  key="ForgetPass"
                  title="ForgetPass"
                />
                <Scene
                  component={ResetPass}
                  hideNavBar={true}
                  wrap={false}
                  key="ResetPass"
                  title="ResetPass"
                />
                <Scene
                  component={UpdatePro}
                  hideNavBar={true}
                  wrap={false}
                  key="UpdatePro"
                  title="UpdatePro"
                />
                <Scene
                  component={PersonalChat}
                  hideNavBar={true}
                  key='PersonalChat'
                  title='PersonalChat'
                />
                 <Scene
                  component={PaypalPayment}
                  hideNavBar={true}
                  key='PaypalPayment'
                  title='PaypalPayment'
                />
                <Drawer
                  hideNavBar
                  key="drawer"
                  onExit={() => {
                    console.log('Drawer closed');
                  }}
                  onEnter={() => {
                    console.log('Drawer opened');
                  }}
                  contentComponent={DrawerBar}
                  drawerWidth={width - 80}
                >

                  <Scene
                    key='tabbar'
                    tabs
                    tabBarStyle={{
                      backgroundColor: '#fff',
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      paddingVertical: h(0.5)
                    }}
                  >
                    <Scene title="Home" icon={TabIcon} img={image}>
                      <Scene
                        component={Home}
                        hideNavBar={true}
                        wrap={false}
                        key="Home"
                        title="Home"
                      />
                      <Scene
                        component={RockingEvent}
                        hideNavBar={true}
                        wrap={false}
                        key="RockingEvent"
                        title="RockingEvent"
                      />
                      <Scene
                        component={PeopleList}
                        hideNavBar={true}
                        key='PeopleList'
                        title='PeopleList'
                      />
                      <Scene
                        component={Checkout}
                        hideNavBar={true}
                        wrap={false}
                        key="Checkout"
                        title="Checkout"
                      />
                      <Scene
                        component={CreditCard}
                        hideNavBar={true}
                        wrap={false}
                        key="CreditCard"
                        title="CreditCard"
                      />
                      <Scene
                        component={Ticket}
                        hideNavBar={true}
                        key='Ticket'
                        title='Ticket'
                      />
                    </Scene>
                    <Scene title="Match" icon={TabIcon} img={image} >
                      <Scene
                        component={Matches}
                        hideNavBar={true}
                        key='Matches'
                        title='Match'
                      />
                    </Scene>
                    <Scene title="Inbox" icon={TabIcon} img={image} >
                      <Scene
                        component={ChatList}
                        hideNavBar={true}
                        key='ChatList'
                        title='Inbox'
                      />
                    </Scene>

                    <Scene key="Me" title="Me" icon={TabIcon} img={image} >
                      <Scene
                        component={Me}
                        hideNavBar={true}
                        wrap={false}
                        key="Me"
                        title="Me"
                      />
                    </Scene>
                  </Scene>
                </Drawer>
              </Scene>
            </Scene>
          </Stack>
        </Scene>
      </RouterWithRedux>

    );
  }
}

export default Root;
console.disableYellowBox = true;



// console.disableYellowBox = true;


