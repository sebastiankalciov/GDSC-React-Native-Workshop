import {Image, StyleSheet, Text, View} from "react-native";

export const KMyCard = () => {
    return (
        <View style={styles.container}>

            <View style = {styles.upperContainer}>
                <View style = {styles.miniContainer}/>

                <View style = {styles.imageContainer}>
                    <Image style = {styles.profileImage} source={require('./assets/img.jpeg')}/>
                </View>
            </View>

            <View style = {styles.lowerContainer}>
                <Text style = {styles.title}>Sebastian <Text style={{fontWeight: "bold"}}>Kalciov</Text></Text>
                <Image style = {styles.profileImage} source={require('./assets/UVT_logo.png')}/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {

        height: "30%",
        width: "20"
    },
    upperContainer: {
        flex: 1/3,
        backgroundColor: '#121120', //131313
        alignItems: 'center',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
    },
    miniContainer: {
        marginTop: "10%",
        borderRadius: 50,
        height: "10%",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
    },

    profileImage: {
        borderRadius: 50,
        width: "35%",
        height: "35%",
        alignItems: "center",
        justifyContent: "center",

    },
    imageContainer: {
        height: "130%",
        width: "85%",
        alignItems: 'center',
        paddingTop: "30%",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25
    },

    lowerContainer: {

        flex: 1/3,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        backgroundColor: '#efefef',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },

    title: {
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

})