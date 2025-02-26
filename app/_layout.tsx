import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="screens/login/login.screen" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Login",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
