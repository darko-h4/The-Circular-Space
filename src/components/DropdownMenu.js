import React from 'react';

const DropdownMenu= ({data= []}) => (
    <div>
        <ul>
            {data.map((item, i)=>(
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default DropdownMenu;
