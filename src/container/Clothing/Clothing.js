import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity, FlatList, ScrollView, 
    BackHandler, SafeAreaView, Dimensions, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
//import { NavigationScreenProp } from 'react-navigation';
// import AsyncStorage from '@react-native-community/async-storage';
import color from '../../Constant/Colors';
// //@ts-ignore
//import ShadowView from 'react-native-simple-shadow-view'
// import customStyles from '../../Constants/Styles'
// import CustomInput from '../../Components/CustomInput';
const star = require('../../assets/assest/Stuff/restaurant.jpg')

export default class Clothing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 100,
            reviewsData: [
                {
                    "id": "1", text: 'M', name: "Mile Joy", rating: '4.6', img: star,
                    userDesc: 'Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli'
                },
                {
                    "id": "1", text: 'S', name: "Steve Williams", rating: '4.6', img: star,
                    userDesc: 'Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli'
                },

                {
                    "id": "1", text: 'C', name: "Clinton Roy", rating: '4.6', img: star,
                    userDesc: 'Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli'
                },
                {
                    "id": "1", text: 'C', name: "Clinton Roy", rating: '4.6', img: star,
                    userDesc: 'Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli'
                },
                {
                    "id": "1", text: 'C', name: "Clinton Roy", rating: '4.6', img: star,
                    userDesc: 'Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli'
                },
                {
                    "id": "1", text: 'C', name: "Clinton Roy", rating: '4.6', img: star,
                    userDesc: 'Lorem ipsum dolor sit amet, tetuer adipiscing eli.Lorem ipsum dolor sit amet, tetuer adipiscing eli'
                },
            ]

        };
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }


    render() {
        let width = Dimensions.get('screen').width - styles.totalMargin;
        return (
            <SafeAreaView>
                {/* <NavigationHeader
          title={''}
          haveShadow={false}
          leftBtnActn={() => this.props.navigation.goBack()}
          btnImage={Images.BACK_ARROW}
        /> */}
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
<View style={styles.mainVw}>
                    <View style={styles.headingView}>

                        <Image
                            source={require('../../assets/assest/Stuff/restaurant.jpg')}
                            style={styles.headerImage}
                        />
                        <Text style={styles.headingtxt}>Clothing & Fashion</Text>
                        <View style={{ flex: .1 }}></View>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/assest/Stuff/restaurant.jpg')}
                                style={styles.MapImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Rating}>
                        <Text style={styles.Reviews}>5.0</Text>
                        <View style={{ flex: .01 }}></View>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/assest/Stuff/restaurant.jpg')}
                                style={styles.StarImage}
                            />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/assest/Stuff/restaurant.jpg')}
                            style={styles.Share}
                        />
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={styles.percentText}>20% OFF</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.contentText}>. Get everything in half price</Text>
                        <Text style={styles.contentText}>. 20% - 40% on all items </Text>
                        <Text style={styles.contentText}>. Starting at $345</Text>
                    </View>
                    <View style={styles.Reviewsheading}>

                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/assest/Stuff/restaurant.jpg')}
                                style={styles.StarImage} />
                        </TouchableOpacity>
                        <View style={{ flex: .01 }}></View>
                        <Text style={styles.Reviews}>Reviews</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>

                    <FlatList
                        keyExtractor={(item, index) => item.id.toString()}
                        data={this.state.reviewsData}
                        extraData={this.state.reviewsData}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <View style={styles.circle}></View>
                                <View style={{ flexDirection: 'column', }}>
                                    <View style={{ marginLeft: -18 }}>
                                        <Text style={styles.text}>{item.text}</Text>
                                    </View>
                                    <View style={{ marginLeft:-17,marginTop:14}}>
                                    <Text style={styles.userDesc}>{item.userDesc}</Text>
</View>
                                </View>
                                <View style={{
                                    flexDirection: "row", flex: 1, justifyContent:'center',marginLeft: -300}}>
                                    <View style={{ paddingLeft:10}}>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ flex: 1 }}></View>
                                    <View style={{  }}>
                                        <Text>{item.rating}</Text>
                                    </View>
                                    <View style={{ flex: .2 ,justifyContent:'center'}}></View>
                                    <View style={{  }}>
                                    <Image source={item.img} style={styles.starRating} resizeMode='contain' />

                                    </View>
                                </View>
                                
                            </View>

                        )
                        } />
                        </View>
                         <TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'flex-end',backgroundColor:'red' }}>
                       <Text>Button</Text>
                    </View>
                    </TouchableOpacity>
                   </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};