import {Image, StyleSheet, Text, View} from "react-native";

export const KWeatherCard = () => {

    const date = new Date().toDateString()

    return (
        <View style={styles.cardContainer}>
            <Text style = {styles.title}>{date}</Text>
            <View style = {styles.imageContainer}>
                <Image style = {styles.weatherImage} source={require('./assets/cloudy.png')}/>
            </View>
            <Text style = {styles.temperature}>-10° C</Text>
            <Text style = {styles.title}>Timisoara</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer: {

        flex: 1/2.5,
        width: "35%",
        backgroundColor: "#d0b395",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly"

    },
    imageContainer: {
        alignItems: "center",
        alignContent: "center",
        width: "100%",
    },
    weatherImage: {
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold"
    },
    temperature: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }

})