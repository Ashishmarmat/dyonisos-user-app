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

class Checkout extends React.Component {

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
            selectedTab: '',
            CreditCard: '',
            paypal: '',
            debitCard: ''

        };
    }

    componentWillMount = async () => {

    }

    componentWillReceiveProps = async (nextProps) => {

    }

    goToCreditCard = () => {
        Actions.CreditCard()
    }
    handleOnPress(value) {
        this.setState({ value: value })
        console.log("value", this.state.value)
    }
    oncheckvalue = () => {

    }
    backNavigate = () => {
        Actions.RockingEvent
    }
    tabChange = (type) => {
        this.setState({ selectedTab: type })
       
    }
    CreditCard = () => {
        this.setState({ CreditCard: !this.state.CreditCard })
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
                        marginTop: h(-13),
                        marginLeft: h(1),
                        marginBottom: h(1)
                    }}>
                        <TouchableOpacity
                            // onPress={() => this.props.navigation.goBack()}>
                            onPress={() => this.props.navigation.navigate('RockingEvent')}>
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
                            <Text style={styles.CheckOutText}>Checkout</Text>
                        </View>

                        <View style={{
                            flex: .2
                        }}></View>

                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.boldText}>Choose Payment Method</Text>
                        <Text style={styles.lightText}>Please choose any one of the following Payment method to proceed.</Text>
                    </View>

                    <TouchableOpacity
                        // onPress={() => this.goToCreditCard()}

                        onPress={() => this.props.navigation.navigate('CreditCard')}
                        style={styles.optionCardView}>
                        <View style={{ flexDirection: "row" }}>
                            {/* <Image
                                source={require('../../assets/assest/assest/icon-08.png')}
                                style={styles.ActivityIconView}
                            /> */}
                            <TouchableOpacity onPress={() => this.tabChange('CreditCard')}>
                                {
                                    this.state.selectedTab === 'CreditCard' ?
                                        <Image
                                            source={require('../../assets/assest/assest/icon-08.png')}
                                            style={styles.ActivityIconView} />
                                        : <Image
                                            source={require('../../assets/assest/assest/icon-09.png')}
                                            style={styles.ActivityIconView}
                                        />
                                }

                            </TouchableOpacity>

                            <Text style={styles.normalText}>Credit card</Text>
                        </View>
                        <Image
                            source={require('../../assets/assest/Stuff/MasterCard_Logo.png')}
                            style={styles.masterCardIcon}
                        />
                        {/* </View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionCardView}>
                        <View style={{ flexDirection: "row" }}>
                            {/* <Image
                            source={require('../../assets/assest/assest/icon-09.png')}
                            style={styles.ActivityIconView}
                        /> */}
                            <TouchableOpacity onPress={() => this.tabChange('debitCard')}>
                                {
                                    this.state.selectedTab === 'debitCard' ?
                                        <Image
                                            source={require('../../assets/assest/assest/icon-08.png')}
                                            style={styles.ActivityIconView} />
                                        : <Image
                                            source={require('../../assets/assest/assest/icon-09.png')}
                                            style={styles.ActivityIconView}
                                        />
                                }

                            </TouchableOpacity>
                            <Text style={styles.normalText}>Debit card</Text>
                        </View>
                        <Image
                            source={require('../../assets/assest/Stuff/MasterCard_Logo.png')}
                            style={styles.masterCardIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() =>  Actions.PaypalPayment({amount:10})} style={styles.optionCardView}>
                        <View style={{ flexDirection: "row" }}>
                            {/* <Image
                            source={require('../../assets/assest/assest/icon-09.png')}
                            style={styles.ActivityIconView}
                        /> */}
                            <TouchableOpacity>
                                {
                                    this.state.selectedTab === 'paypal' ?
                                        <Image
                                            source={require('../../assets/assest/assest/icon-08.png')}
                                            style={styles.ActivityIconView} />
                                        : <Image
                                            source={require('../../assets/assest/assest/icon-09.png')}
                                            style={styles.ActivityIconView}
                                        />
                                }

                            </TouchableOpacity>
                            <Text style={styles.normalText}>Paypal</Text>
                        </View>
                        <Image
                            source={require('../../assets/assest/Stuff/paypallogo.png')}
                            style={styles.masterCardIcon}></Image>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback >
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
