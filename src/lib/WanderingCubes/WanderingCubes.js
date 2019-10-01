import React from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CubesKeyframes = size => keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: translateX(${size}px) rotate(-90deg) scale(0.5);
    }
    50% {
        transform: translateX(${size}px) translateY(${size}px) rotate(-179deg);
    }
    50.1% {
        transform: translateX(${size}px) translateY(${size}px) rotate(-180deg);
    }
    75% {
        transform: translateX(0) translateY(${size}px) rotate(-270deg) scale(0.5);
    }
    100% {
        transform: rotate(-360deg);
    }
`;

const CubesWrapper = styled.div`
    width: 100%;
    height: 100%
    position: relative;
`;

const Cube1 = styled.div`
    background-color: ${props => props.color ? props.color : '#fff'};
    width: ${props => props.size ? props.size/4 : 12.5}px;
    height: ${props => props.size ? props.size/4 : 12.5}px;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${props => CubesKeyframes(props.size ? props.size*3/4 : 38.5)} 1.8s ease-in-out -1.8s infinite both;
`;

const Cube2 = styled(Cube1)`
    animation-delay: -0.9s;
`;

const WanderingCubes = ({size, color, style}) => {
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
            <CubesWrapper>
                <Cube1 size={size} color={color}/>
                <Cube2 size={size} color={color}/>
            </CubesWrapper>
        </Wrapper>
    )
};

export default WanderingCubes;
