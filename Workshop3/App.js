import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {KMyCard} from "./KMyCard";
import {KButton} from './KButton';
import {KWeatherCard} from './KWeatherCard';
import * as Haptics from 'expo-haptics';
import Checkbox from 'expo-checkbox';
import {useState} from "react";
export default function App() {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style = {styles.container}>
            <KMyCard/>
            <KWeatherCard/>
{/*            <Button
                color ="#c19971"
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
            />*/}

           {/* <KButton onPress={() => alert("ce faaa ma")}/>*/}
      </View>
    );
}

const styles= StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E6e6e6',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    }

});
