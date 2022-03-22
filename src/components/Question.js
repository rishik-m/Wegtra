/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="question">
            <header>
                <h4 onClick={() => setExpanded(!expanded)} className="question-title">
                    {title}
                </h4>
                <button className="btn_faq" onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {expanded && <p>{info}</p>}
        </article>
    );
};

export default Question;
