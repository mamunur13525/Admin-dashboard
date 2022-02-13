import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Column } from 'simple-flexbox';
import Cache from './Cache';
import CDNUsage from './CDNUsage';
import Dispersion from './Dispersion';
import GeoIP from './GeoIP';
import Performance from './Performance';
import Resources from './Resources';
import Response from './Response';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
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
        ...theme.divSection.ul
    },
    li: {
        ...theme.divSection.li
    }
});

const Analytics = () => {
    const classes = useStyles();
    const [contentTitle, setcontentTitle] = useState('Resources');
    let { path, url } = useRouteMatch();
    console.log({ contentTitle });

    return (
        <Router>
            <Column>
                <div className={classes.main}>
                    <div className={classes.firstDiv}>
                        <ul style={{ marginTop: '1rem' }} className={classes.ul}>
                            <Link to={`${url}/Resources`}>
                                <li
                                    style={contentTitle === 'Resources' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Resources')}
                                    className={classes.li}
                                >
                                    Resources
                                </li>
                            </Link>
                            <Link to={`${url}/CDN-Usage`}>
                                <li
                                    style={contentTitle === 'CDN Usage' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('CDN Usage')}
                                    className={classes.li}
                                >
                                    CDN Usage
                                </li>
                            </Link>
                            <Link to={`${url}/Dispersion`}>
                                <li
                                    style={contentTitle === 'Dispersion' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Dispersion')}
                                    className={classes.li}
                                >
                                    Dispersion
                                </li>
                            </Link>
                            <Link to={`${url}/Performance`}>
                                <li
                                    style={contentTitle === 'Performance' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Performance')}
                                    className={classes.li}
                                >
                                    Performance
                                </li>
                            </Link>
                            <Link to={`${url}/Response`}>
                                <li
                                    style={contentTitle === 'Response' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Response')}
                                    className={classes.li}
                                >
                                    Response
                                </li>
                            </Link>
                            <Link to={`${url}/Cache`}>
                                <li
                                    style={contentTitle === 'Cache' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Cache')}
                                    className={classes.li}
                                >
                                    Cache
                                </li>
                            </Link>
                            <Link to={`${url}/Geo&IP`}>
                                <li
                                    style={contentTitle === 'Geo & IP' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Geo & IP')}
                                    className={classes.li}
                                >
                                    Geo & IP
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className={classes.secondDiv}>
                        <Switch>
                            <Route exact path={`${path}/`}>
                                <Resources />
                            </Route>
                            <Route path={`${path}/Resources`}>
                                <Resources />
                            </Route>
                            <Route path={`${path}/CDN-Usage`}>
                                <CDNUsage />
                            </Route>
                            <Route path={`${path}/Dispersion`}>
                                <Dispersion />
                            </Route>
                            <Route path={`${path}/Performance`}>
                                <Performance />
                            </Route>
                            <Route path={`${path}/Response`}>
                                <Response />
                            </Route>
                            <Route path={`${path}/Cache`}>
                                <Cache />
                            </Route>
                            <Route path={`${path}/Geo&IP`}>
                                <GeoIP />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Column>
        </Router>
    );
};

export default Analytics;
