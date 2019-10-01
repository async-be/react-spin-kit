import React from 'react';
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CubeWrapper = styled.div`
    width: ${props => props.size ? props.size : 32.14}px;
    height: ${props => props.size ? props.size : 32.14}px;
    transform: rotateZ(45deg);
`;

const CubeBeforeKeyframes = size => keyframes`
    0%, 10% {
        transform: perspective(${size}px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(${size}px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(${size}px) rotateY(180deg);
        opacity: 0;
    }
`;

const Cube = styled.div`
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1) rotateZ(${props => props.pos*90}deg);
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.color ? props.color : '#fff'};
        animation: ${props => CubeBeforeKeyframes(props.size ? props.size*3 : 150)} 2.4s infinite linear both;
        transform-origin: 100% 100%;
        animation-delay: ${props => props.pos*0.3}s;
    }
`;

const FoldingCube = ({size, color, style}) => {
    const size2 = (size / Math.sqrt(2)) / 1.1;
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
            <CubeWrapper size={size2}>
                <Cube pos={0} size={size2} color={color}/>
                <Cube pos={1} size={size2} color={color}/>
                <Cube pos={3} size={size2} color={color}/>
                <Cube pos={2} size={size2} color={color}/>
            </CubeWrapper>
        </Wrapper>
    )
};

export default FoldingCube;
