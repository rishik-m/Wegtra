/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import AccordionWrapper from './accordionwrapper';
import AccordionItem from './accordionitem';

function Fquestions() {
    const data = [
        {
            title: 'Item 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere.',
        },
        {
            title: 'Item 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit.',
        },
        {
            title: 'Item 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi.',
        },
        {
            title: 'Item 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta.',
        },
    ];

    return (
        <div className="content">
            <AccordionWrapper>
                {data.map((item, index) => (
                    <AccordionItem key={index} index={index} title={item.title} description={item.description} />
                ))}
            </AccordionWrapper>
        </div>
    );
}

export default Fquestions;
