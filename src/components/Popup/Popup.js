import { Status } from '../../constants'
import './Popup.css'
import {useAppContext} from '../../contexts/Context'
import {closePopoup} from '../../reducer/actions/popup'
import React from 'react'

const Popup = ({children}) => {
    const {appState, dispatch} = useAppContext()
    if(appState.status === Status.ongoing)
        return null

    const onClosePopoup = () => {
        dispatch(closePopoup())
    }

    return <div className="popup">
    {React.Children.toArray(children).map(child => React.cloneElement(child,{onClosePopoup}))}
    </div>
}

export default Popup