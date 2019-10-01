import React from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size*1.2 : 60}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WaveKeyframes = keyframes`
    0%, 40%, 100% {
        transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
    }
`;

const WaveWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Rect = styled.div`
    background-color: ${props => props.color ? props.color : '#fff'};
    height: 100%;
    width: 16%;
    display: inline-block;
    animation: ${WaveKeyframes} 1.2s infinite ease-in-out;
    animation-delay: ${props => props.delay}s;
`;

const Wave = ({size, color, style}) => {
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
            <WaveWrapper>
                <Rect delay={-1.2} color={color} size={size}/>
                <Rect delay={-1.1} color={color} size={size}/>
                <Rect delay={-1.0} color={color} size={size}/>
                <Rect delay={-0.9} color={color} size={size}/>
                <Rect delay={-0.8} color={color} size={size}/>
            </WaveWrapper>
        </Wrapper>
    )
};

export default Wave;
