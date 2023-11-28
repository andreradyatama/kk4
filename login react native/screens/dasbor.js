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
      <SafeAreaView className="flex">
         <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View className=" bg-white w-30"
       style={{width: 300, height: 500, marginLeft: 30, marginTop: 50, borderRadius:30, justifyContent: 'center', }}>
      <View className="form space-y-2">
        <Text className="font-bold text-3xl text-center mb-20">Add Data</Text>
      <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl ml-4 mr-4"
              placeholder="name"
              value="" 
            />
      <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-10 ml-4 mr-4 "
              placeholder="class"
              value="" 
            />
             <TouchableOpacity onPress={()=> navigation.navigate('menus')}
              className="py-3 bg-yellow-400 rounded-xl ml-6 mr-6 mt-10">
                <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Add
                </Text>
             </TouchableOpacity>
        </View>
      </View>

    </View>

  )}