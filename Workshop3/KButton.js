import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const KButton = ({text = "Apasa-ma", onPress, color = "#c19971"}) => {
    return(
        <TouchableOpacity onPress={onPress}
            style = {{
                height: 25,
                width: 100,
                backgroundColor: color,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,

            }}>
            <Text style = {{fontSize: 12, color: "white", fontWeight: "bold"}}>{text}</Text>
        </TouchableOpacity>
    )
}
