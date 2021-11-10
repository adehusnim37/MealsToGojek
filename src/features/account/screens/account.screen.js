import React from "react";
import LottieView from "lottie-react-native";

import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Gojek To GO</Title>
      <AccountContainer>
        <Button
          icon="lock-open-outline"
          color="black"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Spacer size={"large"}>
          <Button
            icon="account-plus"
            color="black"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Button>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
