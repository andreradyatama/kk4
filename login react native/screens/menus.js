import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (

    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
        <SafeAreaView className="flex-1">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

        <View className=" bg-white w-30"
       style={{width: 325, height: 600, marginLeft: 17.5, marginTop: 50, borderRadius:30, justifyContent: 'center', }}>
      <View className="form ">
        <Text className="flex-row font-bold text-2xl ml-6 ">Sakban         I       XII RPL 1</Text>
        <Text className="flex-row font-bold text-2xl ml-6 ">Sakban         I       XII RPL 1</Text>
        <Text className="flex-row font-bold text-2xl ml-6 ">Sakban         I       XII RPL 1</Text>
        <Text className="flex-row font-bold text-2xl ml-6 mb-60">Sakban         I       XII RPL 1</Text>
      
             <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}
              className="py-3 bg-gray-400 rounded-xl ml-6 mr-6 ">
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Edit
                </Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}
              className="py-3 bg-red-400 rounded-xl ml-6 mr-6 mt-2">
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Delete
                </Text>
             </TouchableOpacity>
        </View>
       
      </View>
       
        </SafeAreaView>
    </View>

  )}