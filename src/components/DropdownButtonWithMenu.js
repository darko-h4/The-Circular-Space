import React from 'react';
import DropdownButton from "./DropdownButton";
import DropdownMenu from './DropdownMenu';

const sampleData= new Array(4).fill("category name");

const DropdownButtonWithMenu= () => {
    const [open, setOpen]= React.useState(false);
    const drop= React.useRef(null);

    function handleClick(e) {
        //clicked element= e.target
        //if (!e.target.closest(`.${drop.current.className}`)&& open)
        if (!e.target.closest("#drop-down-wrapper")&& open)
        {
            setOpen(false);
        }
    }
    React.useEffect(() => {
        document.addEventListener("click", handleClick);
        return() => {
            document.removeEventListener("click", handleClick);
        };
    });

    return (
        <div>
            <DropdownButton onClick= {() => setOpen (open => !open)}/>
            {open && <DropdownMenu data= {sampleData} />}
        </div>
    )
}

export default DropdownButtonWithMenu;