import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { alleventsAPI } from "../../actions/AllEvents";
import { createsponserAPI } from "../../actions/CreateSponser";
import styles from "./styles";
import { w, h } from "../../utils/Dimensions";
import { TextSize } from "../../theme/TextSize";
import Loader from "../../constants/Loader";
import strings from "../../utilities/strings";
import fonts from "../../theme/fonts";
import Geolocation from "@react-native-community/geolocation";
import StarRating from "react-native-star-rating";
import AsyncStorage from "@react-native-community/async-storage";
import CardStack, { Card } from "react-native-card-stack-swiper";

class DiscoverEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLongitude: "unknown",
      currentLatitude: "unknown",
      isLoading: false,
      starCount: 3,
      eventList: [],
      userId: "",
      managerId: "",
      eventId: "",
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  componentDidMount = async (data) => {
    this.props.eventCall(data);

    var userId = await AsyncStorage.getItem("userId");
    var managerId = await AsyncStorage.getItem("managerId");
    var eventId = await AsyncStorage.getItem("eventId");
    console.log("userId", userId);
    console.log("managerId", managerId);
    console.log("eventId", eventId);

    this.setState({
      userId: userId,
      managerId: managerId,
      eventId: eventId,
    });
  };

  componentWillReceiveProps = async (nextProps) => {
    console.log("nextProps", nextProps);
    this.setState({
      isLoading: false,
    });
    if (nextProps.allevents) {
      if (nextProps.allevents.success === true) {
        this.setState({
          eventList: nextProps.allevents.data,
        });
      }
    }
    if (nextProps.createsponser) {
      if (nextProps.createsponser.success === true) {
        // Alert.alert("createsponser");
      }
    }
  };
  enableLocation = async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          isLoading: true,
        });
        fetch(
          `${"https://maps.googleapis.com/maps/api/geocode/json"}?latlng=` +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            `&key=${"AIzaSyCVUUPuzrsBEv6WvaeA7YMvGIjKNUeZXmU"}`,
          {
            method: "POST",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            this.setState({
              isLoading: false,
            });

            if (res.status === "OK") {
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
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  };

  likeEvent = () => {
    const payload = {
      // userId: userId,
      // managerId: managerId,
      // eventId: eventId,
      "userId": "5f9d003b75bf4b0bf4320c87",
      "managerId": "5f96c6cc9069b5bac153f1fd",
      "eventId": "5f9baca975bf4b0bf4320c76"
    };
    console.log("payload", payload);
    this.props.submitForm(payload);
    this.setState({
      isLoading: true,
    });
  };

  EventData = () => {
    // for (let item of this.state.eventList){
    //   console.log("item", item)
    // }
    Actions.RockingEvent()
  }
  render() {
    console.log("eventList", this.state.eventList);
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Loader loading={this.state.isLoading} />
        <StatusBar />
        <TouchableOpacity
          style={{ height: 530 }}
          // onPress={() => this.props.navigation.navigate("RockingEvent")}
          onPress={() => this.EventData()}
        >
          <CardStack
            style={styles.content}
            ref={(swiper) => {
              this.swiper = swiper;
            }}
            verticalSwipe={false}
            renderNoMoreCards={() => (
              <Text
                style={{
                  textAlign: "center",
                  top: 150,
                  fontWeight: "700",
                  fontSize: 18,
                  color: "gray",
                }}
              >
                {/* No more Events :( */}
              </Text>
            )}
            onSwipedRight={() => console.log("onSwipedRight")}
            onSwipedLeft={() => console.log("onSwipedLeft")}
          >
            {this.state.eventList != undefined &&
              this.state.eventList.map((eventItem, eventIndex) => (
                <View key={eventIndex}>
                  <Image
                    source={require("../../assets/assest/Stuff/restaurant.jpg")}
                    style={styles.restaurantImage}
                  />
                  <View style={styles.cardView}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.headerBoldText}>
                        {eventItem.eventName}
                      </Text>
                      <View style={{ height: h(3), width: h(12) }}>
                        <StarRating
                          disabled={true}
                          maxStars={5}
                          rating={this.state.starCount}
                          starSize={13}
                          emptyStarColor="#f2f2f2"
                          fullStarColor="#ffc107"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: h(1),
                      }}
                    >
                      <Text style={styles.lightText}>{eventItem.address}</Text>

                      <TouchableOpacity
                        onPress={() => this.enableLocation()}
                        style={{
                          flexDirection: "row",
                          backgroundColor: "#fce6ef",
                          borderRadius: h(10),
                          height: h(3.5),
                          width: w(21),
                          justifyContent: "center",
                          right: h(0),
                        }}
                      >
                        <Image
                          source={require("../../assets/assest/assest/icon-05.png")}
                          style={styles.locationIcon}
                        />
                        <Text style={styles.onMapText}>On Map</Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: h(1.5),
                      }}
                    >
                      <View>
                        <Text style={styles.semiBoldText}>Date</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: h(1),
                          }}
                        >
                          <Image
                            source={require("../../assets/assest/assest/icon-07.png")}
                            style={styles.locationIcon}
                          />
                          <Text style={styles.timeLightText}>
                            {eventItem.eventStartDate}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.semiBoldText}>Time</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: h(1),
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              backgroundColor: "#fce6ef",
                              borderRadius: h(10),
                              height: h(3),
                              width: w(20),
                              paddingLeft: h(1),
                              // justifyContent: 'center',
                            }}
                          >
                            <Image
                              source={require("../../assets/assest/assest/icon-06.png")}
                              style={{
                                height: h(3),
                                width: h(3),
                              }}
                            />
                            <Text style={styles.onMapText}>
                              {eventItem.eventStartTime}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginVertical: h(1),
                        alignItems: "center",
                      }}
                    ></View>
                    <Text style={styles.semiBoldText}>Description</Text>
                    <Text style={styles.desText}>{eventItem.eventDetails}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: h(2),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../assets/assest/Stuff/entrepreneur.jpg")}
                          style={styles.hostImage}
                        />
                        <View>
                          <Text style={styles.userNameText}>
                            {eventItem.managerName}
                          </Text>
                          <Text style={styles.lightText}>Creator</Text>
                        </View>
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{ flexDirection: "row", marginLeft: h(2) }}
                          >
                            <Image
                              source={require("../../assets/assest/Stuff/girl01.jpg")}
                              style={{
                                height: h(4.5),
                                width: h(4.5),
                                borderRadius: h(5),
                              }}
                            />
                            <Image
                              source={require("../../assets/assest/Stuff/fashion-1063100_1920.jpg")}
                              style={{
                                height: h(4.5),
                                width: h(4.5),
                                borderRadius: h(5),
                                marginLeft: h(-1),
                              }}
                            />
                            <Image
                              source={require("../../assets/assest/Stuff/entrepreneur.jpg")}
                              style={{
                                height: h(4.5),
                                width: h(4.5),
                                borderRadius: h(5),
                                marginLeft: h(-1),
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        height: h(3),
                        width: h(12),
                        marginTop: h(1),
                      }}
                    >
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.state.starCount}
                        starSize={13}
                        emptyStarColor="#f2f2f2"
                        fullStarColor="#ffc107"
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                      />
                    </View>
                  </View>
                </View>
              ))}
          </CardStack>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.swiper.swipeLeft();
            }}
            style={styles.likeCancleBtn}
          >
            <Image
              source={require("../../assets/assest/assest/icon-31.png")}
              style={styles.likeCancleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.likeEvent()}
            // console.log("Presssed")
            // style={styles.likeCancleBtn}
          >
            <Image
              source={require("../../assets/assest/assest/icon-32.png")}
              style={styles.likeCancleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allevents: state.allevents,
    createsponser: state.createsponser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    eventCall: (data) => dispatch(alleventsAPI(data)),
    submitForm: (data) => dispatch(createsponserAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverEvents);
