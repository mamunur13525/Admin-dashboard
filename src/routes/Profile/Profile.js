import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Column } from 'simple-flexbox';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import MyAccount from './MyAccount';
import Access from './Access';
import Notification from './Notification';
import theme from 'resources/theme';
const useStyles = createUseStyles({
    main: {
        ...theme.divSection.main
    },
    firstDiv: {
        ...theme.divSection.firstDiv
    },
    secondDiv: {
        ...theme.divSection.secondDiv
    },
    ul: {
        ...theme.divSection.ul,
        '@media (max-width: 884px)': {
            display:'flex',
            justifyContent: 'start'
        }
    },
    li: {
        ...theme.divSection.li
    }
});

const Profile = () => {
    const classes = useStyles();
    const [contentTitle, setContentTitle] = useState('Resources');
    let { path, url } = useRouteMatch();
    console.log({ contentTitle });

    return (
        <Router>
            <Column>
                <div className={classes.main}>
                    <div className={classes.firstDiv}>
                        <ul className={classes.ul}>
                            <Link to={`${url}/myAccount`}>
                                <li
                                    style={contentTitle === 'myAccount' ? { color: 'black' } : {}}
                                    onClick={() => setContentTitle('myAccount')}
                                    className={classes.li}
                                >
                                    My Account
                                </li>
                            </Link>
                            <Link to={`${url}/access`}>
                                <li
                                    style={contentTitle === 'access' ? { color: 'black' } : {}}
                                    onClick={() => setContentTitle('access')}
                                    className={classes.li}
                                >
                                    Access
                                </li>
                            </Link>
                            <Link to={`${url}/notification`}>
                                <li
                                    style={
                                        contentTitle === 'notification' ? { color: 'black' } : {}
                                    }
                                    onClick={() => setContentTitle('notification')}
                                    className={classes.li}
                                >
                                    Notifications
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className={classes.secondDiv}>
                        <Switch>
                            <Route exact path={`${path}/`}>
                                <MyAccount />
                            </Route>
                            <Route path={`${path}/myAccount`}>
                                <MyAccount />
                            </Route>
                            <Route path={`${path}/access`}>
                                <Access />
                            </Route>
                            <Route path={`${path}/notification`}>
                                <Notification />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Column>
        </Router>
    );
};

export default Profile;
