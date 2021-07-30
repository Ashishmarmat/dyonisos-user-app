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
        alignItems: "center"
    },
    headerImage: {
        height: h(13),
        width: w(100),
        resizeMode: 'cover',
        alignSelf: "center",
    },
    headingText: {
        color: "#fff",
        fontSize: h(2.8),
        //: fonts.semiBold,
        alignSelf: "center",
        marginTop: h(5)
    },
    hostImage: {
        height: h(3.5),
        width: h(3.5),
        borderRadius: h(3.5 / 2),
        marginHorizontal: h(1),
        alignItems: "center",
        alignSelf: "center"
    },
    semiBoldText: {
        color: "#000",
        fontSize: h(2),
        //: fonts.semiBold,
    },
    CardView: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: h(2),
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.05,
        elevation: 3,
        minHeight: h(9),
        padding: h(1.5),
        marginVertical: h(1),
        marginHorizontal: h(2)
    },
    timeText: {
        color: '#000',
        fontSize: h(1.8),
        //: fonts.regularText,
    },
    userNameText: {
        color: '#000',
        fontSize: h(2.1),
        //: fonts.semiBold,
    },
    userDescText:{
        color: 'gray',
        fontSize: h(1.8),
        //: fonts.lightText,
        width:w(50)
    },
});