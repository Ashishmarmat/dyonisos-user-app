import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import fonts from '../../theme/fonts';
import { w, h } from '../../utils/Dimensions';
import Share from 'react-native-share';
import { drawermenuAPI } from '../../actions/DrawerMenu';
import AsyncStorage from '@react-native-community/async-storage';

class DrawerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      show: false,
      //   email:"",
      //   firstName:"",
      //   lastName:"",
      //   pin:""
    };
  }
  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  // toggleDrawer = () => {
  //   Actions.drawerToggle();
  // }
  //   ViewReport = () => {
  //     Actions.ViewReport();
  //   }
  //   settingsScreen = () => {
  //     Actions.Settings();
  //   }

  // signOut = () => {

  // let payload = {
  //   email: this.state.email,
  //  }
  //  this.props.submitForm(payload);
  //  Actions.drawerClose();
  //  this.setState({
  //    isLoading: true,
  //  })
  // Actions.Login();
  // }
  componentWillReceiveProps = async (nextProps) => {
    // console.log("sidemenu", nextProps.login.userData);
    // var email = await AsyncStorage.getItem('email');
    // console.log("email", email);
    // this.setState({
    //   email:email
    // })
  };
  componentDidMount() {
    // this.getData()
  }
  //   getData = async () => {
  //     try {
  //       const firstName = await AsyncStorage.getItem('firstName')
  //       const lastName = await AsyncStorage.getItem('lastName')
  //       const pin = await AsyncStorage.getItem('pin')
  //       if(firstName !== null || lastName !== nulll || pin !== null) {
  //         // value previously stored
  //         this.setState({
  //           firstName:firstName,
  //           lastName:lastName,
  //           pin:pin
  //         })
  //         console.log(firstName,lastName)
  //         console.log("pin",pin)

  //       }
  //     } catch(e) {
  //       // error reading value
  //     }
  //   }
  onShareClick = () => {
    const shareOptions = {
      title: 'Share via',
      message: 'some message',
      url: 'some share url',
      social: Share.Social,
      whatsAppNumber: '91999995648',
      filename: 'test',
    };
    Share.open(shareOptions);
  };

  logoutFunc = () =>{
    console.log("InsideLogout")
    AsyncStorage.removeItem('userId')
    Actions.Login()
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#df396b',
              marginTop: h(5),
              marginBottom: h(3),
            }}>
            <TouchableOpacity
              onPress={Actions.drawerToggle}
            //   onPress={()=>this.props.navigation.navigate('Home')}
            >
              <Image
                source={require('../../assets/assest/assest/icon-16.png')}
                style={styles.bckArrow}
              />
            </TouchableOpacity>
            <TouchableOpacity
            //  onPress={Actions.drawerToggle}
            //  onPress={()=>this.props.navigation.navigate('drawerToggle')}
            >
              <Text style={styles.headerText}>Settings and privacy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawerList}>
            <View>
              <TouchableOpacity
                onPress={this.ShowHideComponent}
              >
                <View style={styles.drawerView}>
                  <Image
                    style={styles.inputIcon}
                    source={require('../../assets/assest/assest/icon-2.png')}
                    resizeMode="contain"
                  />
                  <Text style={styles.drawerText}>Manage my account</Text>
                </View>
              </TouchableOpacity>

              {this.state.show ? (
                <View>
                  <TouchableOpacity onPress={Actions.UpdatePro}>
                    <View style={styles.drawerView}>
                      <Text style={styles.minusIcon}> - </Text>
                      <Text style={styles.drawerText}>Update profile</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={Actions.ResetPass}>
                    <View style={styles.drawerView}>
                      <Text style={styles.minusIcon}> - </Text>
                      <Text style={styles.drawerText}>Change password</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <TouchableOpacity
            //onPress={() => this.ResetPass()}
            >
              <View style={styles.drawerView}>
                <Image
                  style={styles.inputIcon}
                  source={require('../../assets/assest/assest/icon-18.png')}
                  resizeMode="contain"
                />
                <Text style={styles.drawerText}>Privacy and safety</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Actions.Matches}
            // onPress={()=>this.props.navigation.navigate('Matches')}
            >
              {/* <TouchableOpacity
							onPress={()=>this.props.navigation.navigate('Matches')}
							> */}
              <View style={styles.drawerView}>
                <Image
                  style={styles.inputIcon}
                  source={require('../../assets/assest/assest/icon-19.png')}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.drawerText}>Matches</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Actions.Ticket}
            // onPress={Actions.Ticket}
            // onPress={()=>this.props.navigation.navigate('Ticket')}
            >
              {/* <TouchableOpacity
							onPress={()=>this.props.navigation.navigate('Ticket')}
							> */}
              <View style={styles.drawerView}>
                <Image
                  style={styles.inputIcon}
                  source={require('../../assets/assest/assest/icon-20.png')}
                  resizeMode="contain"
                />
                <Text style={styles.drawerText}>Ticket</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onShareClick()}>
              <View style={styles.drawerView}>
                <Image
                  style={styles.inputIcon}
                  source={require('../../assets/assest/assest/icon-21.png')}
                  resizeMode="contain"
                />
                <Text style={styles.drawerText}>Share profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.logoutFunc()}>
              <View style={styles.drawerView}>
                <Image
                  style={styles.inputIcon}
                  source={require('../../assets/assest/assest/icon-22.png')}
                  resizeMode="contain"
                />
                <Text style={styles.drawerText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

DrawerBar.propTypes = {};

const mapStateToProps = (state) => {
  // return {
  //   login: state.login,
  //   drawermenu:state.drawermenu
  // }
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   submitForm: (data) => dispatch(drawermenuAPI(data)),
  // }
};
export default DrawerBar;
// export default connect(mapStateToProps, mapDispatchToProps)(DrawerBar);
