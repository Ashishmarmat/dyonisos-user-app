import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import fonts from '../../theme/fonts'
import { Right } from 'native-base';
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f7f6fb",
    },
    headerView: {
       // alignItems: "center"
    },
    headerImage: {
       // padding: h(1),
        height: h(40),
        width: w(100),
       /// marginTop: h(3),
        alignSelf: "center",
    },
    university:{
        color: "#000",
        fontSize: h(2),
        fontWeight:'700',
        //: fonts.regularText,
        padding: h(1),
        opacity:.5
    },
   
    infoIcon: {
        tintColor: "#fff",
        height: h(3.5),
        width: h(3.5),
        alignItems: "center",
        alignSelf: "center",
      //  marginLeft: h(1)
    },
    LocIcon: {
       // tintColor: "#fff",
        height: h(3.5),
        width: h(3.5),
        alignItems: "center",
        alignSelf: "center",
       // marginLeft: h(-1),
    },
    semiBoldText: {
        color: "#fff",
        fontSize: h(2.5),
        //: fonts.semiBold,
        marginHorizontal:h(5),
        fontWeight:'bold'
    },
    paragraph: {
        color: "#000",
        fontSize: h(1.9),
        //: fonts.regularText,
        paddingBottom: h(1),
        opacity:.5
    },
    cardView1: {  
        marginTop: h(10),
        padding: h(2),
        height: h(59),
        width: w(95),
        alignSelf: "center",
        borderRadius:h(3),
        borderColor: '#ddd',
        elevation: 5,
        backgroundColor: "#fff",
    },
    bckArrow: {
        tintColor: "#fff",
        height: h(4),
        width: h(4),
        resizeMode: "contain",
      // backgroundColor:'red'
    },
    bckArrow1:{

        tintColor: "#fff",
        height: h(4),
        width: h(4),
        resizeMode: "contain",
    },
    profiledot:{
        color: "#fff",
        fontSize: h(7),
        textAlign:"center",
        marginRight:h(2)
    },
    block:{
        //tintColor: "#fff",
        height: h(2.5),
        width: h(2.5),
        justifyContent:'center',
        resizeMode: "contain",
    },
    semiBoldText:{
        color: "#000",
        fontSize: h(2),
        //: fonts.semiBold,
    },
    headerImage1: {
        height: h(35),
        width: w(100),
        resizeMode: 'contain',
       // marginTop: h(-12),
        alignSelf: "center",
        borderRadius: h(5)
    },
    headerImage: {
        height: h(30),
        width: w(96),
        resizeMode: 'cover',
        marginTop: h(3),
        alignSelf: "center",
        borderTopLeftRadius: h(3),
        borderTopRightRadius: h(3)
    },
    bckArrow: {
        tintColor: "#fff",
        height: h(4),
        width: h(4),
        marginTop:h(-8),
        resizeMode: "contain",
    },
    headingText: {
        backgroundColor:'red',
        color: "#fff",
        fontSize: h(5),
        marginTop:h(-11),
        textAlign:"center",
        //: fonts.semiBold,
        alignSelf: "center",
        alignItems: "center",
    },
    cardView: {
        padding: h(2),
        height: h(45),
        width: w(95),
        alignSelf: "center",
        borderBottomLeftRadius: h(3),
        borderBottomRightRadius: h(3),
        borderColor: '#ddd',
        elevation: 5,
        backgroundColor: "#fff",
    },
    headerBoldText: {
        color: "#000",
        fontSize: h(2.5),
        //: fonts.semiBold,
    },
    lightText: {
        color: "gray",
        fontSize: h(1.7),
        //: fonts.lightText,
        marginTop: h(1)
    },
    normalText: {
        color: "#000",
        fontSize: h(1.9),
        //: fonts.regularText,
        alignSelf: "center"
    },
    hostImage: {
        height: h(3.5),
        width: h(3.5),
        borderRadius: h(3.5 / 2),
        marginHorizontal: h(1),
        alignItems: "center",
        alignSelf:"center"
    },
    semiBoldText1:{
        color: "#000",
        fontSize: h(2.3),
        marginHorizontal:h(2.5),
        //: fonts.semiBold,
        fontWeight:'700'
    },
    userNameText: {
        color: "#000",
        marginTop:h(-4),
        fontSize: h(2.2),
        //: fonts.regularText,
    },
    locationIcon: {
        height: h(3.5),
        width: h(3.5),
        alignSelf: "center"
    },
    onMapText: {
        color: "#df396b",
        fontSize: h(1.9),
        //: fonts.semiBold,
        alignSelf: "center"
    },
    cardDetailView: {
        padding: h(1),
        height: h(11.5),
        marginVertical: h(1),
        borderRadius: 15,
        borderColor: '#ddd',
        elevation: 10,
        backgroundColor: "#f7f6fb",
    },
    timeLightText:{
        color: "gray",
        fontSize: h(1.6),
        //: fonts.lightText,
    },
    CashText: {
        color: "#000",
        fontSize: h(3.3),
        //: fonts.bold,
        marginVertical: h(1)
    },
    TagsView:{
        color: "#000",
        fontSize: h(2),
        //: fonts.semiBold,
        padding:h(2)
    },
    EventbtnView: {
        backgroundColor: '#df396b',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: h(6),
        width:w(29),
        marginHorizontal: h(1),
        borderColor: '#ddd',
        elevation: 5,
    },
    EventbtnTextStyle: {
        color: '#fff',
        fontSize: h(2),
        //: fonts.regularText,
        alignSelf: 'center',
    },
    desText:{
        color: "gray",
        fontSize: h(1.7),
        //: fonts.lightText,
        marginHorizontal:h(2),
        marginTop:h(-1.5)
    },
    ReservebtnView: {
        backgroundColor: '#df396b',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        height: h(8),
        width:w(94),
        marginHorizontal: h(1),
        marginVertical:h(2),
        borderColor: '#ddd',
        elevation: 5,
    },
    ReservebtnTextStyle: {
        color: '#fff',
        fontSize: h(2.2),
        //: fonts.semiBold,
        alignSelf: 'center',
    },
    photoImage: {
       // margin:h(5),
        height: h(30),
        width: w(45),
        resizeMode: 'cover',
       // marginTop: h(3),
        //alignSelf: "center",
        borderRadius:h(2)
    },
    camera:{
        height: h(10),
        width: w(15),
        resizeMode: 'cover',
        marginHorizontal:h(16)
    },
    expand:{
        height: h(8),
        width: h(8),
        resizeMode: 'contain',
        alignSelf:"flex-end",
        bottom:h(2.5),
        left:h(2.5)
    }
});