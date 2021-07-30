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
  ImageBackground,
  BackHandler,
  Alert,
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
import Geolocation from '@react-native-community/geolocation';
import { Container } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import StarRating from 'react-native-star-rating';

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      starCount: 3,
      profile: false,
      currentLongitude: 'unknown',
      currentLatitude: 'unknown',
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
          starCount: 3,
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

  handleOnPress(value) {
    this.setState({ value: value });
    console.log('value', this.state.value);
  }
  profileImage = () => {
    this.setState({ profile: true });
  };
  blockProfile = () => {
    this.setState({ profile: false });
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <Loader loading={this.state.isLoading} />
          <StatusBar />
          <View style={styles.headerView}>
            <View>
              <ImageBackground
                source={require('../../assets/assest/Stuff/girl01.jpg')}
                style={styles.headerImage1}></ImageBackground>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  //backgroundColor: 'blue',
                  marginVertical: h(-12),
                }}>
                <TouchableOpacity
                  style={{ marginTop: h(-20) }}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image
                    source={require('../../assets/assest/assest/icon-16.png')}
                    style={styles.bckArrow1}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: h(-25) }}
                  onPress={this.profileImage}>
                  <Text style={styles.profiledot}>...</Text>
                </TouchableOpacity>
                {this.state.profile === false ||
                  (this.state.profile === true && (
                    <View
                      style={{
                        borderRadius: h(3),
                        position: 'absolute',
                        top: h(-18.3),
                        bottom: 0,
                        right: h(5),
                        right: 0,
                        backgroundColor: '#fff',
                        height: h(10),
                        width: '35%',
                      }}>
                      <TouchableOpacity
                        onPress={this.blockProfile}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          marginVertical: h(1.8),
                        }}>
                        <Image
                          source={require('../../assets/assest/assest/icon-33.png')}
                          style={styles.block}
                        />
                        <Text style={styles.semiBoldText}>Block Profile</Text>
                        <View style={{ flex: 0.1 }}></View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                        }}>
                        <Image
                          source={require('../../assets/assest/assest/icon-34.png')}
                          style={styles.block}
                        />
                        <Text style={styles.semiBoldText}>Report</Text>
                        <View style={{ flex: 0.5 }}></View>
                      </TouchableOpacity>
                      <View></View>
                    </View>
                  ))}
              </View>
            </View>

            <View style={styles.cardView1}>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/assest/assest/icon-41.png')}
                    style={styles.expand}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: h(-3) }}>
                <Text style={styles.userNameText}>Isabella, 24</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // paddingHorizontal:h(1)
                }}>
                <Image
                  source={require('../../assets/assest/assest/message.png')}
                  style={styles.LocIcon}
                />
                <Text style={styles.university}>
                  Senior Graphic Designer in Nyc
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //paddingHorizontal:h(1)
                }}>
                <Image
                  source={require('../../assets/assest/assest/icon-13.png')}
                  style={styles.LocIcon}
                />
                <Text style={styles.university}>University of Oxford</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //  paddingHorizontal:h(1)
                }}>
                <Image
                  source={require('../../assets/assest/assest/icon-14.png')}
                  style={styles.LocIcon}
                />
                <Text style={styles.university}>Nyc 62589</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // paddingHorizontal:h(1)
                }}>
                <Image
                  source={require('../../assets/assest/assest/icon-15.png')}
                  style={styles.LocIcon}
                />
                <Text style={styles.university}>100 miles away</Text>
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginVertical: h(1),
                  width: w(90),
                  alignSelf: 'center',
                  opacity: 0.3,
                }}
              />
              <View style={{ marginVertical: h(1) }}>
                <Text style={styles.semiBoldText}>Bio</Text>

                <Text style={styles.paragraph}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginVertical: h(1),
                    width: w(90),
                    alignSelf: 'center',
                    opacity: 0.3,
                  }}
                />
                <View style={{ marginVertical: h(1) }}>
                  <Text style={styles.semiBoldText}>Common interests</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.EventbtnView}>
                    <Text style={styles.EventbtnTextStyle}>Party Event</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.EventbtnView}>
                    <Text style={styles.EventbtnTextStyle}>Couple Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: h(3) }}>
            <Text style={styles.semiBoldText1}>
              Events that interest Isabella
            </Text>

            <View
              style={{
                flex: 2,
              }}></View>
            <View style={styles.headerView}>
              <Image
                source={require('../../assets/assest/Stuff/restaurant.jpg')}
                style={styles.headerImage}
              />
            </View>

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
                    justifyContent: 'center',
                    marginTop: 4,
                    alignSelf: 'center',
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
                  <Text style={styles.normalText}>Smith zone</Text>
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
              <Text style={styles.semiBoldText}>Interest people</Text>
              <View style={{ flex: 1 }}></View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/assest/Stuff/girl01.jpg')}
                  style={{
                    height: h(5),
                    width: h(5),
                    borderRadius: h(5),
                  }}
                />
                <Image
                  source={require('../../assets/assest/Stuff/fashion-1063100_1920.jpg')}
                  style={{
                    height: h(5),
                    width: h(5),
                    borderRadius: h(5),
                    marginLeft: h(-1),
                  }}
                />
                <Image
                  source={require('../../assets/assest/Stuff/entrepreneur.jpg')}
                  style={{
                    height: h(5),
                    width: h(5),
                    borderRadius: h(5),
                    marginLeft: h(-1),
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ marginVertical: h(1) }}>
            <Text style={styles.semiBoldText1}>All Photos (25)</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: h(2),
              }}>
              <View style={styles.photo}>
                <Image
                  source={require('../../assets/assest/Stuff/restaurant.jpg')}
                  style={styles.photoImage}
                />
              </View>
              <View style={styles.headerView}>
                <Image
                  source={require('../../assets/assest/Stuff/girl01.jpg')}
                  style={styles.photoImage}
                />
              </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
