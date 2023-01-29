import { Container } from "@mui/system";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';
function CodeOfConductPage(){

    const [loadpdf, setLoadPdf] = useState(true);
    const [viewPDF, setViewPDF] = useState(false);
    const openPDF = () => setViewPDF(true);
    const [pdfdata, setPdfData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8500/view-document/32')
            .then((response) => {
                setPdfData(response.data);
                console.log(response.data);
                setLoadPdf(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])
    
    if (loadpdf) {
        return (
            <div>
                <Button variant='dark grey' onClick={openPDF}>viewPdf</Button>
            </div>
        )
    }

    return(
        <div class="bcp">
            <iframe
                src={`data:application/pdf;base64,${pdfdata}#toolbar=1`} title="document" width='1300px' height='500rem'/>                                  
        </div>
    )
}
export default CodeOfConductPage;