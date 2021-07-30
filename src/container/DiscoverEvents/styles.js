import { StyleSheet, Platform } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import fonts from '../../theme/fonts';
import { Right } from 'native-base';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: h(2.5),
  },
  headerView: {
    alignItems: 'center',
  },
  headerImage: {
    height: Platform.OS === 'ios' ? h(23) : h(25),
    width: '100%',
    resizeMode: 'cover',
    marginTop: h(2),
    alignSelf: 'center',
    borderTopLeftRadius: h(3),
    borderTopRightRadius: h(3),
  },
  cardView: {
    padding: h(2),
    height: h(43),
    width: '100%',
    alignSelf: 'center',
    borderBottomLeftRadius: h(3),
    borderBottomRightRadius: h(3),
    borderColor: '#ddd',
    elevation: 5,
    backgroundColor: '#fff',
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
  },
  normalText: {
    color: '#000',
    fontSize: h(1.9),
    //: fonts.regularText,
    alignSelf: 'center',
  },
  hostImage: {
    // height: Platform.OS === 'ios'? h(6): h(6),
    height: h(6),
    width: h(6),
    borderRadius: h(6 / 2),
    marginRight: h(1),
    alignItems: 'center',
    alignSelf: 'center',
  },
  semiBoldText: {
    color: '#000',
    fontSize: h(2),
    //: fonts.semiBold,
  },
  userNameText: {
    color: '#000',
    fontSize: h(1.9),
    //: fonts.semiBold,
    alignSelf: 'center',
  },
  locationIcon: {
    height: h(3),
    width: h(3),
    alignSelf: 'center',
  },
  onMapText: {
    color: '#df396b',
    fontSize: h(1.9),
    //: fonts.semiBold,
    alignSelf: 'center',
  },

  timeLightText: {
    color: 'gray',
    fontSize: h(1.6),
    //: fonts.lightText,
  },
  CashText: {
    color: '#000',
    fontSize: h(3.3),
    //: fonts.bold,
    marginVertical: h(1),
  },
  TagsView: {
    color: '#000',
    fontSize: h(2),
    //: fonts.semiBold,
  },
  desText: {
    color: 'gray',
    fontSize: h(1.7),
    //: fonts.lightText,
  },
  likeCancleIcon: {
    height: Platform.OS === 'ios' ? h(8) : h(9),
    width: Platform.OS === 'ios' ? h(8) : h(9),
    marginHorizontal: Platform.OS === 'ios' ? h(2) : h(3),
  },

    headerImage: {
        height: h(12),
        width: w(100),
        resizeMode: 'cover',
        alignSelf: "center",
    },
    bckArrow: {
        tintColor: "#fff",
        height: h(4),
        width: h(4),
        resizeMode: "contain",
    },
    headingText: {
        color: "#fff",
        fontSize: h(2.8),
        // fontFamily: fonts.semiBold,
        alignSelf: "center",
        alignItems: "center",
    },
    restaurantImage: {
        height: h(30),
        width: w(90),
        resizeMode: 'cover',
        marginTop: h(2),
        alignSelf: "center",
        // elevation: 2,
        borderColor: '#ddd',
        borderTopLeftRadius: h(2),
        borderTopRightRadius: h(2)
    },
    cardView: {
        padding: h(1),
        minHeight: h(30),
        // height: h(44),
        width: w(90),
        alignSelf: "center",
        borderBottomLeftRadius: h(2),
        borderBottomRightRadius: h(2),
        borderColor: '#ddd',
        elevation: 2,
        backgroundColor: "#fff",
        bottom:h(1)
    },
    headerBoldText: {
        color: "#000",
        fontSize: h(2.5),
        // fontFamily: fonts.bold,
    },
    lightText: {
        color: "gray",
        fontSize: h(1.7),
        // fontFamily: fonts.lightText,
    },
    normalText: {
        color: "#000",
        fontSize: h(1.9),
        // fontFamily: fonts.regularText,
        alignSelf: "center"
    },
    hostImage: {
        height: h(6),
        width: h(6),
        borderRadius: h(6 / 2),
        marginRight: h(1),
        alignItems: "center",
        alignSelf: "center"
    },
    semiBoldText: {
        color: "#000",
        fontSize: h(2),
        // fontFamily: fonts.semiBold,
    },
    userNameText: {
        color: "#000",
        fontSize: h(1.9),
        // fontFamily: fonts.semiBold,
        // alignSelf: "center"
    },
    locationIcon: {
        height: h(3.5),
        width: h(3.5),
        alignSelf: "center"
    },
    onMapText: {
        color: "#df396b",
        fontSize: h(1.8),
        // fontFamily: fonts.semiBold,
        alignSelf: "center"
    },
    timeLightText: {
        color: "gray",
        fontSize: h(1.7),
        // fontFamily: fonts.lightText,
    },
    desText: {
        color: "gray",
        fontSize: h(1.7),
        // fontFamily: fonts.lightText,
    }
});

