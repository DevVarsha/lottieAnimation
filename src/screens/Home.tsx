import { View, Text, Button } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface HomeProps {
    data: Dispatch<SetStateAction<string>>;
  }

export default function Home({data}:HomeProps) {
  return (
    <View>
      <Text style={{fontSize:40}}>Home</Text>
      <Button 
       title='chnage color from home to splash'
       onPress={()=> data("pink")}
      />
    </View>
  )
}