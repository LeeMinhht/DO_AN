
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/Component/Icons'
import config from '~/config';
import SuggestedAccounts from '~/Component/SuggestedAccounts';


const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <div className={cx('sidebar-container')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
                <MenuItem title="Profile" to={config.routes.profile} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Product" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />

            </Menu>


            {/* <SuggestedAccounts label='Suggested Accounts'/>   */}
        </div>
        {/* <SuggestedAccounts label='Following accounts'/>  */}
    </aside>
}

export default Sidebar;