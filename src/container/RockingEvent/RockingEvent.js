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
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  BackHandler,
  SafeAreaView,
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
import Share from 'react-native-share';
import Geolocation from '@react-native-community/geolocation';
import StarRating from 'react-native-star-rating';
import AsyncStorage from '@react-native-community/async-storage';
import { initDB, MasconSiteData, massconSiteList } from '../../database';

let siteData = true;

class RockingEvent extends React.Component {
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

  handleOnPress(value) {
    this.setState({ value: value });
    console.log('value', this.state.value);
  }
  //       backNavigate=()=>{
  //      Actions.Home
  //  // this.props.navigation.navigate('Home')
  //     }

  render() {
    return (
      <SafeAreaView
        style={styles.mainContainer}
        behavior="position"
        keyboardVerticalOffset={-150}>
        <Loader loading={this.state.isLoading} />
        <StatusBar />
        <View style={styles.headerView}>
          <Image
            source={require('../../assets/assest/Stuff/restaurant.jpg')}
            style={styles.headerImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: h(-20),
            marginLeft: h(1),
            marginBottom: h(1),
          }}>
          <TouchableOpacity
            //  onPress={() => this.props.navigation.goBack()}>
            onPress={() => this.props.navigation.navigate('Home')}>
            <View
              style={{
                flex: 2,
              }}>
              <Image
                source={require('../../assets/assest/assest/icon-16.png')}
                style={styles.bckArrow}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 2,
            }}>
            <View style={{
              flex: 1
            }}></View>
            <Text style={styles.headingText}>Rock King</Text>
          </View>
          <View
            style={{
              flex: 0.2,
            }}></View>
        </View>
        <ScrollView>
          <View style={styles.cardView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.headerBoldText}>Rock king Event</Text>

              <View
                style={{
                  height: h(4),
                  width: h(12),
                  marginTop: h(2),
                  marginRight: 9,
                }}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.state.starCount}
                  starSize={15}
                  Icon={'fa-star'}
                  emptyStarColor="#f2f2f2"
                  fullStarColor="#ffc107"
                  // selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
              </View>
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
                starSize={15}
                Icon={'fa-star'}
                emptyStarColor="#f2f2f2"
                fullStarColor="#ffc107"
                selectedStar={(rating) => this.onStarRatingPress(rating)}
              />
            </View>
            <View style={styles.cardDetailView}>
              <Text style={styles.semiBoldText}>Event Start</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: h(1.5),
                }}>
                <View>
                  <Text style={styles.semiBoldText}>14 June</Text>
                  <Text style={styles.timeLightText}>02:00 pm- 05:00 pm</Text>
                </View>
                <View>
                  <Text style={styles.semiBoldText}>15 June</Text>
                  <Text style={styles.timeLightText}>02:00 pm- 05:00 pm</Text>
                </View>
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
                  height: h(6),
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
          <Text style={styles.TagsView}>Tags</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: h(0.5) }}>
            <TouchableOpacity style={styles.EventbtnView}>
              <Text style={styles.EventbtnTextStyle}>Party Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.EventbtnView}>
              <Text style={styles.EventbtnTextStyle}>Couple Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.EventbtnView}>
              <Text style={styles.EventbtnTextStyle}>Solo Event</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.TagsView}>Description</Text>
          <Text style={styles.desText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            specimen book. It has survived.
          </Text>

          <TouchableOpacity
            onPress={() => Actions.Checkout()}
            // onPress={()=>this.props.navigation.navigate('Checkout')}
            style={styles.ReservebtnView}>
            <Text style={styles.ReservebtnTextStyle}>Reserve places</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Login.propTypes = {
//   submitForm: PropTypes.func,
//   login: PropTypes.any
// }

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

export default connect(mapStateToProps, mapDispatchToProps)(RockingEvent);
