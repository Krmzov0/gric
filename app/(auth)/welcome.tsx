import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Google, LoginCurve, ProfileAdd } from "iconsax-react-native";
import Colors from "../../constants/Colors";
import Animated, { FadeIn } from 'react-native-reanimated';

WebBrowser.maybeCompleteAuthSession();

const Signin = () => {

  // Warm up the android browser to improve UX
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const signInWithGoogle = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
    router.replace('/(tabs)/');
  }, [startOAuthFlow]);

  return (

      <Animated.View entering={FadeIn.springify().delay(150).duration(200)} className='bg-[#fafafa] flex flex-col justify-between pb-14 pt-28 h-full px-8 z-20'>
        <StatusBar style='dark' />

        <View className=''>
          <Text className='text-xl text-center mt-8 text-[#0b0b0b]/80' style={{ fontFamily: 'bold' }}>Добредојде на</Text>
          <Text className='text-7xl text-[#32BB78] text-center' style={{ fontFamily: 'heavy' }}>GRIC</Text>
        </View>


        <View>
          <View className='mb-3'>
            <Text className='text-[#0b0b0b]/70 text-lg mt-2 text-center' style={{ fontFamily: 'medium' }}>Добредојдовте на нашата апликација за достава на храна!</Text>
          </View>

          <TouchableOpacity style={styles.input} onPress={() => router.push('/(auth)/setUsername')} className='w-full mt-3 flex flex-row justify-center items-center bg-[#0b0b0b] rounded-2xl'>
            <Text className='text-lg text-[#fafafa]' style={{ fontFamily: 'medium' }}>Креирај Профил</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.input} onPress={() => router.push('/(auth)/signIn')} className='w-full mt-3 flex flex-row justify-center items-center bg-[#0b0b0b] rounded-2xl'>
            <Text className='text-lg text-[#fafafa]' style={{ fontFamily: 'medium' }}>Најави се</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
  );
};

export default Signin;


const styles = StyleSheet.create({
  input: {
      paddingVertical: (Platform.OS === 'android') ? 20 : 24,
      fontFamily: 'medium',
  }
});