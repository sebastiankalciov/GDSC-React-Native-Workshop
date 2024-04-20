import {Alert, Text, TouchableOpacity, View} from "react-native";

export const KButton = (text = "press", onPress, color = "green") => {
    return(
        <TouchableOpacity onPress={onPress}
            style = {{height: 50, width: 100, backgroundColor: color}}>
            <Text style = {{fontSize: 10}}></Text>
        </TouchableOpacity>
    )
}