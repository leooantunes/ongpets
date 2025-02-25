import React from "react";

import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AppleButton } from "@invertase/react-native-apple-authentication";

import Styles from "./login.styles";
import { COLORS } from "@/app/theme";
import { onAppleButtonPress } from "@/app/authentication/login-social";

const login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  function AppleSignIn() {
    return (
      <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 160,
          height: 45,
        }}
        onPress={() =>
          onAppleButtonPress().then(() =>
            console.log("Apple sign-in complete!")
          )
        }
      />
    );
  }

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
      <View style={{ width: "100%", paddingHorizontal: 20 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={Styles.input}
              textAlign="center"
              placeholderTextColor={COLORS.PRIMARY}
              cursorColor={COLORS.PRIMARY}
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={Styles.input}
              textAlign="center"
              placeholderTextColor={COLORS.PRIMARY}
              cursorColor={COLORS.PRIMARY}
            />
          )}
          name="senha"
        />
        {errors.senha && <Text>This is required.</Text>}

        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          color={COLORS.PRIMARY}
        />
      </View>
      <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 50 }}>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: COLORS.PRIMARY,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 20,
          marginTop: 40,
        }}
      >
        {AppleSignIn()}
        <FontAwesome6 name="google" size={24} color={COLORS.PRIMARY} />
        <FontAwesome6 name="facebook" size={24} color={COLORS.PRIMARY} />
      </View>
    </ScrollView>
  );
};

export default login;
