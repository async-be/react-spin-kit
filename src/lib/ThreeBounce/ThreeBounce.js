import React from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size / 4 : 12.5}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BounceWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BounceKeyframes = keyframes`
    0%, 80%, 100% {
            transform: scale(0); }
  40% {
            transform: scale(1); }
`;

const Bounce = styled.div`
    width: 25%;
    height: 100%;
    border-radius: 100%;
    background-color: ${props => props.color ? props.color : '#fff'};
    animation: ${BounceKeyframes} 1.4s ease-in-out 0s infinite both;
    animation-delay: ${props => props.delay}s;
`;

const ThreeBounce = ({size, color, style}) => {
    return (
        <Wrapper
            size={size}
            style={{
                ...style,
                width: undefined,
                height: undefined,
                display: undefined,
                alignItems: undefined,
                justifyContent: undefined
            }}
        >
            <BounceWrapper size={size}>
                <Bounce delay={-0.32} color={color}/>
                <Bounce delay={-0.16} color={color}/>
                <Bounce delay={0.0} color={color}/>
            </BounceWrapper>
        </Wrapper>
    )
};

export default ThreeBounce;
