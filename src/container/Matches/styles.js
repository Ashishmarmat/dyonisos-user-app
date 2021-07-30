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
    fontSize: h(2.8),
    //: fonts.semiBold,
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  cardView: {
    padding: h(2),
    height: h(58),
    marginTop: h(4),
    marginHorizontal: h(2),
    borderRadius: h(2),
    borderColor: '#ddd',
    elevation: 10,
    backgroundColor: '#fff',
  },
  ImageView: {
    height: h(40),
    width: h(20),
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  lightText: {
    color: 'gray',
    fontSize: h(1.9),
    //: fonts.lightText,
    alignSelf: 'center',
  },
  semiBoldText: {
    color: '#000',
    fontSize: h(2.8),
    //: fonts.semiBold,
    alignSelf: 'center',
    marginVertical: h(2),
  },
  btnView: {
    backgroundColor: '#df396b',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    height: h(8),
    width: '90%',
    position: 'absolute',
    bottom: 0,
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
    fontWeight: 'bold',
  },
});
