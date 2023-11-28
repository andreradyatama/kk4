import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
        <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row">
        {/* <Image source={require("../assets/images/ubet.jpg")}
                    style={{width: 300, height: 300, marginLeft: 30, marginTop: 30}}  /> */}
        </View>

        <Text className="text-center text-xl font-bold text-center mb-10">
            ubet sakban
        </Text>
    
        <TouchableOpacity onPress={()=> navigation.navigate('dasbor')}
              className="py-3 bg-yellow-400 rounded-3xl ml-20 mr-20">
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Next
                </Text>
             </TouchableOpacity>
        </SafeAreaView>
    </View>
  )}
