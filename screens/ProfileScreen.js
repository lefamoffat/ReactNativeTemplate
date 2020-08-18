import React from 'react';
import {View, Text, Button} from 'react-native';

export default ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
