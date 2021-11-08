import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { isLoading } from "expo-font";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedpassword, setRepeatedpassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <Title>Gojek To GO</Title>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedpassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedpassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <AuthButton
              icon="account-check"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedpassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
