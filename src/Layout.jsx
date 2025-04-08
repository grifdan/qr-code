import { QrCodeGenerator } from './components/Generate/QrCodeGenerator.jsx';
import { QrCodeScanner } from "./components/Scan/QrCodeScanner.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import {ScanHistory} from "./components/ScanHistory.jsx";
import {GenerateHistory} from "./components/GenerateHistory.jsx";

import { Routes, Route } from "react-router-dom";



const  Layout = () => {
    return (
        <div>

            {/*самозакрывающийся тег, означающий, что мы вызвали функцию QrCodeGenerator в компоненте Layout*/}

            <Navigation />


            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generateHistory/" element={<GenerateHistory />} />
                <Route path="/scanHistory/" element={<ScanHistory />} />
            </Routes>

        </div>
    )
}


export { Layout };