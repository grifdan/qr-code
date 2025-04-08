import {QRCodeSVG} from 'qrcode.react';
import {useState} from 'react';
import s from './qrCodeGenerator.module.css';
import {GENERATE_DATA} from '../../constants.js'

export const  QrCodeGenerator = () => {
    const [value, setValue]  = useState('');
    const [result, setResult]  = useState('');

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify(
                [...prevData,
                value])
        );

        setResult(value);
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('')


    }

    console.log('result : ', result)

    return (
        <div className={s.container}>

            {/*как и в html атрибутах мы можем к компоненту присвоить любое значение*/}
            {/*в моем случае это value = чему-то там */}
            {/*это означает, что при наведении на qr code у нас отобразится ссылка на https://reactjs.org/*/}
            {/*теперь же у меня создается qr code основываясь на том, что я написал в поле ввода (value)*/}
            {/*чтобы подключить css - надо написать className*/}
            {/*placeholder нужен для того, чтобы какой-то текст был на фоне поле ввода*/}

            <input type = "text"
                   value={value}
                   placeholder="Введи любой текст, сучара"
                   onChange={onChangeHandler}
                   className={s.input}
            />

            {/*Здесь я на кнопку поставил слушатель событий onClick. То есть при нажатии будет вызываться функция onClickHandler*/}

            <button type = "button" className={s.button} onClick={onClickHandler}>
                Сгенерируй, сучка
            </button>

            { result !== '' ? <QRCodeSVG value={result} size={150}/> : null }

        </div>
    )
};

