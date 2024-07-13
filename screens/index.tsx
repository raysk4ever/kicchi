import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "../components/MyDrawer";
import { useAuth } from "../Context/AuthContext";
import AuthScreen from "./AuthScreen";

export default function Screens() {
  const { isLoggedIn } = useAuth()
  console.log('isLoggedIn', isLoggedIn)
  if (!isLoggedIn) return (
    <AuthScreen />
  )
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}