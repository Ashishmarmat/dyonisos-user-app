import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  BackHandler,
  SafeAreaView,
  Alert,
  ImageBackground,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loginAPI } from '../../actions/Login';
import { sidescreenAPI } from '../../actions/SideScreen';
import styles from './styles';
import { w, h } from '../../utils/Dimensions';
import { TextSize } from '../../theme/TextSize';
import Loader from '../../constants/Loader';
import strings from '../../utilities/strings';
import fonts from '../../theme/fonts';
import { Container } from 'native-base';
import StarRating from 'react-native-star-rating';
import Share from 'react-native-share';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';
import { initDB, MasconSiteData, massconSiteList } from '../../database';

let siteData = true;

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    siteData = true;
    this.state = {
      currentLongitude: 'unknown',
      currentLatitude: 'unknown',
      isLoading: false,
      starCount: 3,
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  componentWillMount = async () => { };

  componentWillReceiveProps = async (nextProps) => { };
  handleOnPress(value) {
    this.setState({ value: value });
    console.log('value', this.state.value);
  }
  backNavigate = () => {
    this.props.navigation.navigate('DrawerBar');
  };
  enableLocation = async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          isLoading: true,
        });
        fetch(
          `${'https://maps.googleapis.com/maps/api/geocode/json'}?latlng=` +
          position.coords.latitude +
          ',' +
          position.coords.longitude +
          `&key=${'AIzaSyCVUUPuzrsBEv6WvaeA7YMvGIjKNUeZXmU'}`,
          {
            method: 'POST',
          },
        )
          .then((res) => res.json())
          .then((res) => {
            this.setState({
              isLoading: false,
            });

            if (res.status === 'OK') {
              this.setState({
                isLoading: false,
              });
            }
          })
          .catch((e) => {
            Alert.alert(e);
          });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  };
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
  backNavigate = () => {
    Actions.DrawerBar;
  };
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Loader loading={this.state.isLoading} />
        <StatusBar />
        <ImageBackground
          imageStyle={{
            borderBottomLeftRadius: h(2),
            borderBottomRightRadius: h(2),
          }}
          source={require('../../assets/assest/assest/splashscreen-01-01.png')}
          style={styles.headerImage}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: h(1),
              marginBottom: h(1),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              // onPress={() => this.props.navigation.goBack()}
              style={{
                flex: 2,
              }}>
              <Image
                source={require('../../assets/assest/assest/icon-16.png')}
                style={styles.bckArrow}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 2,
              }}>
              <Text style={styles.headingText}>Ticket</Text>
            </View>
            <View
              style={{
                flex: 2,
              }}></View>
          </View>
        </ImageBackground>
        <ScrollView>
          <View style={styles.cardView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.headerBoldText}>Rock king Event</Text>
            </View>
            <Text style={styles.lightText}>North Little Rock, USA 72800</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: h(1.5),
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.normalText}>Hosted By</Text>
                <Image
                  source={require('../../assets/assest/Stuff/entrepreneur.jpg')}
                  style={styles.hostImage}
                />
                <Text style={styles.userNameText}>Smith zone</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.enableLocation()}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fce6ef',
                  borderRadius: h(10),
                  height: h(4),
                  width: w(27),
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/assest/assest/icon-05.png')}
                  style={styles.locationIcon}
                />
                <Text style={styles.onMapText}>On Map</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: h(3), width: h(12) }}>
            <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.state.starCount}
                  starSize={12}
                  Icon={'fa-star'}
                  emptyStarColor="#f2f2f2"
                  fullStarColor="#ffc107"
                  // selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
            </View>
            <View style={styles.cardDetailView}>
              <Text style={styles.semiBoldText}>Event Start</Text>
              <View
                style={{
                  flexDirection: 'row',

                  marginTop: h(1.5),
                }}>
                <Text style={styles.semiBoldText}>14 June</Text>
                <View style={{ flex: 0.7 }}></View>
                <Text style={styles.semiBoldText}>15 June</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginTop: h(1.5)
                }}>
                <Text style={styles.timeLightText}>02:00 pm- 05:00 pm</Text>
                <Text style={styles.timeLightText}>02:00 pm- 05:00 pm</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: h(0.5),
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.onShareClick()}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#df396b',
                  borderRadius: 10,
                  alignItems: 'center',
                  width: w(32),
                  height: h(5),
                }}>
                <Image
                  source={require('../../assets/assest/assest/icon-36.png')}
                  style={styles.bckArrow}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: h(1.9),
                    //: fonts.regularText,
                  }}>
                  Share Event
                </Text>
              </TouchableOpacity>
              <Text style={styles.CashText}>$500/-</Text>
            </View>
          </View>
          <View style={{ padding: h(0.2) }}>
            <View style={styles.barCodeView}>
              <Image
                source={require('../../assets/assest/assest/icon-42.png')}
                style={styles.BarCodeImage}
              />
              <Text style={styles.barDesText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    sidescreen: state.sidescreen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(loginAPI(data)),
    HomeScreenApi: (data) => dispatch(sidescreenAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
