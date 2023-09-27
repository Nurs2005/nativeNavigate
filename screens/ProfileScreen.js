import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
       title='Перейти в главную' 
       onPress={()=>{navigation.navigate('Home')}}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})