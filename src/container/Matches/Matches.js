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
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loginAPI } from "../../actions/Login";
import { sidescreenAPI } from "../../actions/SideScreen";
import styles from './styles';
import { w, h } from '../../utils/Dimensions';
import { TextSize } from '../../theme/TextSize';
import Loader from '../../constants/Loader';
import strings from '../../utilities/strings'
import fonts from '../../theme/fonts'
import { Container } from 'native-base';
import StarRating from 'react-native-star-rating';
import AsyncStorage from '@react-native-community/async-storage';
import { initDB, MasconSiteData, massconSiteList } from '../../database';


let siteData = true;

class Matches extends React.Component {

    constructor(props) {
        super(props);
        siteData = true;
        this.state = {
            isLoading: false,
        };
    }
    componentWillMount = async () => {

    }

    componentWillReceiveProps = async (nextProps) => {

    }
    handleOnPress(value) {
        this.setState({ value: value })
        console.log("value", this.state.value)
    }
    oncheckvalue = () => {

    }
backNavigate=()=>{
        Actions.DrawerBar
       }
    render() {

        return (

            <SafeAreaView style={styles.mainContainer}>
                <Loader loading={this.state.isLoading} />
                <StatusBar />
                <ImageBackground
                    imageStyle={{
                        borderBottomLeftRadius: h(2),
                        borderBottomRightRadius: h(2)
                    }}
                    source={require('../../assets/assest/assest/splashscreen-01-01.png')}
                    style={styles.headerImage}>

                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        marginLeft: h(1),
                        marginBottom: h(1),
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Home')}
                        style={{
                            flex: 2
                        }}>
                            <Image
                                source={require('../../assets/assest/assest/icon-16.png')}
                                style={styles.bckArrow}
                            />
                        </TouchableOpacity>
                        <View style={{
                            flex: 2
                        }}>
                            <Text style={styles.headingText}>Matches</Text>
                        </View>
                        <View style={{
                            flex: 2
                        }}>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.cardView}>
                    <Image
                        source={require('../../assets/assest/assest/img-01.png')}
                        style={styles.ImageView}
                    />
                    <Text style={styles.semiBoldText}>No Matches</Text>

                    <Text style={styles.lightText}>No Matches found in your record</Text>
                </View>
                <TouchableOpacity
                    // onPress={() => this.doLogin()}
                    style={styles.btnView}>
                    <Text
                        style={styles.btnTextStyle}>
                        Start swapping
              </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
};


const mapStateToProps = (state) => {

    return {
        login: state.login,
        sidescreen: state.sidescreen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (data) => dispatch(loginAPI(data)),
        HomeScreenApi: (data) => dispatch(sidescreenAPI(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
