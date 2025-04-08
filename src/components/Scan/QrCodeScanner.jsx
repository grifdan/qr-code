import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import s from './qrCodeScanner.module.css'
import {SCAN_DATA} from '../../constants.js'

export const QrCodeScanner = () => {

    const [scanner, setScanner] = useState(null);

    const scanHandler = (result) => {
        setScanner(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify(
                [...prevData,
                [result[0].rawValue]]
            )
        )
    }


    const settings = {
        audio: false,
        finder: false
    }

    return (
        <div className={s.container}>
            <p className={s.title}>{scanner}</p>
            <Scanner allowMultiple={false}
                     onScan={scanHandler}
                     components={settings}
                     styles={{
                         container: {width: 500, height: 500, position: 'relative'},
                     }}
            />
        </div>
    )
}