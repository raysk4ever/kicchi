import { Text, View } from "react-native";
import Button from "../components/atoms/Button";

type Props = {
 
}
export const ProfileScreen = ({navigation}: Props) => {
  const goToHome = () => {
    navigation.navigate('Home')
  }
  return ( 
    <View>
      <Text>Profile Screen</Text>
      <Button title="goToHome" onPress={goToHome} />
    </View>
  );
}