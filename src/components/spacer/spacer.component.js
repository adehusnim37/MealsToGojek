import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (posi, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[posi];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ posi, size, theme }) => getVariant(posi, size, theme)}
`;

Spacer.defaultProps = {
  posi: "top",
  size: "small",
};
