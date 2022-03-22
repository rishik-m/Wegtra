/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState } from 'react';
// import AccordionWrapper from './accordionwrapper';
// import AccordionItem from './accordionitem';
import data from './data';
import SingleQuestion from './Question';

const Fquestions = () => {
    const [questions, setQuestions] = useState(data);

    return (
        <main>
            <div className="container_faq">
                <h3> Frequently Asked Questions </h3>
                <section className="info">
                    {questions.map((question) => (
                        <SingleQuestion key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Fquestions;
