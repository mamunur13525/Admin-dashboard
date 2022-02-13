import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DropdownComponent from 'components/dropdown';
const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    companyName: {
        display: 'flex',
        padding: '1rem',
        fontSize: '0.8rem',
        width: '100%',
        justifyContent: 'space-around',
        paddingRight: '0px',
        alignItems:'center'
    },
    logOut: {
        bottom: '1.5rem',
        position: 'absolute',
        color: 'white',
        width: '80%',
        marginLeft: '1rem',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1rem!important'
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;
    const [userMenuOpen, setUserMenuOpen] = useState({ status: false, value: '' });

    async function logout() {
        // push(SLUGS.login);
        console.log('click');
    }

    function onClick(slug, parameters = {}) {
      
        push(convertSlugToUrl(slug, parameters));
    }

    const clickFunction=({label})=>{
        if(label === 'Log out'){

        }else{
            console.log('click on profile')
            push(convertSlugToUrl(SLUGS.profile, {}));
        }
   
    }
    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
                <p className={classes.companyName}>
                    <span>Ashutosh's Company</span>
                    <NotificationsIcon className={classes.icon} />
                </p>
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />

            <MenuItem
                id={SLUGS.sites}
                title='Sites'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.sites)}
            />

            <MenuItem
                id={SLUGS.migrations}
                title='Migrations'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.migrations)}
            />
            <MenuItem
                id={SLUGS.dns}
                title='Kinsta DNS'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.dns)}
            />
            <MenuItem
                id={SLUGS.analytics}
                title='Analytics'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.analytics)}
            />
            <MenuItem
                id={SLUGS.company}
                title='Company'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.company)}
            />
            <MenuItem
                id={SLUGS.users}
                title='Users'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.users)}
            />
            <MenuItem
                id={SLUGS.activity}
                title='Activity Log'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.activity)}
            />
            <div className={classes.logOut}>
            <DropdownComponent
                        label={{input:false,button:false, mess:'All sites', profile:true}}
                        options={[
                            {
                                label: 'User Setting'
                            },
                            {
                                label: 'Log out'
                            },
                        ]}
                        clickFunction={clickFunction}
                        position={{
                            up: 'bottom',
                            bottom: 40,
                            right: -6
                        }}
                    />
            </div>
        </Menu>
    );
}

export default SidebarComponent;
