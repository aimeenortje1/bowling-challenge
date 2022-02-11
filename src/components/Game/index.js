import React, {useState} from 'react'
import FramesList from 'components/FramesList';
import { emptyFrames } from 'utils/emptyFrames';

const Game = () => {

    const [frames, setFrames] = useState(emptyFrames);





    return (
        <div>
            <FramesList frames={frames}/>

        </div>
    )

}

export default Game;