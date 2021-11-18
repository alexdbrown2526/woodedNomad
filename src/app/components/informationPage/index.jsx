import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HeaderTitle = styled.h3`
  ${tw`
  text-2xl
    font-bold
    text-white
    items-center
    border
    mb-3`}
`;

const InfoContainer = styled.div`
  ${tw`
  
  items-center
  `}
`;

const InfoListHeader = styled.div`
  ${tw`
  flex
  items-center
  `}
`;

const InfoListItem = styled.p`
  ${tw`
  items-center`}
`;

const InfoQuestion = styled.h3`
  ${tw`
  items-center`}
`;

export function InformationPage() {
  return (
    <InfoContainer>
      <HeaderTitle>Rent Camping Gear and Outdoor Equipment</HeaderTitle>
      <InfoListHeader>Rent Camping Gear and Outdoor Equipment</InfoListHeader>
      <InfoListHeader>Rental Process</InfoListHeader>
      <InfoListHeader>Rent to Own Gear</InfoListHeader>
      <InfoListHeader>Frequently Asked Questions</InfoListHeader>
      <InfoListItem>
        <InfoQuestion>Do you offer local pickup?</InfoQuestion>
      </InfoListItem>
    </InfoContainer>
  );
}
