import { View, Text, Button, Pressable, Image } from 'react-native'


const ButtonCommponent = () => {
  return (
    <View>
      <Text>ButtonCommponent</Text>
      <Pressable onPress={() => console.log("hello hi")}>
        <Text style={{color: "teal"}}>Press me!</Text>  
      </Pressable>
      <Pressable onPressIn={() => console.log("hello hi hoo")}>
        <Text style={{color: "green"}}>Press me!</Text>  
      </Pressable>
      <Pressable onPressOut={() => console.log("hello hi hoo boo")}>
        <Text style={{color: "red"}}>Press me!</Text>  
      </Pressable>
      <Pressable onLongPress={() => console.log("hello hi hoo boo hi")}>
        <Text style={{color: "crimson"}}>Press me!</Text>  
      </Pressable>
      <Image source={require('../assets/GQ-zAi5b0AAMiv-.jpeg')} style={{width:200, height:200}} />
      
    </View>
  )
}

export default ButtonCommponent