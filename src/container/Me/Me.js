import React from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ImageBackground,
} from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { w, h } from "../../utils/Dimensions";
import { TextSize } from "../../theme/TextSize";
import Loader from "../../constants/Loader";
import strings from "../../utilities/strings";
import fonts from "../../theme/fonts";
import { Container } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import { userprofileAPI } from "../../actions/UserProfile";

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userData: [],
    };
  }
  componentDidMount = async () => {
    var id = await AsyncStorage.getItem("userId");
    var username = await AsyncStorage.getItem("username");
    var aboutMe = await AsyncStorage.getItem("aboutMe");
    var dob = await AsyncStorage.getItem("dob");
    var gender = await AsyncStorage.getItem("gender");
    var image = await AsyncStorage.getItem("image");
    var contactNumber = await AsyncStorage.getItem("contactNumber");
    var address = await AsyncStorage.getItem("address");
    var interest = await AsyncStorage.getItem("interest");

    console.log("id", id);
    const data = {
      userId: id,
      username: username,
      gender: gender,
      aboutMe: aboutMe,
      image: image,
      dob: dob,
      contactNumber: contactNumber,
      address: address,
      interest: interest,
    };
    this.props.userProfileCall(data);
    console.log("data", data);
  };

  componentWillReceiveProps = async (nextProps) => {
    console.log("nextProps", nextProps);
    this.setState({
      isLoading: false,
    });
    if (nextProps.userprofile) {
      if (nextProps.userprofile.success === true) {
        this.setState({
          userData: nextProps.userprofile.datalist[0],
        });
      }
    }
  };
 
  bydefaultImage() {
    if (this.state.image === "") {
      return require("../../assets/assest/Stuff/managerPro.png");
    } else {
      return {
        uri: this.state.userData.image
      };
    }
  }
  render() {
    console.log("this.state.userData", this.state.userData);
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Loader loading={this.state.isLoading} />
        <StatusBar />
        <ImageBackground
          imageStyle={{
            borderBottomLeftRadius: h(2),
            borderBottomRightRadius: h(2),
          }}
          source={require("../../assets/assest/assest/splashscreen-01-01.png")}
          style={styles.headerImage}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 2,
              }}
            >
              <Text style={styles.headingText}>Me</Text>
            </View>
          </View>
        </ImageBackground>
        {this.state.userData != undefined && (
          <View style={styles.cardView1}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.photoImage}
                source={this.bydefaultImage()}
                resizeMode="cover"
              />
              <View
                style={{
                  flexDirection: "column",
                  marginTop: h(1),
                  marginLeft: h(2),
                }}
              >
                <Text style={styles.isha}>{this.state.userData.username}</Text>
                <Text style={styles.lightText}>
                  {this.state.userData.gender}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/assest/assest/icon-07.png")}
                style={styles.LocIcon}
              />
              <Text style={styles.university}>{this.state.userData.dob}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/assest/assest/phone-call.png")}
                style={styles.contactIcon}
              />
              <Text style={styles.university}>
                {this.state.userData.contactNumber}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/assest/assest/icon-14.png")}
                style={styles.LocIcon}
              />
              <Text style={styles.university}>
                {this.state.userData.address}
              </Text>
            </View>
            {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/assest/assest/icon-15.png")}
              style={styles.LocIcon}
            />
            <Text style={styles.university}>100 miles away</Text>
          </View> */}
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 0.8,
                marginVertical: h(1),
                width: w(84),
                alignSelf: "center",
                opacity: 0.3,
              }}
            />
            <View style={{ marginTop: h(1) }}>
              <Text style={styles.semiBoldText1}>About me</Text>

              <Text style={styles.paragraph}>
                {this.state.userData.aboutMe}
              </Text>
            </View>
            <Text style={styles.semiBoldText1}>Common interests</Text>

            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: 300 }}
            >
              {this.state.userData.interest != undefined &&
                this.state.userData.interest.map((intItem, intIndex) => (
                  <TouchableOpacity style={styles.interestbubble}>
                    <Text style={styles.bubbleText}>{intItem.interest}</Text>
                  </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.semiBoldText1}>All Photos (25)</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: h(1),
              }}
            >
              <View>
                <Image
                  source={require("../../assets/assest/Stuff/restaurant.jpg")}
                  style={styles.photoImage2}
                />
              </View>
              <ImageBackground
                imageStyle={{
                  height: h(18),
                  width: h(18),
                  borderRadius: h(2),
                  marginRight: h(2),
                }}
                source={require("../../assets/assest/Stuff/girl01.jpg")}
                style={styles.photoImage2}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/assest/assest/edit-01.png")}
                    style={styles.camera}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userprofile: state.userprofile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userProfileCall: (data) => dispatch(userprofileAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Me);
