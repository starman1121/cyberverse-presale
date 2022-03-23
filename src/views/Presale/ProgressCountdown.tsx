import React from 'react';
import styled from 'styled-components';
import Countdown, { CountdownRenderProps } from 'react-countdown';

interface ProgressCountdownProps {
  base: Date;
  deadline: Date;
  hideBar?: boolean;
  description: string;
}

const ProgressCountdown: React.FC<ProgressCountdownProps> = ({ base, deadline, hideBar, description }) => {

  const percentage = 
    Date.now() >= deadline.getTime()
      ? 100
      : ((Date.now() - base.getTime()) / (deadline.getTime() - base.getTime())) * 100;

  const countdownRenderer = (countdownProps: CountdownRenderProps) => {
    const { days, hours, minutes, seconds } = countdownProps;
    const d = String(days);
    const h = String(hours);
    const m = String(minutes);
    const s = String(seconds);
    return (
      <StyledCountdown>
        <div>
          <StyledP>Days</StyledP>
          {d.padStart(2, '0')}
        </div>
        <div>
          <StyledP>Hours</StyledP>
          {h.padStart(2, '0')}
        </div>
        <div>
          <StyledP>Minutes</StyledP>
          {m.padStart(2, '0')}
        </div>
        <div>
          <StyledP>Seconds</StyledP>
          {s.padStart(2, '0')}
        </div>
      </StyledCountdown>
    );
  };
  return (
    // <Card>
    <StyledCardContentInner>
      {/* <StyledDesc>{description}</StyledDesc> */}
      <Countdown key={new Date().getTime()} date={deadline} renderer={countdownRenderer} />
      {hideBar ? (
        ''
      ) : (
        <StyledProgressOuter>
          <StyledProgress progress={percentage} />
        </StyledProgressOuter>
      )}
    </StyledCardContentInner>
    // </Card>
  );
};

const StyledCountdown = styled.div`
  display: flex;
  font-size: 48px;
  font-weight: 700;
  margin: 0 2px;
  font-family: VarinoNormal;
  & div{
    width: 25%;
    float: left;
  }
`;

const StyledP = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 3px 0;
  color: #04d9ff;
  font-family: Poppins;
`;

const StyledProgressOuter = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 3px;
  background: #888;
`;

const StyledProgress = styled.div<{ progress: number }>`
  width: 100%
  height: 100%;
  border-radius: 3px;
  background: #333;
`;

const StyledCardContentInner = styled.div`
margin-top: 20px;
//   height: 100%;
  display: flex;
//   align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export default ProgressCountdown;
