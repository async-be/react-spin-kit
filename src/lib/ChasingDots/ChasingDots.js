import React from 'react';
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DotsContainerKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const DotsContainer = styled.div`
  width: 78%;
  height: 78%;
  position: relative;
  text-align: center;
  animation: ${DotsContainerKeyframes} 2s infinite linear;
`;

const DotsKeyframes = keyframes`
    0%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
        }
    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
        }
`;

const Dot1 = styled.div`
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${props => props.color ? props.color : '#fff'};
    border-radius: 100%;
    animation: ${DotsKeyframes} 2s infinite ease-in-out;
`;

const Dot2 = styled(Dot1)`
    top: auto;
    bottom: 0;
    animation-delay: -1s;
`;

const ChasingDots = ({size, color, style}) => {
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
            <DotsContainer>
                <Dot1 color={color}/>
                <Dot2 color={color}/>
            </DotsContainer>
        </Wrapper>
    )
};

export default ChasingDots;
