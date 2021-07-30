import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';
import fonts from '../../theme/fonts';
import {Right} from 'native-base';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f7f6fb',
  },

  headerView: {
    alignItems: 'center',
  },
  headerImage: {
    height: h(12),
    width: w(100),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  bckArrow: {
    tintColor: '#fff',
    height: h(4),
    width: h(4),
    resizeMode: 'contain',
  },
  headingText: {
    color: '#fff',
    fontSize: h(3),
    //: fonts.semiBold,
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  cardView: {
    padding: h(2),
    height: h(40),
    marginTop: h(2),
    marginHorizontal: h(2),
    borderRadius: h(2),
    borderColor: '#ddd',
    elevation: 10,
    backgroundColor: '#fff',
  },
  barCodeView: {
    padding: h(2),
    height: h(30),
    marginTop: h(3),
    marginHorizontal: h(2),
    borderRadius: h(2),
    borderColor: '#ddd',
    elevation: 5,
    backgroundColor: '#fff',
  },
  BarCodeImage: {
    tintColor: '#000',
    height: h(18),
    width: h(20),
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  headerBoldText: {
    color: '#000',
    fontSize: h(2.5),
    //: fonts.semiBold,
  },
  lightText: {
    color: 'gray',
    fontSize: h(1.7),
    //: fonts.lightText,
    marginTop: h(1),
  },
  normalText: {
    color: '#000',
    fontSize: h(1.9),
    //: fonts.regularText,
    alignSelf: 'center',
  },
  hostImage: {
    height: h(3.5),
    width: h(3.5),
    borderRadius: h(3.5 / 2),
    marginHorizontal: h(1),
    alignItems: 'center',
    alignSelf: 'center',
  },
  semiBoldText: {
    color: '#000',
    fontSize: h(2),
    //: fonts.semiBold,
    paddingLeft: h(1),
  },
  userNameText: {
    color: '#df396b',
    fontSize: h(1.9),
    //: fonts.regularText,
    alignSelf: 'center',
  },
  locationIcon: {
    height: h(3.5),
    width: h(3.5),
    alignSelf: 'center',
  },
  onMapText: {
    color: '#df396b',
    fontSize: h(1.9),
    //: fonts.semiBold,
    alignSelf: 'center',
  },
  cardDetailView: {
    padding: h(1),
    height: h(11.5),
    marginVertical: h(1),
    borderRadius: 15,
    borderColor: '#ddd',
    elevation: 10,
    backgroundColor: '#f7f6fb',
  },
  timeLightText: {
    color: 'gray',
    fontSize: h(1.6),
    //: fonts.lightText,
    paddingLeft: h(1),
  },
  CashText: {
    color: '#000',
    fontSize: h(3.5),
    //: fonts.bold,
    marginVertical: h(1),
    fontWeight: 'bold',
  },
  barDesText: {
    color: 'gray',
    fontSize: h(1.7),
    //: fonts.lightText,
    marginTop: h(1),
    textAlign: 'center',
  },
});
