import React from "react";
import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover, Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
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
