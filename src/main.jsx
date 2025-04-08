import { createRoot } from 'react-dom/client';

// чтобы экспортировать сюда компонент Layout надо написать:
import { Layout } from './Layout.jsx';

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    // чтобы вызвать компонент, надо записать его в <>, как и обычный html тег
    // не забывать про запятую после самозакрывающегося тега
    <BrowserRouter>
        <Layout />
    </BrowserRouter>,

)

