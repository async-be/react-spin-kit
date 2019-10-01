import React from 'react';
import styled,{keyframes} from "styled-components";

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PulseKeyframe = keyframes`
    0% {
        transform: scale(0);
        }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`;

const PulseElement = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color ? props.color : '#fff'};
    border-radius: 100%;
    animation: ${PulseKeyframe} 1s infinite ease-in-out;
`;

const Pulse = ({size, color, style}) => {
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
            <PulseElement color={color}/>
        </Wrapper>
    )
};

export default Pulse;
