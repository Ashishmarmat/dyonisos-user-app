//@ts-ignore
import ScaleSheet from 'react-native-scalesheet';
import color from '../../Constant/Colors';
import font from '../../Constant/Font';
import {Platform} from 'react-native';

export const styles = ScaleSheet.create({
  totalMargin: 40,

  mainVw: {
    flex: 1,
    padding: 22,
    //  backgroundColor: 'yellow'
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImage: {
    height: 25,
    width: 37,
    resizeMode: 'contain',
  },
  headingtxt: {
    fontSize: 21,
    textAlign: 'center',
    color: color.BLACK,
    //: font.FONT_REGULAR,
  },
  MapImage: {
    height: 18,
    width: 28,
    resizeMode: 'contain',
  },
  Rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 14,
  },
  Reviews: {
    fontSize: 12,
    textAlign: 'center',
    color: color.BLACK,
    //: font.FONT_REGULAR,
  },
  StarImage: {
    height: 8,
    width: 18,
    resizeMode: 'contain',
  },
  Share: {
    height: 18,
    width: 28,
    resizeMode: 'contain',
    marginTop: -8,
    alignSelf: 'flex-end',
  },
  percentText: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: -6,
    color: color.YELLOW,
    //: font.FONT_SEMI_BOLD,
    marginBottom: 5,
  },
  //   dot:{
  //     fontSize:13,
  //     textAlign:'center',
  //     alignItems:'center',
  //     marginBottom:10,
  //     backgroundColor:'red',
  //     color: color.BLACK,
  //     //: font.FONT_REGULAR,
  //   },
  contentText: {
    fontSize: 14,
    marginBottom: 10,
    color: color.BLACK,
    //: font.FONT_REGULAR,
  },
  Reviewsheading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: 'red',
  },
  text: {
    color: '#fff',
    //: font.FONT_REGULAR,
  },
  userDesc: {
    paddingLeft: -25,
    color: color.BLACK,
    //: font.FONT_REGULAR,
  },
  name: {
    marginLeft: 88,
  },
  starRating: {
    alignItems: 'center',
    width: 18,
    height: 10,
  },
  scrollVw: {
    height: '100%',
    position: 'absolute',
    top: 200,
  },
  paddingVw: {
    height: 250,
  },
  vwCntnr: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    marginBottom: 40,
  },
  selectionVw: {
    marginTop: 5,
    width: 45,
  },
  signupTxtCntnr: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  inputCntnr: {
    marginLeft: 20,
    marginRight: 20,
  },
  mobileVwCntnr: {
    height: 40,
    marginTop: Platform.OS === 'ios' ? 20 : 25,
    borderColor: color.WHITE_GREY,
    flexDirection: 'row',
  },
  signInBtn: {
    height: 40,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotBtn: {
    height: 40,
    paddingRight: 20,
    marginBottom: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  termsBtn: {
    height: 40,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  signUpBtn: {
    width: '50%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 50,
  },
  nextBtn: {
    height: 46,
    width: 46,
    borderRadius: 56,
    bottom: -23,
    zIndex: 100,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  signInTxt: {
    fontSize: 16,
    textAlign: 'center',
    color: color.YELLOW,
    //: font.FONT_ROBOTO_REGULAR,
  },
  forgotTxt: {
    fontSize: 13,
    textAlign: 'right',
    color: color.DARK_BLUE,
    //: font.FONT_ROBOTO_REGULAR,
  },
  termsTxt: {
    width: '100%',
    fontSize: 10,
    textAlign: 'center',
    color: '#949494',
    //: font.FONT_REGULAR,
  },
  termsUnderTxt: {
    //: font.FONT_ROBOTO_MEDIUM,
    textDecorationLine: 'underline',
  },
  ccTxt: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 15,
    color: color.GREY,
    //: font.FONT_ROBOTO_REGULAR,
  },
  errorTxt: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 0,
    marginRight: 15,
    color: 'red',
    //: font.FONT_ROBOTO_LIGHT,
  },
  mobileInput: {
    flex: 1,
    height: 40,
    //: font.FONT_ROBOTO_REGULAR,
    fontSize: 14,
    paddingLeft: 15,
    padingRight: 15,
  },

  //Images Styles
  bgImage: {
    height: 260,
  },
  bgOpaqueImg: {
    height: 260,
    position: 'absolute',
  },
  socialImg: {
    height: 20,
    width: '25%',
    resizeMode: 'contain',
  },
  nextBtnImg: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  txtFldImg: {
    height: 15,
    width: 15,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain',
  },
});
