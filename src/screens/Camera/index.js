import React, {useState, useRef} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
const Camera = ({navigation}) => {
  const camera = useRef();
  const [isRecording, setIsRecording] = useState(false);
  //  const navigation = useNavigation();
  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      navigation.navigate('Publish');
    }
  };

  return (
    <View style={styles.bg}>
      <RNCamera
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
        style={styles.fg}
      />
      <Button
        title={isRecording ? 'Stop' : 'Record'}
        onPress={onRecord}
        color
      />
    </View>
  );
};

export default Camera;
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  fg: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
});
