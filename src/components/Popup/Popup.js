import { Status } from '../../constants'
import './Popup.css'
import {useAppContext} from '../../contexts/Context'
import PromotionBox from './PromotionBox/PromotionBox'
import {closePopoup} from '../../reducer/actions/popup'

const Popup = () => {
    const {appState, dispatch} = useAppContext()
    if(appState.status === Status.ongoing)
        return null

    const onClosePopoup = () => {
        dispatch(closePopoup())
    }

    return <div className="popup">
        <PromotionBox onClosePopoup={onClosePopoup}/>
    </div>
}

export default Popup