import logo from '@/assets/images/logo.webp'
import logoDark from '@/assets/images/logo.webp'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 , padding: '27px 16px'}}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Builder AI'
            />
        </div>
    )
}

export default Logo
