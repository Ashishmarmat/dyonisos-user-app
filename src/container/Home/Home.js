import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  Slider,
  SafeAreaView,
  BackHandler,
  Alert as rnalert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { w, h } from '../../utils/Dimensions';
import Loader from '../../constants/Loader';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import fonts from '../../theme/fonts';
import MeetPeople from '../MeetPeople/MeetPeople';
import DiscoverEvents from '../DiscoverEvents/DiscoverEvents';
import Modal from 'react-native-modal';
import CheckBox from 'react-native-check-box';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { widthScale, moderateScale, width } from '../../theme/ResposiveFonts';
import RangeSlider from 'rn-range-slider';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DiscoverEventsData: true,
      MeetPeopleData: false,
      showModal: false,
      sliderValue: 500,
      DisCoversliderValue: 15,
      gender: this.props.gender || '',
      sliderOneChanging: true,
      multiSliderValue: [10, 500],
      RangeSliderValue: 0
    };
  }
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      BackHandler.addEventListener(
        'hardwareBackPress',
        function () {
          if (
            Actions.currentScene === 'Home' ||
            Actions.currentScene === '_Home'
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
  multiSliderValuesChange = (values) => {
    // console.log("value", values)
    this.setState({
      multiSliderValue: values,
    });
  };
  sliderValue = (values) => {
    // console.log("value", values)
    this.setState({
      sliderValue: values,
    });
  };
  DisCoversliderValue = (values) => {
    // console.log("value", values)
    this.setState({
      DisCoversliderValue: values,
    });
  };
  toogleGender = (gender) => {
    this.setState({
      gender: gender,
    });
  };
  handleModal = () => {
    this.setState({ showModal: true });
  };
  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  DataShow(value) {
    console.log('value', value);
    if (value == 'DiscoverEvents') {
      this.setState({
        DiscoverEventsData: true,
        MeetPeopleData: false,
      });
    } else if (value == 'MeetPeople') {
      this.setState({
        DiscoverEventsData: false,
        MeetPeopleData: true,
      });
    }
  }
  render() {
    return (
        <SafeAreaView style={{position:'absolute'}}>
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: h(2),
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  marginHorizontal: h(3),
                }}
                onPress={() => Actions.drawerOpen()}>
                <Image
                  style={styles.menuIcon}
                  source={require('../../assets/assest/assest/icon12-01.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={styles.Touchableview}>
                <TouchableOpacity
                  onPress={() => this.DataShow('DiscoverEvents')}
                  style={[
                    styles.pendingTouchable,
                    {
                      backgroundColor:
                        this.state.DiscoverEventsData == true
                          ? '#df396b'
                          : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.pendingText,
                      {
                        color:
                          this.state.DiscoverEventsData == true ? '#fff' : '#000',
                      },
                    ]}>
                    Discover Events
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.DataShow('MeetPeople')}
                  style={[
                    styles.submitteddTouchable,
                    {
                      backgroundColor:
                        this.state.MeetPeopleData == true ? '#df396b' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.submiteedText,
                      {
                        color:
                          this.state.MeetPeopleData == true ? '#fff' : '#000',
                      },
                    ]}>
                    Meet People
                </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={this.handleModal}
                style={{ alignSelf: 'center', marginHorizontal: h(3) }}>
                <Image
                  style={styles.menuIcon}
                  source={require('../../assets/assest/assest/icon12-02.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View>
              {this.state.DiscoverEventsData == true && <DiscoverEvents />}
              {this.state.MeetPeopleData == true && <MeetPeople />}
            </View>
          </View>
          {this.state.DiscoverEventsData == true && (
            <Modal
              isVisible={this.state.showModal}
              onBackdropPress={this.hideModal}
              style={styles.bottomModal}>
              <View style={styles.modal}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <View style={{ flex: 0.5 }}></View>
                  <Text style={styles.filterText}>Filter</Text>
                  <TouchableOpacity
                    style={{ justifyContent: 'flex-end', flex: 0.5 }}>
                    <Text style={styles.reset}>Reset</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                    width: w(95),
                    alignSelf: 'center',
                    opacity: 0.1,
                    marginVertical: h(2.5),
                  }}
                />

                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.filter}>Location</Text>
                  <TouchableOpacity>
                    <Text style={styles.reset}>NYC,USA</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                    width: w(95),
                    alignSelf: 'center',
                    opacity: 0.1,
                    marginVertical: h(2),
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: h(1),
                  }}>
                  <Text style={styles.filter}>Events distance</Text>
                  <Text style={styles.reset}>
                    {this.state.sliderValue} km
                  </Text>
                </View>
                <View style={styles.slidercontainer}>
                  <MultiSlider
                    values={[
                      this.state.sliderValue[0],
                      //  this.state.multiSliderValue[1],
                    ]}
                    sliderLength={width / 1.2 - 5}
                    onValuesChange={this.sliderValue}
                    min={10}
                    max={500}
                    step={1}
                    allowOverlap
                    snapped
                    markerStyle={styles.sliderMarker}
                    unselectedStyle={{ backgroundColor: '#e2e2e2', height: 1 }}
                    pressedMarkerStyle={{}}
                    selectedStyle={{ backgroundColor: '#e84d67', height: 2 }}
                    trackStyle={{ borderRadius: 2, height: 2 }}
                  />
                </View>

                <View>
                  <TouchableOpacity
                    onPress={this.hideModal}
                    style={styles.btnView}>
                    <Text style={styles.btnTextStyle}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
          {this.state.MeetPeopleData == true && (
            <Modal
              isVisible={this.state.showModal}
              onBackdropPress={this.hideModal}
              style={styles.bottomModal}>
              <View style={styles.modal}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <View style={{ flex: 0.5 }}></View>
                  <Text style={styles.filterText}>Filter</Text>
                  <TouchableOpacity
                    style={{ justifyContent: 'flex-end', flex: 0.5 }}>
                    <Text style={styles.reset}>Reset</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                    width: w(95),
                    alignSelf: 'center',
                    opacity: 0.1,
                    marginVertical: h(2),
                  }}
                />
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.filter}>Distance from me</Text>
                  <Text style={styles.reset}>
                    {this.state.sliderValue} km
                  </Text>
                </View>

                <View style={styles.slidercontainer}>
                  <MultiSlider
                    values={[
                      this.state.sliderValue[0],
                      //  this.state.multiSliderValue[1],
                    ]}
                    sliderLength={width / 1.2 - 5}
                    onValuesChange={this.sliderValue}
                    min={0}
                    max={500}
                    step={1}
                    allowOverlap
                    snapped
                    markerStyle={styles.sliderMarker}
                    unselectedStyle={{ backgroundColor: '#e2e2e2', height: 1 }}
                    pressedMarkerStyle={{}}
                    selectedStyle={{ backgroundColor: '#e84d67', height: 2 }}
                    trackStyle={{ borderRadius: 2, height: 2 }}
                  />
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                    width: w(95),
                    alignSelf: 'center',
                    opacity: 0.1,
                    marginVertical: h(2),
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: h(0.8),
                  }}>
                  <Text style={styles.filter}>Interested in</Text>
                  <Text style={styles.reset}>Male</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{}}>
                      <CheckBox
                        checkBoxColor={'#e84d67'}
                        isChecked={this.state.gender === 'male'}
                        onClick={() => this.toogleGender('male')}
                      />
                    </View>
                    <View style={{ flex: 10 }}>
                      <Text style={styles.male}>Male</Text>
                    </View>
                  </View>
                  <View style={{ marginRight: h(-22) }}></View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{}}>
                      <CheckBox
                        checkBoxColor={'#e84d67'}
                        isChecked={this.state.gender === 'female'}
                        onClick={() => this.toogleGender('female')}
                      />
                    </View>
                    <View style={{ flex: 10 }}>
                      <Text style={styles.male}>Female</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                    width: w(95),
                    alignSelf: 'center',
                    opacity: 0.1,
                    marginVertical: h(2),
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: 'space-between'
                  }}>
                  <Text style={styles.filter}>Age range</Text>
                  <Text style={styles.male}>
                    {this.state.rangeLow}- {this.state.rangeHigh}
                  </Text>
                </View>
                <View style={styles.slidercontainer}>
                  <RangeSlider
                    style={{ width: w(90), height: 70}}
                    gravity={'center'}
                    min={18}
                    max={55}
                    step={1}
                    lineWidth={2}
                    thumbRadius={10.5}
                    thumbBorderColor="#e84d67"
                    thumbBorderWidth={1.5}
                    selectionColor="#e84d67"
                    blankColor="#e2e2e2"
                    onValueChanged={(low, high, fromUser) => {
                      this.setState({ rangeLow: low, rangeHigh: high })
                    }} />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={this.hideModal}
                    style={styles.btnView}>
                    <Text style={styles.btnTextStyle}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f6fb',
    flex: 1,
    alignSelf:'center'
  },
  menuIcon: {
    height: h(5),
    width: h(5),
  },
  Touchableview: {
    flexDirection: 'row',
    height: h(6),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pendingTouchable: {
    height: h(5.8),
    width: w(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: h(5.5),
    borderBottomLeftRadius: h(5.5),
  },
  submitteddTouchable: {
    height: h(5.8),
    width: w(29),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: h(5.5),
    borderBottomRightRadius: h(5.5),
  },
  pendingText: {
    fontSize: h(1.7),
    //: fonts.semiBold,
  },
  submiteedText: {
    fontSize: h(1.7),
    //: fonts.semiBold,
  },
  cardView: {
    padding: h(0.8),
    height: h(15),
    marginTop: h(2),
    marginHorizontal: h(2),
    marginBottom: h(1),
    borderRadius: 15,
    borderColor: '#ddd',
    elevation: 10,
    backgroundColor: '#fff',
  },
  lightText: {
    color: '#000',
    fontSize: h(2),
    //: fonts.lightText,
    padding: h(1),
  },
  boldText: {
    color: '#000',
    fontSize: h(2.5),
    //: fonts.semiBold,
    padding: h(1),
  },
  modal: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 25,
    borderRadius: 2,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  btnView: {
    backgroundColor: '#df396b',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: h(7),
    marginHorizontal: h(2),
    marginTop: h(5),
    borderColor: '#ddd',
    elevation: 5,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: h(2.3),
    //: fonts.bold,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  filter: {
    color: '#000',
    fontSize: h(2),
    fontWeight: '700',
    //: fonts.regularText,
  },
  filterText: {
    color: '#000',
    fontSize: h(2.5),
    fontWeight: '700',
    //: fonts.regularText,
  },
  reset: {
    color: '#000',
    opacity: 0.45,
    textAlign: 'right',
    fontSize: h(1.8),
    //: fonts.lightText,
  },
  male: {
    color: '#000',
    opacity: 0.45,
    justifyContent: 'center',
    fontSize: h(1.8),
    //: fonts.bold,
  },
  slidercontainer: {
    alignItems: 'center',
    marginVertical: h(-1.2),
  },
  sliderMarker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1.2,
    borderColor: '#e84d67',
  },
});
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default Home;
