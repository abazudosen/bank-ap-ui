import React from "react";
import styled from "styled-components";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

import Text from "../components/Text";

const TouchScreen = ({ navigation }) => {
  return (
    <Container>
      <Text center heavy title color="#106785" margin="32px 0 0 0">
        uRBank
      </Text>

      <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
        <Circle bgColor="#1e1e1e">
          <Circle bgColor="#5196f405">
            <Circle bgColor="#5196f410">
              <Circle bgColor="#5196f430">
                <TouchButton>
                  <MaterialIcons name="fingerprint" size={64} color="#ffffff" />
                </TouchButton>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Touch>

      <Text center heavy large>
        Touch ID sensor for access to{"\n"} your mybank account.)
      </Text>

      <Text center bold margin="16px 0 0 0" color="#9c9c9f">
        Please verify your identity {"\n"} using Touch ID.)
      </Text>

      <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
        <Fontisto name="locked" color="#106785" size={16} />
        <Text bold margin="0 0 0 8px" color="#106785">
          Enter Access PIN
        </Text>
      </PinAccess>

      <StatusBar barStyle="lignt-content" />
    </Container>
  );
};

export default TouchScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #191919;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  justify-content: center;
`;

const TouchButton = styled.TouchableOpacity`
  background-color: #5196f4;
  padding: 8px;
  border-radius: 100px;
`;

const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 32px;
  border-radius: 999px;
`;

const PinAccess = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: center;
`;

const StatusBar = styled.StatusBar``;
