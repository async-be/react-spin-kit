import React from 'react';
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ElementsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ElementBeforeKeyframes = keyframes`
0%, 39%, 100% {
    opacity: 0; }
  40% {
    opacity: 1; }
`;

const Element = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(${props => props.index * 30}deg);
    
    &::before {
        content: "";
        display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${props => props.color ? props.color : '#fff'};
    border-radius: 100%;
            animation: ${ElementBeforeKeyframes} 1.2s infinite ease-in-out both;
            animation-delay: ${props => -1.2 + (props.index * 0.1)}s;
    }
`;

const FadingCircle = ({size, color, style}) => {
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
            <ElementsWrapper>
                {
                    (() => {
                        let tab = [];
                        for(let i = 0; i < 12; i++) {
                            tab.push(<Element index={i} color={color} key={i}/>)
                        }
                        return tab;
                    })()
                }
            </ElementsWrapper>
        </Wrapper>
    )
};

export default FadingCircle;
