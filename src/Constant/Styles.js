//@ts-ignore
import ScaleSheet from 'react-native-scalesheet';
import color from './Colors';
import font from './Font';

const styles = ScaleSheet.create({

  //Text Styles
  viewTitleTxt: {
    fontSize: 22,
    marginBottom: 20,
    marginLeft: 15,
    color: color.DARK_BLUE,
    //: font.FONT_ROBOTO_MEDIUM,
    textAlign: 'left',
  },
  
 //Shadow
  bottomShadow: {
    shadowColor: color.LIGHTER_GREY,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  shadow: {
    shadowColor: color.GREY,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  lightShadow: {
    shadowColor: color.VERY_LIGHT_GREY,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },
})

export default styles;