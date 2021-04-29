import {StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    carContainer: {// this is the entire page
        width: '100%',//always display value within quotes and follow by comma.
       
       height: Dimensions.get('window').height,
    
      },
      titles: {
        marginTop: '30%',
        width: '100%',// in relation to the width of the screen horizontally
        alignItems:'center', // add comma at the end
      },
      title: {
        fontSize: 40, // no quotes needed or  need to add pixel or unit measure 
        fontWeight: '500',// can add bold or use number up to 900
      },
      subtitle: {
        fontSize: 16,//again no quotes needed
        color: '#5c5e62',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',//shows you picture as much as possible, can also use contain
        position: 'absolute',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50, // ability to move  button around the page after position is declared absolute
        width: '100%'
       },
       subtitleCTA: {
         textDecorationLine: 'underline',
       }


});
export default styles;