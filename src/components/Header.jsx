import igniteLogo from '../assets/img/logo-ignite.png'
import Styles from './Header.module.css'
function Header() {
    return (
        <div className={Styles.header}>
            <img src={igniteLogo} alt="logo" />
            <strong>IGnite Feed</strong>

        </div>
    )
}

export default Header