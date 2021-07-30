import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { signupAPI } from '../../actions/SignUp';
import styles from './styles';
import { w, h } from '../../utils/Dimensions';
import { TextSize } from '../../theme/TextSize';
import Loader from '../../constants/Loader';
import strings from '../../utilities/strings';
import fonts from '../../theme/fonts';
import { countryList } from './countryList.json';
import AsyncStorage from '@react-native-community/async-storage';
import ModalDropdown from 'react-native-modal-dropdown-deprecated-support';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      password: '',
      deviceToken: '',
      value: null,
      checked: false,
      loginstatus: "",
      emailCheck: '',
      hidePassword: true,
      uiRender: false,
      countryList: [],
      username:'',
      country:''
    };
  }

  componentWillMount = async () => {
    var email = await AsyncStorage.getItem('email');
    var password = await AsyncStorage.getItem('password');
    this.setState({
      email: email,
      password: password,
      country:country,
    });
  };

  componentWillReceiveProps = async (nextProps) => {
    console.log("nextProps", nextProps);
    this.setState({
      isLoading: false
    })
    if (nextProps.SignUp) {
      if (nextProps.SignUp.success === true) {
        Alert.alert('Your account has been successfully created');
        // return false;
        Actions.SignUpForm();
      }
      else {
        Alert.alert('User Already Registered');
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
    else if (this.state.password == '' || this.state.password == null) {
      Alert.alert('Please enter password');
      return false;
    }
    else if (this.state.country == '' || this.state.country == null) {
      Alert.alert('Please select country');
    }
    else{
      let payload = {
        email: this.state.email,
        password: this.state.password,
        country:this.state.country,
        username:this.state.username
      };
      this.props.submitForm(payload);
      this.setState({
        isLoading: true,
      });
    }
    
  };
  oncheckvalue = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({ checked: !this.state.checked });
      if (this.state.checked == true) {
        AsyncStorage.setItem('EmailValue', this.state.email);
        AsyncStorage.setItem('password', this.state.password);
        AsyncStorage.setItem('country',this.state.country)
      }
    }
  };

  goToForgotPassword = () => {
    Actions.ForgetPass();
  };
  handleOnPress(value) {
    this.setState({ value: value });
    console.log('value', this.state.value);
  }
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
  countryList() {
    this.setState({
      countryList: value
    });
  }

  displayCompanyRow = (data) => {
    // console.log("data",data);
    return (
      <Text style={{padding: 7, backgroundColor: '#fff'}}>{data.name}</Text>
    );
  };

  selectAnimal = (idx, value) => {
    console.log(value);
    this.setState({
      country: value.name,
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <KeyboardAvoidingView
            style={styles.mainContainer}
            behavior="position"
            keyboardVerticalOffset={-240}>
            <Loader loading={this.state.isLoading} />
            <StatusBar />

            <Image
              source={require('../../assets/assest/assest/logoApp.png')}
              style={styles.headerImage}
            />
            <Text style={styles.signinText}>Sign up</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: h(-0.3),
              }}>
              <View
                style={{
                  borderBottomColor: '#ff6c6c',
                  borderBottomWidth: h(0.6),
                  width: '9%',
                  marginLeft: h(2),
                  borderRadius: h(5),
                }}
              />
              <View
                style={{
                  borderBottomColor: '#ff6c6c',
                  borderBottomWidth: h(0.6),
                  width: '3%',
                  borderRadius: h(5),
                  marginLeft: h(2),
                }}
              />
            </View>
            <View style={styles.cardView}>
              <Text style={styles.UsernameText}>Email Id</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: h(7)
                }}>
                <Image
                  source={require('../../assets/assest/assest/icon-01.png')}
                  style={styles.userIconView}
                />
                <TextInput
                  style={styles.InputText}
                  autoCapitalize="none"
                  placeholder="smithzone@word.com"
                  multiline={true}
                  onChangeText={(email) => this.setState({ email: email })}
                  value={this.state.email}
                />
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  width: '96%',
                  alignSelf: 'center',
                  opacity: 0.1,
                  marginTop: h(-1),
                }}
              />
              <Text style={styles.UsernameText}>Password</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: h(6)
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
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
                      secureTextEntry={this.state.hidePassword}
                      onChangeText={(password) =>
                        this.setState({ password: password })}
                      value={this.state.password}
                    />
                  </View>
                </View>
                <TouchableOpacity style={{right:h(1)}}
                onPress={this.managePasswordVisibility}>
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
                  width: '96%',
                  alignSelf: 'center',
                  opacity: 0.1,
                  marginTop: h(-1),
                }}
              />
              <Text style={styles.UsernameText}> Country</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                <ModalDropdown
                  style={{
                    height: h(7),
                    width: '100%',
                    backgroundColor: '#fff',
                    paddingHorizontal: h(2),
                    alignSelf:'center',
                    justifyContent: 'center',
                  }}
                  
                  dropdownStyle={{
                    width: '80%',
                    height: h(75),
                    marginTop:h(15),
                    padding: h(2),
                    alignSelf:'center',
                    justifyContent: 'center',
                  }}
                  dropdownTextStyle={{
                    color: '#000',
                    fontSize: 14,
                  }}
                  
                  options={countryList}
                  renderRow={(row) => this.displayCompanyRow(row)}
                  onSelect={(idx, value) => this.selectAnimal(idx, value)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: h(2.2),
                        width: w(80),
                        opacity:0.7
                      }}>
                      {this.state.country == '' || this.state.country == null
                        ? 'Select country'
                        : this.state.country}
                    </Text>
                    <Image
                      source={require('../../assets/icon/play.png')}
                      style={{
                        height:h(2),
                        width:h(2),
                        right:h(1),
                        tintColor:'gray'
                      }}
                      resizeMode='contain'
                    />
                  </View>
                </ModalDropdown>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.doLogin()}
              style={styles.btnView}>
              <Text style={styles.btnTextStyle}>Sign up</Text>
            </TouchableOpacity>
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
            <View
              style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text style={styles.socialMediaText}>Do you have an account?</Text>
              <TouchableOpacity onPress={() => Actions.Login()}>
                <Text style={styles.signupText}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('kkkkk', state);
  return {
    SignUp: state.SignUp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(signupAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
