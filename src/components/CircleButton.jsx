import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export const CircleButton = (props) => {
	const { children } = props;
	return(
		<View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>{children}</Text>
      </View>
	);
}

CircleButton.prototype = {
	children:string.isRequired,
};

const styles = StyleSheet.create({
	circleButton:{
    backgroundColor:'#467FD3',
    width:64,
    height:64,
    borderRadius:32,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:40,
    bottom:40,
    shadowColor:'black',
    shadowOffset:{width:0,height:8},
    shadowOpacity:0.25,
    shadowRadius:8,
    elevation:8,
  },
  circleButtonLabel:{
    color:'white',
    fontSize:40,
    lineHeight:40,
  }
})