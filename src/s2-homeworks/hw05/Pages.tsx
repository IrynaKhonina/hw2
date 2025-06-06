import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import path from "node:path";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/* Перенаправление с корневого пути на /pre-junior */}
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                {/* Роуты для страниц */}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path ={PATH.JUNIOR} element = {<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />

                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Pages
