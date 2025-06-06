import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import {keyboardKey} from "@testing-library/user-event";

type GreetingContainerPropsType = {
    users:  UserType[] // Исправляем any на UserType[]
    addUserCallback: (name: string) => void  // Исправляем any на функцию
}

export const pureAddUser = (
    name: string,
    setError: (error: string) => void,
    setName: (name: string) => void,
    addUserCallback: (name: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    } // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError:(error: string) => void ) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
    if (e.key === 'Enter') {
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // Исправляем any на string
    const [error, setError] = useState<string>('') // Исправляем any на string

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>)    => { // need to fix any
        setName(e.currentTarget.value)  // Устанавливаем значение из input

        error && setError('') // Очищаем ошибку, если она есть
    }


    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length  // Количество добавленных пользователей
    const lastUserName = users.length > 0 ? users[users.length - 1].name : ''// Имя последнего пользователя

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
