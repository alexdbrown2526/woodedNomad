import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const InfoContainer = styled.div`
  ${tw`
  flex
  `}
`;

const InfoListItem = styled.div`
  ${tw`
  flex
  `}
`;

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    `}
`;

export function InformationPage() {
  return (
    <InfoContainer>
      <InfoListItem>Rent Camping Gear and Outdoor Equipment</InfoListItem>
      <InfoListItem>Rental Process</InfoListItem>
      <InfoListItem>Rent to Own Gear</InfoListItem>
      <InfoListItem>Frequently Asked Questions</InfoListItem>
    </InfoContainer>
  );
}
