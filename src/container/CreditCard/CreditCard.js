import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    View,
    ScrollView,
    Text,
    StatusBar,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    BackHandler,
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
import RadioButton from 'radio-button-react-native';
import CircleCheckBox from 'react-native-circle-checkbox';
import AsyncStorage from '@react-native-community/async-storage';
import { initDB, MasconSiteData, massconSiteList } from '../../database';

let siteData = true;

class CreditCard extends React.Component {

    constructor(props) {
        super(props);
        siteData = true;
        this.state = {
            isLoading: false,
            userName: '',
            password: '',
            passwordShow: true,
            deviceToken: '',
            value: null,
            checked: false,

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

    render() {
 
        return (

            <TouchableWithoutFeedback
                onPress={() => { Keyboard.dismiss(); }}>
                <KeyboardAvoidingView style={styles.mainContainer}
                    behavior="position"
                    keyboardVerticalOffset={-150}>
                    <Loader loading={this.state.isLoading} />
                    <StatusBar />
                    <View style={styles.headerView}>
                        <Image
                            source={require('../../assets/assest/assest/splashscreen-01-01.png')}
                            style={styles.headerImage}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: h(-20),
                        marginLeft: h(1),
                        marginBottom: h(1)
                    }}>
                         <TouchableOpacity 
                         // onPress={() => this.props.navigation.goBack()}>
                               onPress={()=>this.props.navigation.navigate('Checkout')}>
                        <View style={{
                            flex: 2
                        }}>
                           
                           <Image
                                source={require('../../assets/assest/assest/icon-16.png')}
                                style={styles.bckArrow}
                            />
                        </View>
                        </TouchableOpacity>
                        
                        <View style={{
                            flex: 2
                        }}>
                            <Text style={styles.CheckOutText}>Credit Card</Text>
                      
                        </View>
                        <View style={{
                        flex:.2
                    }}></View>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.Cardnum}>1548 5289 6307 ****</Text>
                        <Text style={styles.boldText}>Card Holder</Text>
                        <Text style={styles.normalText}>Jane Smith</Text>
                    </View>
                    <View style={styles.cardDetailView}>
                        <Text style={styles.boldText}>Name</Text>
                        <Text style={styles.lightText}>Jane Smith</Text>
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                width: w(85),
                                marginTop: h(0.5),
                                marginBottom: h(1.5),
                                alignSelf: "center",
                                opacity: 0.20,
                            }}
                        />
                        <Text style={styles.boldText}>Card Number</Text>
                        <Text style={styles.lightText}>1548 5289 6307 ****</Text>
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                width: w(85),
                                marginTop: h(0.5),
                                marginBottom: h(1.5),
                                alignSelf: "center",
                                opacity: 0.20,
                            }}
                        />
                        <Text style={styles.boldText}>Exp Date</Text>
                        <Text style={styles.lightText}>DD/ MM/ YY</Text>
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                width: w(85),
                                marginTop: h(0.5),
                                marginBottom: h(1.5),
                                alignSelf: "center",
                                opacity: 0.20,
                            }}
                        />
                        <Text style={styles.boldText}>CVV</Text>
                        <Text style={styles.lightText}>****</Text>
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                width: w(85),
                                marginTop: h(0.5),
                                marginBottom: h(1.5),
                                alignSelf: "center",
                                opacity: 0.20,
                            }}
                        />
                        <Text style={styles.amount}>Amount</Text>
                        <Text style={styles.CashText}>$500/-</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.btnView}>
                        <Text
                            style={styles.btnTextStyle}>
                            Pay
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
