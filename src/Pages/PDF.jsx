
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';




const PDF = () => {
    return (
        <div>
            <div>

            </div>
            <ReactToPrint trigger={()=> <FaFilePdf/> }/>
      </div>
    )
};

export default PDF;