import { Student } from "../../../../interfaces/Student";

export interface Credentials {
    email: string
    password: string
}

export interface SigninResponse {
    signin: {
        student: Student
        token: string
    }
}

export interface SigninVariables extends Credentials {

}