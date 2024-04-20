import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {KMyCard} from "./KMyCard";
import {KButton} from './KButton'
import * as Haptics from 'expo-haptics';
import Checkbox from 'expo-checkbox';
import {useState} from "react";
export default function App() {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style = {styles.container}>
            <KMyCard/>
            <Button
                title="Bubuie telefonul"
                onPress={()=>
                      Haptics.notificationAsync(
                          Haptics.NotificationFeedbackType.Success
                      )
                }
            />
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#8ED2F0' : undefined}
            />

            <KButton/>
      </View>
    );
}

const styles= StyleSheet.create({

    container: {
        flex: 1, // takes all the available screen space
        backgroundColor: '#fff',
        alignItems: 'center', // align horizontally
        justifyContent: 'center', // align vertically
    },

});
