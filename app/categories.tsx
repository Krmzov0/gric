import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ArrowLeft } from 'iconsax-react-native'
import { router } from 'expo-router'
import Colors from '../constants/Colors'

const Page = () => {
  return (
    <SafeAreaView className='bg-[#0b0b0b]'>
      <View className='h-full px-6 py-4 bg-[#0b0b0b]'>


        <View className='flex w-full flex-row items-center justify-between'>
          <TouchableOpacity onPress={() => router.back()} className='w-14 h-14 flex justify-center items-center bg-[#fafafa]/90 rounded-full' >
            <ArrowLeft variant='Linear' size={20} color={Colors.dark} />
          </TouchableOpacity>

          <Text className='text-4xl text-[#98CE00]' style={{ fontFamily: "heavy" }}>G</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Page