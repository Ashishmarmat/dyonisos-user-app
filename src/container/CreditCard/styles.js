import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';
import fonts from '../../theme/fonts';
import {Right} from 'native-base';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },

  headerView: {
    alignItems: 'center',
  },
  headerImage: {
    height: h(38),
    width: w(100),
    resizeMode: 'cover',
    marginTop: h(-12),
    alignSelf: 'center',
    borderRadius: h(5),
  },
  bckArrow: {
    tintColor: '#fff',
    height: h(4),
    width: h(4),
    resizeMode: 'contain',
  },
  CheckOutText: {
    color: '#fff',
    fontSize: h(3),
    //: fonts.semiBold,
    alignSelf: 'center',
    alignItems: 'center',
  },
  cardView: {
    padding: h(2),
    height: h(22),
    marginTop: h(3),
    marginHorizontal: h(2),
    marginBottom: h(1),
    borderRadius: 15,
    borderColor: '#ddd',
    elevation: 10,
    backgroundColor: '#fff',
  },
  Cardnum: {
    color: '#000',
    fontSize: h(3),
    //: fonts.mediumText,
    textAlign: 'center',
    marginVertical: h(4),
  },

  boldText: {
    color: '#000',
    fontSize: h(1.8),
    //: fonts.semiBold,
  },
  lightText: {
    color: 'gray',
    fontSize: h(1.8),
    //: fonts.lightText,
    marginTop: h(1),
  },
  normalText: {
    color: '#000',
    fontSize: h(1.8),
    //: fonts.regularText,
    marginTop: h(1),
  },
  cardDetailView: {
    padding: h(2),
    height: h(45),
    marginVertical: h(1),
    marginHorizontal: h(2),
    borderRadius: 15,
    borderColor: '#ddd',
    elevation: 10,
    backgroundColor: '#fff',
  },
  amount: {
    color: '#000',
    fontSize: h(1.8),
    //: fonts.semiBold,
    marginTop: h(1),
  },
  CashText: {
    color: '#000',
    fontSize: h(3),
    //: fonts.bold,
    marginVertical: h(1),
  },
  btnView: {
    backgroundColor: '#df396b',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: h(7),
    marginHorizontal: h(2),
    marginVertical: h(1),
    borderColor: '#ddd',
    elevation: 5,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: h(2.3),
    //: fonts.bold,
    alignSelf: 'center',
  },
});
