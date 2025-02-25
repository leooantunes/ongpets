import { StyleSheet } from "react-native";
import { COLORS } from "@/app/theme";

const Styles = StyleSheet.create({
  input: {
    display: "flex",
    backgroundColor: COLORS.SECUNDARY,
    borderColor: COLORS.SECUNDARY,
    borderWidth: 1,
    borderRadius: 25,
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.PRIMARY,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
  },
});

export default Styles;
