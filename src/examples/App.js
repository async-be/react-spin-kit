import React, {useState} from 'react';
import {
    RotatingPlane,
    DoubleBounce,
    Wave,
    WanderingCubes,
    Pulse,
    ChasingDots,
    ThreeBounce,
    Circle,
    CubeGrid, FadingCircle, FoldingCube
} from "../lib";

const ElementStyle = {
    margin: 10
};

const App = () => {

    const [size, setSize] = useState(150);
    const [color, setColor] = useState('#555');

    return (
        <div style={{
            padding: 25,
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div
                style={{
                    flexBasis: '100%',
                    marginBottom: 25,
                    display: 'flex',
                    flexDirection: 'row'

                }}
            >
                <div>
                    <p>Size</p>
                    <input
                        type="number"
                        value={size}
                        onChange={e => setSize(e.target.value)}
                        placeholder="size"
                    />
                </div>
                <div>
                    <p>Color</p>
                    <input
                        type="text"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        placeholder="color"
                    />
                </div>
            </div>
            <div>
                <RotatingPlane
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >RotatingPlane</p>
            </div>
            <div>
                <DoubleBounce
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >DoubleBounce</p>
            </div>
            <div>
                <Wave
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >Wave</p>
            </div>
            <div>
                <WanderingCubes
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >WanderingCubes</p>
            </div>
            <div>
                <Pulse
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >Pulse</p>
            </div>
            <div>
                <ChasingDots
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >ChasingDots</p>
            </div>
            <div>
                <ThreeBounce
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >ThreeBounce</p>
            </div>
            <div>
                <Circle
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >Circle</p>
            </div>
            <div>
                <CubeGrid
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >CubeGrid</p>
            </div>
            <div>
                <FadingCircle
                    size={size}
                    color={color}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >FadingCircle</p>
            </div>
            <div>
                <FoldingCube
                    color={color}
                    size={size}
                    style={ElementStyle}
                />
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >FoldingCube</p>
            </div>
        </div>
    )
};

export default App;
