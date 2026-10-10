import { useState } from 'react';
import { Alert, Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CamaraScreen() {

 const [image, setImage] = useState<string | null>(null);

   const takePhoto = async () => {
 
     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
 
     if (!permissionResult.granted) {
       Alert.alert('Permission required', 'Permission to access the camera is required.');
       return;
     }
 
     let result = await ImagePicker.launchCameraAsync({
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });
 
     console.log(result);
 
     if (!result.canceled) {
       setImage(result.assets[0].uri);
     }
   };
 
   return (
     <View style={styles.container}>
       <Button title="Take a photo" onPress={takePhoto} />
       {image && <Image source={{ uri: image }} style={styles.image} />}
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   image: {
     width: 200,
     height: 200,
   },
 });