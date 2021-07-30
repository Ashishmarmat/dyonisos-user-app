import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import fonts from '../../theme/fonts';
import { Right } from 'native-base';
export default StyleSheet.create({
  maincontainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  menuIcon: {
    tintColor: '#fff',
    height: h(3.5),
    width: h(3.5),
  },
  headerImage: {
    height: h(18),
    width: w(100),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  headingText: {
    color: '#fff',
    fontSize: h(2.8),
    marginTop:h(4),
    alignSelf:'center'
    //: fonts.semiBold,
    // padding: h(1),
  },
  cardView: {
    marginTop: h(-8),
    padding: h(2),
    backgroundColor: '#fff',
    minHeight: h(40),
    borderRadius: h(2),
    width: '100%',
    alignContent: 'center',
  },
  userImage: {
    height: h(12),
    width: h(12),
    alignSelf: 'center',
  },
  boldText: {
    color: '#000',
    fontSize: h(2),
    marginTop:h(1),
    //: fonts.semiBold,
  },
  lightText: {
    color: 'grey',
    fontSize: h(1.9),
    //: fonts.semiBold,
    opacity: 0.7,
    marginVertical: Platform.OS === 'ios' ? h(0) : h(-2),
    // marginTop: h(0.5),
  },
  lightTextBio: {
    color: 'grey',
    fontSize: h(1.9),
    //: fonts.semiBold,
    opacity: 0.7,
    // marginTop: h(-1),
    marginBottom:h(1)
  },
  btnView: {
    marginTop:h(2),
    backgroundColor: '#df396b',
    borderRadius: h(3),
    alignSelf: 'center',
    justifyContent: 'center',
    height: h(8),
    width: '100%',
    marginHorizontal: h(2),
    borderColor: '#ddd',
    elevation: 5,
    // marginVertical:h(1)

  },
  btnTextStyle: {
    color: '#fff',
    fontSize: h(2.2),
    //: fonts.bold,
    alignSelf: 'center',
  },
  eyeIcon: {
    tintColor: "grey",
    height: h(3),
    width: h(3),
    backgroundColor: "#fff",
    resizeMode: "contain",
    marginRight: h(1)
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
  interestbubble:{
    marginVertical:h(1),
    paddingVertical:h(1),
    paddingHorizontal:h(2),
    backgroundColor: '#df396b',
    borderRadius: h(3),
    alignSelf: 'flex-start',
    minHeight: h(4),
    minWidth:h(10),
    borderColor: '#ddd',
    elevation: 5,
    marginHorizontal:h(1),
  },
  bubbleText:{
    color: '#fff',
    fontSize: h(1.8),
    //: fonts.bold,
    alignSelf:'center',
    top:-2
  }
});
