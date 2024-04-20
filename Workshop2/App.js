import {Image, StyleSheet, Text, View} from 'react-native';

export default function App() {
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
  );
}

const styles= StyleSheet.create({

  container: {
    flex: 1, // takes all the available screen space
    backgroundColor: '#fff',
    alignItems: 'center', // align horizontally
    justifyContent: 'center', // align vertically
  },

  upperContainer: {
    height: "35%",
    width: "70%",
    backgroundColor: '#121120', //131313
    alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25
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
    justifyContent: "center"
  },
  imageContainer: {
    height: "130%",
    width: "110%",
    alignItems: 'center',
    paddingTop: "30%",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25
  },

  lowerContainer: {
    height: "35%",
    width: "70%",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'

  },

  title: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
