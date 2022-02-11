import React, {useState} from 'react'
import FramesList from 'components/FramesList';

const Game = () => {

    const [frames, setFrames] = useState([]);





    return (
        <div>
            <FramesList/>

        </div>
    )

}

export default Game;