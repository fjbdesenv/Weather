import { Dispatch, SetStateAction } from 'react'

export default interface paramsSearch {
    city: string,
    setCity: Dispatch<SetStateAction<string>>,
    consult: Dispatch<SetStateAction<any>>
}
