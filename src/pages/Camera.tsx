import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Camera as ExpoCamera} from 'expo-camera';

// import { Container } from './styles';

const Camera: React.FC = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(ExpoCamera.Constants.Type.back);

    useEffect(() => {
    (async () => {
        const { status } = await ExpoCamera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
    }, []);

    if (hasPermission === null) {
    return <View />;
    }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
    }
  return (
        <View style={{flex: 1}}>
            <ExpoCamera style={{flex: 1}} >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        setType(
                            type === ExpoCamera.Constants.Type.back
                            ? ExpoCamera.Constants.Type.front
                            : ExpoCamera.Constants.Type.back
                        );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </ExpoCamera>
        </View>
  );
}


const styles = StyleSheet.create({
    
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16
    },
    text: {
        fontSize: 15
    }
})

export default Camera;