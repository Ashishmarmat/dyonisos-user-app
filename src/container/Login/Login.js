import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
  Alert as rnalert,
  Alert,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loginAPI } from "../../actions/Login";
import styles from './styles';
import { w, h } from '../../utils/Dimensions';
import { TextSize } from '../../theme/TextSize';
import Loader from '../../constants/Loader';
import strings from '../../utilities/strings'
import fonts from '../../theme/fonts'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showProgress: true,
      email: '',
      password: '',
      passwordShow: true,
      deviceToken: '',
      token:'',
      value: null,
      checked: false,
      loginstatus: "",
      emailCheck: '',
      hidePassword: true,
      uiRender: false,
    };
  }
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      BackHandler.addEventListener(
        'hardwareBackPress',
        function () {
          if (
            Actions.currentScene === 'Login' ||
            Actions.currentScene === '_Login'
          ) {
            rnalert.alert(
              'Dyonisos',
              'Are you sure you want to exit app ?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => BackHandler.exitApp()},
              ],
              {cancelable: false},
            );
            return true;
          } else {
            return false;
          }
        }.bind(this),
      );
    });
  }
  componentWillMount = async () => {
    var email = await AsyncStorage.getItem('email');
    var password = await AsyncStorage.getItem('password');
    this.setState({
      email: email,
      password: password,
    });
  };

  componentWillReceiveProps = async (nextProps) => {
    console.log("nextProps", nextProps);
    this.setState({
      isLoading: false
    })
    if (nextProps.login) {
      if (nextProps.login.success === true) {
        var token = await AsyncStorage.getItem('token')
        this.setState({
          token:token,
          loginstatus:"true"
        })
        console.log("Inside if")
        Actions.tabbar();
      }
      else {
        Alert.alert("Email or password does not match");
        return false;
      }
    }
  };

  doLogin = () => {

    if (this.state.email == '' || this.state.email == null) {
      Alert.alert('Please enter email');
      return false;
    }
    var text = this.state.email;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      Alert.alert('Email is not Correct');
      return false;
    }
    if (this.state.password == '' || this.state.password == null) {
      Alert.alert('Please enter password');
      return false;
    }
    let payload = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.submitForm(payload);
    this.setState({
      isLoading: true,
    });
  };

  oncheckvalue = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({ checked: !this.state.checked });
      if (this.state.checked == true) {
        AsyncStorage.setItem('EmailValue', this.state.email);
        AsyncStorage.setItem('password', this.state.password);
      }
    }
  };
  managePasswordVisibility = () => {
    if (this.state.hidePassword === true) {
      this.setState({
        hidePassword: false
      })
    } else if (this.state.hidePassword === false) {
      this.setState({
        hidePassword: true
      })
    }
    if (this.state.uiRender === false) {
      this.setState({
        uiRender: true
      })
    } else {
      this.setState({
        uiRender: false
      })
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => { Keyboard.dismiss(); }}>
          <KeyboardAvoidingView style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? "position" : "position"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -270 : -270}>
            <Loader loading={this.state.isLoading} />
            <StatusBar />

            <Image
              source={require('../../assets/assest/assest/logoApp.png')}
              style={styles.headerImage}
              resizeMode="contain"
            />
            <Text style={styles.signinText}>Sign in</Text>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: h(-0.3)
            }}>
              <View
                style={{
                  borderBottomColor: '#ff6c6c',
                  borderBottomWidth: h(0.6),
                  width: '8%',
                  marginLeft: '4%',
                  borderRadius: h(5)
                }}
              />
              <View
                style={{
                  borderBottomColor: '#ff6c6c',
                  borderBottomWidth: h(0.6),
                  width: '2.5%',
                  borderRadius: h(5),
                  marginLeft: '3%',
                }}
              />
            </View>
            <View style={styles.cardView}>
              <Text style={styles.UsernameText}>Email Id</Text>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
                <Image
                  source={require('../../assets/assest/assest/icon-01.png')}
                  style={styles.userIconView}
                />
                <TextInput
                  style={styles.InputText}
                  autoCapitalize="none"
                  multiline={true}
                  placeholder="smithzone@word.com"
                  onChangeText={(email) => this.setState({ email: email })}
                  value={this.state.email}
                />
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  width: '94%',
                  alignSelf: "center",
                  opacity: 0.10,
                  marginBottom: h(1),
                }}
              />
              <Text style={styles.UsernameText}>Password</Text>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: h(0.5)
              }}>
                <View>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <Image
                      source={require('../../assets/assest/assest/icon-02.png')}
                      style={styles.passwordIconView}
                    />
                    <TextInput
                      style={styles.InputText}
                      autoCapitalize="none"
                      keyboardType={'default'}
                      placeholder="* * * * * * * * * *"
                      // multiline={true}
                      // secureTextEntry={true}
                      secureTextEntry={this.state.hidePassword}
                      onChangeText={(password) =>
                        this.setState({ password: password })}
                      value={this.state.password}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={this.managePasswordVisibility}>
                  <Image
                    source={(this.state.hidePassword) ?
                      require('../../assets/assest/assest/icon-eye.png') :
                      require('../../assets/assest/assest/icon-eyeOff.png')}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  width: '94%',
                  alignSelf: "center",
                  opacity: 0.10,
                }}
              />
              <TouchableOpacity
                onPress={() => Actions.ForgetPass()}>
                <Text
                  style={styles.forgetPassLink}>
                  Forgot your password?
              </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.doLogin()}
                style={styles.btnView}>
                <Text
                  style={styles.btnTextStyle}>
                  Sign in
              </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: h(2),
                width: '90%',
                alignSelf: "center",
                opacity: 0.20
              }}
            />
            <Text style={styles.socialMediaText}>Or use your Social Media Account</Text>
            <View style={{
              flexDirection: "row",
              // marginHorizontal: h(2),
              justifyContent: "center"
            }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/assest/assest/icon-39.png')}
                  style={styles.fbIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/assest/assest/icon-40.png')}
                  style={styles.fbIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              position: 'absolute',
              bottom: 0
            }}>
              <Text style={styles.socialMediaText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => Actions.SignUp()}>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
};
Login.propTypes = {
  submitForm: PropTypes.func,
  login: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(loginAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
