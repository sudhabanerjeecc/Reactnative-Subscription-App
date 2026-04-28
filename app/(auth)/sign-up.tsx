import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp page</Text>
      <Link className="mt-50" href={"/"}>
        Go back
      </Link>
    </View>
  );
};

export default SignUp;
