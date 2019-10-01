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
    width: ${props => props.size ? props.size : 50}px;
    height: ${props => props.size ? props.size : 50}px;
`;

const CubeKeyframes = keyframes`
    0%, 70%, 100% {
        transform: scale3D(1, 1, 1);
    }
    35% {
        transform: scale3D(0, 0, 1);
    }
`;

const Cube = styled.div`
    width: 33.333%;
    height: 33.333%;
    background-color: ${props => props.color ? props.color : '#fff'};
    float: left;
    animation: ${CubeKeyframes} 1.3s infinite ease-in-out;
    animation-delay: ${props => props.pos * 0.1}s;
`;

const CubeGrid = ({size, color, style}) => {
    const realSize = size - (size%3);
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
            <CubeWrapper size={realSize}>
                <Cube pos={2} color={color}/>
                <Cube pos={3} color={color}/>
                <Cube pos={4} color={color}/>
                <Cube pos={1} color={color}/>
                <Cube pos={2} color={color}/>
                <Cube pos={3} color={color}/>
                <Cube pos={0} color={color}/>
                <Cube pos={1} color={color}/>
                <Cube pos={2} color={color}/>
            </CubeWrapper>
        </Wrapper>
    )
};

export default CubeGrid;
