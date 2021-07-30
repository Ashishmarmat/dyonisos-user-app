import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import fonts from '../../theme/fonts'
import { Right } from 'native-base';
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:h(2.5),
    },
    headerView: {
        alignItems: "center"
    },
    headerImage: {
        height: Platform.OS === 'ios'? h(66): h(68),
        width: w(90),
        marginTop: h(2),
        alignSelf: "center",
    },

    lightText: {
        color: "#fff",
        fontSize: h(1.7),
        //: fonts.lightText,
        paddingHorizontal: h(1)
    },
    infoIcon: {
        tintColor: "#fff",
        height: h(3.5),
        width: h(3.5),
        alignItems: "center",
        alignSelf: "center",
        marginLeft: h(1)
    },
    LocIcon: {
        tintColor: "#fff",
        height: h(3.5),
        width: h(3.5),
        alignItems: "center",
        alignSelf: "center",
        marginLeft: h(-1),
    },
    semiBoldText: {
        color: "#fff",
        fontSize: h(2.5),
        //: fonts.semiBold,
        paddingLeft: h(1),
        fontWeight: 'bold'
    },
    desText: {
        color: "#fff",
        fontSize: h(1.7),
        //: fonts.lightText,
        paddingHorizontal: h(1)
    },
    likeCancleIcon: {
        height: Platform.OS === 'ios' ? h(8) : h(9),
        width: Platform.OS === 'ios' ? h(8) : h(9),
        marginHorizontal: Platform.OS === 'ios' ? h(2) : h(3),
      },
});