import { Image, ScrollView, Text, View } from "react-native";

const login = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../../../assets/images/login/login-image.png")}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
      <View>
        <Text>TESTE</Text>
      </View>
      <View>
        <Text>TESTE</Text>
      </View>
      <View>
        <Text>TESTE</Text>
      </View>
      <View>
        <Text>TESTE</Text>
      </View>
      <View>
        <Text>TESTE</Text>
      </View>
      <View>
        <Text>TESTE</Text>
      </View>
      <View>
        <Text>TESTE</Text>
      </View>
    </ScrollView>
  );
};

export default login;
