import React, { useRef } from 'react';

import './index.scss';
import {useSelector} from "react-redux";

const Waveform = () => {

    const audioRef = useRef();
    const { timeMarks, audioUrl } = useSelector(state => state.currentCase.case.solution);

    const handleChangeListen = (time) => {
        audioRef.current.currentTime = Number(time);
    }

    return (
        <div className="waveform-container">
            <audio controls controlsList='nodownload' ref={audioRef} src={audioUrl} />
            <ul className="w-100 mt-4">
                {
                    timeMarks.map((solution, index) =>
                        <li
                            className="d-flex align-items-center"
                            onClick={() => handleChangeListen(solution.timeSeconds)}
                            key={index}
                        >
                            {solution.time} - {solution.title}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Waveform;