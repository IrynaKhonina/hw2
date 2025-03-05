import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const dispatch = useDispatch();
    const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading); // Получаем isLoading из Redux

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        dispatch(loadingAC(true)); // Устанавливаем isLoading в true

        setTimeout(() => {
            dispatch(loadingAC(false)); // Через 1.5 секунды устанавливаем isLoading в false
        }, 1500);

        // setTimeout
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Loading...</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                        style={{ width: '154px', height: '40px', fontSize: '14px', marginTop: '20px' }}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
