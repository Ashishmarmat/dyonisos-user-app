import React from "react";
import { connect } from "react-redux";
import PropTypes, { array } from "prop-types";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { uploadImageApi } from "../../actions/UpdatePro";
import { updateprofileAPI } from "../../actions/UpdatePro";
import { w, h } from "../../utils/Dimensions";
import { TextSize } from "../../theme/TextSize";
import Loader from "../../constants/Loader";
import strings from "../../utilities/strings";
import fonts from "../../theme/fonts";
import styles from "./styles";
import ImagePicker from "react-native-image-picker";
import CheckBox from "react-native-check-box";
import DatePicker from "react-native-datepicker";
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
var SampleArray = [];
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      starCount: 3,
      resourcePath: {},
      image: "",
      token: "",
      fileName: "",
      username: "",
      aboutMe: "",
      id: "",
      email: "",
      mode: "date",
      date: new Date(1598051730000),
      dob: "",
      gender: "",
      address: "",
      interest: "",
      uiRender: false,
      SampleArray: [],
    };
  }
  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      BackHandler.addEventListener(
        'hardwareBackPress',
        function () {
          if (
            Actions.currentScene === 'SignUpForm' ||
            Actions.currentScene === '_SignUpForm'
          ) {
            Alert.alert(
              'Dyonisos',
              'Please complete your profile',
            );
            return true;
          } else {
            return false;
          }
        }.bind(this),
      );
    });
  }
  bydefaultImage() {
    if (this.state.image == "" || this.state.image == null) {
      return require("../../assets/assest/Stuff/managerPro.png");
    } else {
      return {
        uri: this.state.image,
      };
    }
  }
  componentWillMount = async () => {
    var id = await AsyncStorage.getItem("userId");
    var username = await AsyncStorage.getItem("username");
    var aboutMe = await AsyncStorage.getItem("aboutMe");
    var dob = await AsyncStorage.getItem("dob");
    var gender = await AsyncStorage.getItem("gender");
    var image = await AsyncStorage.getItem("image");
    var contactNumber = await AsyncStorage.getItem("contactNumber");
    var address = await AsyncStorage.getItem("address");
    var email = await AsyncStorage.getItem("email");

    console.log("email", email);
    console.log("id", id);

    this.setState({
      id: id,
      username: username,
      gender: gender,
      aboutMe: aboutMe,
      image: image,
      dob: dob,
      contactNumber: contactNumber,
      address: address,
      email: email,
    });
  };

  componentWillReceiveProps = async (nextProps) => {
    console.log("UpdateProfileNextProps", nextProps);
    this.setState({
      isLoading: false,
    });
    if (nextProps.UploadImage && this.state.upload == "upload") {
      if (nextProps.UploadImage) {
        const path = nextProps.UploadImage.fileName;
        const name = path && path.split("/");
        tempArray.push({ name: name[name.length - 1], path: path });
        this.setState(
          {
            fileName: tempArray,
          },
          () => {
            console.log("image", this.state.name);
          }
        );
      }
    }
    if (nextProps.updateprofile) {
      if (nextProps.updateprofile.success === true) {
        Alert.alert("Your profile updated successfully");
        this.props.navigation.navigate("Login");
      }
    }
  };
  // ----------------------------Image Picker----------------------------------------------------//
  chooseFile = () => {
    var options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = response;
        console.log("source", source);
        this.setState({ fileName: source.path });
        this.uploadImage(source);
      }
    });
  };
  uploadImage = async (imagevalue) => {
    var data = new FormData();
    data.append("photo", {
      uri: imagevalue.uri,
      type: imagevalue.type,
      name: imagevalue.fileName,
    });
    console.log("img_data", data);
    fetch(`http://138.68.103.248:3000/api/FileUpload`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res.success == "True") {
          this.setState(
            {
              image: res.file_data[0].filename,
            },
            () => {
              console.log("xxxxx", this.state.image);
            }
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  updateProfile = async () => {
    console.log("updateProfile click");
    if (this.state.username == "" || this.state.username == null) {
      Alert.alert("Please enter your Name");
    } else if (this.state.image == "" || this.state.image == null) {
      Alert.alert("Please upload your profile picture");
    } else if (this.state.aboutMe == "" || this.state.aboutMe == null) {
      Alert.alert("Please enter about you");
    } else if (
      this.state.contactNumber == "" ||
      this.state.contactNumber == null
    ) {
      Alert.alert("Please enter your contactNumber");
    } else if (this.state.address == "" || this.state.address == null) {
      Alert.alert("Please enter your address");
    } else if (this.state.gender == "" || this.state.gender == null) {
      Alert.alert("Please select your Gender");
    } else if (this.state.dob == "" || this.state.dob == null) {
      Alert.alert("Please enter your DOB");
    }
    // else if (this.state.interest == "" || this.state.interest == null) {
    //   Alert.alert("Please enter your Interest");
    // }
    else {
      let payload = {
        id: this.state.id,
        username: this.state.username,
        aboutMe: this.state.aboutMe,
        image: this.state.image,
        contactNumber: this.state.contactNumber,
        dob: this.state.dob,
        gender: this.state.gender,
        address: this.state.address,
        email: this.state.email,
        interest: SampleArray,
      };
      console.log("payload", payload);
      this.props.submitForm(payload);
      this.setState({
        isLoading: true,
      });
    }
  };

  toogleGender = (gender) => {
    this.setState({
      gender: gender,
    });
    console.log("gender:", gender);
  };

  onchangeDob = (date, value) => {
    console.log("value", value);
    console.log("date", date);
    let dob = moment(value).format("DD/MM/YYYY");

    this.setState({
      dob: dob,
    });
    console.log("dobb", dob);
  };

  onChangeInt = (text) => {
    this.setState({
      interest: text,
    });
  };

  pushArray = (interest) => {
    if (this.state.interest != "") {
      SampleArray.push({ interest: this.state.interest });
      this.setState({ interest: "" });
    } else {
      console.log("Not pushed");
    }
    if (this.state.uiRender == false) {
      this.setState({ uiRender: true });
    } else {
      this.setState({
        uiRender: false,
      });
    }
  };
  removeItem = (interest, i) => {
    SampleArray.splice(i,1)
    if (this.state.uiRender == false) {
      this.setState({ uiRender: true });
    } else {
      this.setState({
        uiRender: false,
      });
    }
    console.log("SampleArray", SampleArray);
  };
  render() {
    console.log("SampleArray", SampleArray);
    console.log("this.state.uiRender", this.state.uiRender);

    return (
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={-250}
            >
              <StatusBar />
              <ImageBackground
                imageStyle={{
                  borderBottomLeftRadius: h(3),
                  borderBottomRightRadius: h(3),
                }}
                source={require("../../assets/assest/assest/splashscreen-01-01.png")}
                style={styles.headerImage}
              >
                  <View>
                    <Text style={styles.headingText}>User profile</Text>
                  </View>
              </ImageBackground>
              <View style={{ padding: h(2.5) }}>
                <View style={styles.cardView}>
                  <ImageBackground
                    style={styles.userImage}
                    imageStyle={{
                      borderRadius: h(2),
                      borderWidth: h(0.2),
                      borderColor: "#cecece",
                    }}
                    source={this.bydefaultImage()}
                    resizeMode="cover"
                  >
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        top: h(9.3),
                        right: h(-2),
                      }}
                      onPress={() => this.chooseFile()}
                    >
                      <Image
                        style={{
                          height: h(4),
                          width: h(4),
                        }}
                        source={require("../../assets/assest/assest/edit-01.png")}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </ImageBackground>

                  <Text
                    style={{
                      color: "#df396b",
                      fontSize: h(2.2),
                      marginTop: h(2),
                      alignSelf: "center",
                      // fontFamily: fonts.semiBold,
                    }}
                  >
                    Upload Profile Photo
                  </Text>
                  <View
                    style={{
                      marginTop: h(0.5),
                    }}
                  >
                    <Text style={styles.boldText}>Name</Text>
                    <TextInput
                      style={styles.lightText}
                      multiline={true}
                      onChangeText={(username) =>
                        this.setState({ username: username })
                      }
                      value={this.state.username}
                      placeholder="Enter your name"
                    />
                  </View>
                  <View
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      width: w(85),
                      marginTop: h(0.5),
                      alignSelf: "center",
                      opacity: 0.4,
                    }}
                  />
                  <View
                    style={{
                      marginTop: h(0.5),
                    }}
                  >
                    <Text style={styles.boldText}>Gender</Text>
                    <View
                      style={{ flexDirection: "row", marginVertical: h(1) }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignSelf: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View style={{}}>
                          <CheckBox
                            checkBoxColor={"#e84d67"}
                            isChecked={this.state.gender === "male"}
                            onClick={() => this.toogleGender("male")}
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
                          flexDirection: "row",
                          alignSelf: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View style={{}}>
                          <CheckBox
                            checkBoxColor={"#e84d67"}
                            isChecked={this.state.gender === "female"}
                            onClick={() => this.toogleGender("female")}
                          />
                        </View>
                        <View style={{ flex: 10 }}>
                          <Text style={styles.male}>Female</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: h(0.5),
                    }}
                  >
                    <Text style={styles.boldText}>Date of birth</Text>
                    <DatePicker
                      style={{
                        width: w(40),
                        marginTop: h(1),
                        backgroundColor: "#fff",
                        borderRadius: h(1.5),
                        borderColor: "#ddd",
                        elevation: 1,
                      }}
                      date={this.state.dob}
                      mode="date"
                      placeholder="20/09/2020"
                      format="DD-MM-YYYY"
                      // minDate="2016-05-01"
                      // maxDate="2016-06-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: "absolute",
                          left: 0,
                          marginLeft: h(1),
                          height: h(3.5),
                          width: h(3.5),
                        },
                      }}
                      onDateChange={(date, value, dob) => {
                        {
                          this.setState({
                            dob: dob,
                          });
                        }
                        this.onchangeDob(date, value, dob);
                      }}
                      value={this.state.dob}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: h(1),
                    }}
                  >
                    <Text style={styles.boldText}>Address</Text>
                    <TextInput
                      style={styles.lightText}
                      multiline={true}
                      onChangeText={(address) =>
                        this.setState({ address: address })
                      }
                      value={this.state.address}
                      placeholder="Enter your Address"
                    />
                  </View>
                  <View
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      width: w(85),
                      marginTop: h(0.5),
                      alignSelf: "center",
                      opacity: 0.4,
                    }}
                  />
                  <View
                    style={{
                      marginTop: h(1),
                    }}
                  >
                    <Text style={styles.boldText}>Contact number</Text>
                    <TextInput
                      style={styles.lightText}
                      multiline={true}
                      keyboardType="numeric"
                      onChangeText={(contactNumber) =>
                        this.setState({ contactNumber: contactNumber })
                      }
                      value={this.state.contactNumber}
                      placeholder="Enter your Contact number"
                    />
                  </View>
                  <View
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      width: w(85),
                      marginTop: h(0.5),
                      alignSelf: "center",
                      opacity: 0.4,
                    }}
                  />
                  <View>
                    <Text style={styles.boldText}>About me</Text>
                    <TextInput
                      style={styles.lightText}
                      multiline={true}
                      onChangeText={(aboutMe) =>
                        this.setState({ aboutMe: aboutMe })
                      }
                      value={this.state.aboutMe}
                      placeholder="Enter About you"
                    />
                  </View>
                  <View
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      width: w(85),
                      marginTop: h(0.5),
                      alignSelf: "center",
                      opacity: 0.4,
                    }}
                  />
                  <View
                    style={{
                      marginTop: h(0.5),
                    }}
                  >
                    <Text style={styles.boldText}>Interests</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <TextInput
                        style={styles.lightText}
                        multiline={false}
                        onChangeText={(text) => this.onChangeInt(text)}
                        value={this.state.interest}
                        placeholder="Enter your interests"
                      />
                      <TouchableOpacity
                        onPress={() => this.pushArray(this.state.interest)}
                      >
                        <Image
                          style={{
                            height: h(4),
                            width: h(4),
                          }}
                          source={require("../../assets/assest/assest/icon-052-01.png")}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      width: w(85),
                      marginTop: h(0.5),
                      alignSelf: "center",
                      opacity: 0.4,
                    }}
                  />
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {SampleArray.map((item, i) => (
                    <View key={i}>
                      <View style={styles.interestbubble}>
                        <TouchableOpacity
                          onPress={() => this.removeItem(item.interest, i)}
                          style={{
                            position: "absolute",
                            height: h(2.4),
                            width: h(2.4),
                            top: -4,
                            right: -2,
                            backgroundColor: "#fff",
                            borderRadius: h(100),
                            borderWidth: h(0.05),
                          }}
                        >
                          <Text
                            style={{
                              color: "#df396b",
                              fontSize: h(1.6),
                              textAlign: "center",
                              alignSelf: "center",
                            }}
                          >
                            x
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.bubbleText}>{item.interest}</Text>
                      </View>
                    </View>
                  ))}
                </View>
                <TouchableOpacity
                  onPress={() => this.updateProfile()}
                  style={styles.btnView}
                >
                  <Text style={styles.btnTextStyle}>Update profile</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    UploadImage: state.UploadImage,
    updateprofile: state.updateprofile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitFormImage: (data) => dispatch(uploadImageApi(data)),
    submitForm: (data) => dispatch(updateprofileAPI(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
