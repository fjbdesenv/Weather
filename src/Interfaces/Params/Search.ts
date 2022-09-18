import { Dispatch, SetStateAction } from 'react'

export default interface paramsSearch {
    seachCity: string,
    setCity: Dispatch<SetStateAction<string>>,
    consult: Function
}
