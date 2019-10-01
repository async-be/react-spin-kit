import React from 'react';
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const BounceAnimation = keyframes`
    0%, 100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
`;

const BounceWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Bounce1 = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color ? props.color : '#fff'};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${BounceAnimation} 2s infinite ease-in-out;
`;


const Bounce2 = styled(Bounce1)`
    animation-delay: -1.0s;
`;

const DoubleBounce = ({size, color, style}) => {
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
            <BounceWrapper>
                <Bounce1 color={color}/>
                <Bounce2 color={color}/>
            </BounceWrapper>
        </Wrapper>
    )
};

export default DoubleBounce;
