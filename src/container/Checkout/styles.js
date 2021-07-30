import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import fonts from '../../theme/fonts'
import { Right } from 'native-base';
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5F9FC",
    },

    headerView: {
        alignItems: "center"
    },
    headerImage: {
        height: h(32),
        width: w(100),
        resizeMode: 'cover',
        marginTop: h(-12),
        alignSelf: "center",
        borderRadius: h(5)
    },
    bckArrow: {
        tintColor: "#fff",
        height: h(4),
        width: h(4),
        resizeMode: "contain",
    },
    CheckOutText: {
        color: "#fff",
        fontSize: h(3),
        //: fonts.semiBold,
        alignSelf: "center",
        alignItems: "center",
    },
    cardView: {
        padding: h(0.8),
        height: h(15),
        marginTop: h(2),
        marginHorizontal:h(2),
        marginBottom:h(1),
        borderRadius: 15,
        borderColor: '#ddd',
        elevation: 10,
        backgroundColor: "#fff",
    },
    lightText: {
        color: "#000",
        fontSize: h(2),
        //: fonts.lightText,
        paddingHorizontal: h(1),
    },
    boldText: {
        color: "#000",
        fontSize: h(2.5),
        //: fonts.semiBold,
        marginVertical:h(.5),
        paddingHorizontal: h(1),
    },
    normalText: {
        color: "#000",
        fontSize: h(2),
        //: fonts.regularText,
    },
    optionCardView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: h(0.8),
        height: h(9),
        marginVertical: h(1),
        marginHorizontal: h(2),
        borderRadius: 15,
        borderColor: '#ddd',
        elevation: 10,
        backgroundColor: "#fff",
    },
    ActivityIconView: {
        height: h(3),
        width: h(3),
        marginHorizontal: h(1),
        resizeMode: "contain",
    },
    masterCardIcon: {
        height: h(7),
        width: h(7),
        marginHorizontal: h(1),
        resizeMode: "contain",
    }
});