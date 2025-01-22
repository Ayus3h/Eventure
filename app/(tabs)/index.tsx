import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />      
    
      <Text>Wed 13, Sep - 19:30 CET</Text>
      <Text>This is the Title</Text>
      <Text>City Hall</Text>

      {/* Event Image */}
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }} 
        style={{ width: 200, height: 200 }} >
      </Image>

      {/* Footer */}
      <Text>16 Going</Text>
      <Feather name="share" size={20} color="grey" />
      <Feather name="bookmark" size={24} color="gray" />
    </>
  );
}
