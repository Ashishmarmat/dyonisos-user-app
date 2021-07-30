import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  SafeAreaView,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { meetpeopleAPI } from "../../actions/MeetPeople";
import styles from "./styles";
import { w, h } from "../../utils/Dimensions";
import { TextSize } from "../../theme/TextSize";
import Loader from "../../constants/Loader";
import strings from "../../utilities/strings";
import fonts from "../../theme/fonts";
import { Container } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import CardStack, { Card } from "react-native-card-stack-swiper";

class MeetPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userList: [],
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  componentDidMount = async (data) => {
    this.props.userListCall(data);
  };

  componentWillReceiveProps = async (nextProps) => {
    console.log("nextProps", nextProps);
    this.setState({
      isLoading: false,
    });
    if (nextProps.meetpeople) {
      if (nextProps.meetpeople.success === true) {
        this.setState({
          userList: nextProps.meetpeople.datalist,
        });
      }
    }
  };

  handleOnPress(value) {
    this.setState({ value: value });
    console.log("value", this.state.value);
  }
  render() {
    console.log("userList", this.state.userList);
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Loader loading={this.state.isLoading} />
        <StatusBar />
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
                {/* No more Matches :( */}
              </Text>
            )}
          >
            {this.state.userList != undefined &&
              this.state.userList.map((userItem, userIndex) => (
                <View key={userIndex}>
        <TouchableOpacity onPress={Actions.PeopleList}>
          <View style={styles.headerView}>
            <ImageBackground
              source={require("../../assets/assest/Stuff/girl01.jpg")}
              // source={userItem.username}
              style={styles.headerImage}
              imageStyle={{
                borderRadius: h(3),
              }}
              resizeMode="cover"
              borderRadius
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginVertical: h(0.8),
                  padding: h(1),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.semiBoldText}>{userItem.username}</Text>
                  <Image
                    source={require("../../assets/assest/assest/icon-10.png")}
                    style={styles.infoIcon}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: h(1),
                  }}
                >
                  <Image
                    source={require("../../assets/assest/assest/icon-11.png")}
                    style={styles.LocIcon}
                  />
                  <Text style={styles.lightText}>{userItem.address}</Text>
                </View>
                <Text style={styles.desText}>
                {userItem.aboutMe}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        </View>
              ))}
          </CardStack>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // marginTop: Platform.OS === "ios" ? h(3) : h(2),
            top: Platform.OS === "ios" ? 200 : h(68)
            ,
          }}
        >
          <TouchableOpacity 
          onPress={ () => { this.swiper.swipeLeft() }}
          style={styles.likeCancleBtn}>
            <Image
              source={require("../../assets/assest/assest/icon-31.png")}
              style={styles.likeCancleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={ () => { this.swiper.swipeRight() }}
          style={styles.likeCancleBtn}>
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
    meetpeople: state.meetpeople,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userListCall: (data) => dispatch(meetpeopleAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetPeople);
