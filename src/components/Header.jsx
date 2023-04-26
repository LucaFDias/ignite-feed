import igniteLogo from '../assets/img/logo-ignite.png'
import Styles from './Header.module.css'
function Header() {
    return (
        <div className={Styles.header}>
            <img src={igniteLogo} alt="logo" />
        </div>
    )
}

export default Header