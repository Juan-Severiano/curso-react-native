import React from 'react';
import { Text, View, Button } from 'react-native';

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        {props.next
          ? <Button 
              title='Avancar'
              onPress={() => {
                props.navigation.navigate(props.next)
              }}
            />
          : false
        }
      </View>
      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>
  );
}
