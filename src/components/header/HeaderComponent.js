import React, { useContext, useState } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';
import DropdownComponent from 'components/dropdown';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NormalDropDown from 'components/dropdown/NormalDropDown';

const useStyles = createUseStyles((theme) => ({
    title: {
        color: 'rgb(46, 50, 56)',

        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 600px)': {
            fontSize: 22
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
   
    container: {
        height: 40,
        position: 'sticky',
        top: '0',
        zIndex: '1',
        background: '#F2F4F9',
        padding: '2rem 30px'
    },
    analyticsBtn: {
        fontSize: '14px',
        justifyContent: 'end',

        '& span': {
            marginRight: '5px'
        }
    },
    icon: {
        fontSize: '1rem!important'
    },
    button:theme.color.buttonBlue
}));

function HeaderComponent() {
    // const { push } = useHistory();
    const { currentItem } = useContext(SidebarContext);
    const theme = useTheme();
    const classes = useStyles({ theme });
      let title;
    let addButton = { status: false, message: '' };
    let analytics = false;
    switch (true) {
        case currentItem === SLUGS.dashboard:
            title = 'Dashboard';
            break;
        case currentItem === SLUGS.sites:
            title = 'Sites';
            addButton = { status: true, message: 'Add site' };
            break;
        case currentItem === SLUGS.migrations:
            title = 'Migrations';
            break;
        case currentItem === SLUGS.dns:
            title = 'Kinda DNS';
            break;
        case currentItem === SLUGS.analytics:
            title = 'Analytics';
            analytics = true;
            break;
        case currentItem === SLUGS.company:
            title = 'Company';
            addButton = { status: true, message: 'Update plan' };

            break;
        case currentItem === SLUGS.users:
            title = 'Users Management';
            addButton = { status: true, message: 'Invite users' };

            break;
        case currentItem === SLUGS.activity:
            title = 'Activity Log';
            break;
        case currentItem === SLUGS.settings:
            title = 'Settings';
            break;
        case currentItem === SLUGS.profile:
            title = 'User Setting';
            break;
        default:
            title = '';
    }

    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
            <Row vertical='center'>
                {addButton.status && (
                    <button className={classes.button}>{addButton.message}</button>
                )}
            </Row>
            {analytics && (
                <Row className={classes.analyticsBtn} vertical='center'>
                    <span style={{ width: '170px' }}>Filter stats</span>
                    <DropdownComponent
                        label={{ input: true,button:false, search:true, mess: 'All sites', profile: false }}
                        options={[
                            {
                                label: 'ABX Guide'
                            },
                            {
                                label: 'ABX  fwfwf Guide'
                            },
                            {
                                label: 'ABX wfwf Guide'
                            },
                        ]}
                        position={{
                            up: 'top',
                            top: 40,
                            right: 0
                        }}
                    />
                    <DropdownComponent
                        label={{ input: false,button:true, mess: 'Past 24 hours', profile: false }}
                        options={[
                            {
                                label: 'Current month (Aug 20 to Sep 20)'
                            },
                            {
                                label: 'Past 30 days'
                            },
                            {
                                label: 'Past 7 days'
                            },
                            {
                                label: 'Past 24 hours'
                            }
                        ]}
                        position={{
                            up: 'top',
                            top: 40,
                            right: 0
                        }}
                    />
                </Row>
            )}
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
