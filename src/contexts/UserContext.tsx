import React, { createContext, FunctionComponent, useState, useEffect } from 'react'
import { Student } from '../interfaces/Student'

export const UserContext = createContext<{
    user: Student
    authenticate(student: Student, token: string): void
}>({
    user: null,
    authenticate: () => null
})

export const UserProvider: FunctionComponent = ({ children }) => {
    const [user, setUser] = useState<Student>(null)

    useEffect(() => {
        const userString = localStorage.getItem('user')

        if (userString) {
            setUser(JSON.parse(userString))
        }
    }, [])

    const authenticate = (student: Student, token: string): void => {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(student))

        setUser(user)
    }

    return (
        <UserContext.Provider value={{
            user,
            authenticate
        }}>
            {children}
        </UserContext.Provider>
    )
}