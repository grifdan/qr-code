import {GENERATE_DATA} from "../constants.js";
import {QRCodeSVG} from 'qrcode.react';
import s from "./generateHistory.module.css"

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA || "[]"));

    return (
        <div className={s.container}>

            {data.map((text) => {

                return (
                    <div key={text} className={s.genItem}>
                        {text}
                        { text !== '' ? <QRCodeSVG value={text} size={150}/> : null }
                    </div>
                )

            })}
        </div>
    )
}