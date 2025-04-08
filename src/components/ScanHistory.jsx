import {SCAN_DATA} from "../constants.js";
import {QRCodeSVG} from 'qrcode.react';
import s from "./scanHistory.module.css";

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className={s.container}>
            {/*первые фигурные скобки означают, что мы в них будет запихивать динамические значения.*/}
            {/*в качестве динамического значения - массив*/}
            {/*мы по нашему массиву пробегаемся*/}

            {data.map((text) => {
                return (
                    <p key={text} className={s.scanItem}>
                        {text}
                        { text !== '' ? <QRCodeSVG value={text} size={150}/> : null }
                    </p>
                )
            })}
        </div>
    )
}
