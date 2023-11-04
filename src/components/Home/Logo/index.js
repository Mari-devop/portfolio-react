import './index.scss'

import LogoS from '../../../assets/images/logo-2.png'

const Logo = () => {
  

    return(
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt='big-logo'/>
        </div>
    )
}

export default Logo