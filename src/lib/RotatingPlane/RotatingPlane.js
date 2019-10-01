import React from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RotatingItemKeyframes = size => keyframes`
    0% {
        transform: perspective(${size}px) rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: perspective(${size}px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
        transform: perspective(${size}px) rotateX(-180deg) rotateY(-179.9deg);
    }
`;

const RotatingItem = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color ? props.color : '#fff'};
    animation: ${props => RotatingItemKeyframes(props.size ? props.size*3 : 120)} 1.2s infinite ease-in-out;
`;

const RotatingPlane = ({size, color, style}) => {
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
            <RotatingItem
                size={size}
                color={color}
            />
        </Wrapper>
    )
};

export default RotatingPlane;
