import { useState } from 'react';
import { Alert, Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { supabase } from '../supabase/config';
import { File, Directory, Paths } from 'expo-file-system';
import { i18n } from '../App';

export default function GaleriaScreen() {
 const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function subirImagen(){
////////////////////////////////////////////////
    const file = new File(image as string);

    const arrayBits = await file.bytes()

////////////////////////////////////////////////
    const avatarFile = arrayBits
    const { data, error } = await supabase
    .storage
    .from('jugadores')
    .upload('public/avatar1.png', avatarFile, {
        cacheControl: 'no-cache',
        contentType: 'image/png',
        upsert: false
    })
    console.log(data);
    console.log(error);

  }

  return (
    <View style={styles.container}>
      <Button 
      title={i18n.t('gallery')} onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}

    <Button 
    title='Subir Imagen'
    color={'green'}
    onPress={subirImagen}/>

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
    width: 600,
    height: 300,
    resizeMode: 'contain'
  },
});