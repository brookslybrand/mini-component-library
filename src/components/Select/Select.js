import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        <Value>{displayedValue}</Value>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
  &:focus-within {
    outline: 2px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
`;

const Value = styled.span`
  margin-right: 24px;
`;

export default Select;
