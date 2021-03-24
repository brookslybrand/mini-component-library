import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let Component;
  if (size === "large") {
    Component = LargeProgressBarWrapper;
  } else if (size === "medium") {
    Component = MediumProgressBarWrapper;
  } else if (size === "small") {
    Component = SmallProgressBarWrapper;
  }

  if (Component === undefined) {
    throw new Error(`Invalid size of ${size}`);
  }

  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressWrapper>
        <Progress style={{ "--width": `${value}%` }} />
      </ProgressWrapper>
    </Component>
  );
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressWrapper = styled.div`
  border-radius: inherit;
  height: 100%;
  /* trim corners when progress is near 100% */
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
  border-radius: inherit;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const LargeProgressBarWrapper = styled(ProgressBarWrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;
const MediumProgressBarWrapper = styled(ProgressBarWrapper)`
  height: 12px;
  border-radius: 4px;
`;
const SmallProgressBarWrapper = styled(ProgressBarWrapper)`
  height: 8px;
  border-radius: 4px;
`;

export default ProgressBar;
