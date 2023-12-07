import { View, Text, Alert, Animated, Easing, Button } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useRef, useContext} from 'react'
import LottieView from "lottie-react-native"
import Home from './Home';
import { GlobalContext } from '../../App';


interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function Splash({setIsLoading}: SplashProps) {
  const animationProgress = useRef(new Animated.Value(0));
  const {appColor, colorSet} = useContext(GlobalContext)
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:40, color: appColor}}>Hello Splash</Text>
      <Button 
      title='changeColor'
      onPress={()=> colorSet("red")}
      />
      <AnimatedLottieView 
       source={require("../assets/splash.json")}
       autoPlay
       loop={true}
       style={{flex:1}}
       colorFilters={[
        {
          keypath: "button",
          color: "#F00000",
        },
        {
          keypath: "Sending Loader",
          color: "#F00000",
        },
      ]}
      // onAnimationFinish={()=> setIsLoading(false)}
      />
      <Home data={colorSet}/>
    </View>
  )
}