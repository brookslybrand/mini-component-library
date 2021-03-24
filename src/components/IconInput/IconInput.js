import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let WrapperComponent, iconSize;
  if (size === "small") {
    WrapperComponent = SmallWrapper;
    iconSize = "16px";
  } else if (size === "large") {
    WrapperComponent = LargeWrapper;
    iconSize = "24px";
  } else {
    throw new Error(`Invalid size of ${size}`);
  }

  return (
    <WrapperComponent
      style={{
        "--width": `${width}px`,
        "--icon-size": iconSize,
      }}
    >
      <Input placeholder={placeholder} />

      <IconWrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} strokeWidth={1} size={iconSize} />
      </IconWrapper>
    </WrapperComponent>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);

  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  & input::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const SmallWrapper = styled(Wrapper)`
  height: 24px;
  font-size: 0.875rem;
  --border-width: 1px;
`;

const LargeWrapper = styled(Wrapper)`
  height: 36px;
  font-size: 1.125rem;
  --border-width: 2px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px;
  padding-left: calc(var(--icon-size) + 14px);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: currentColor;
  font-size: inherit;
  font-weight: inherit;
`;

const IconWrapper = styled.div`
  width: var(--icon-size);
  height: var(--icon-size);
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  left: 2px;
  color: currentColor;
  pointer-events: none;
`;

export default IconInput;
