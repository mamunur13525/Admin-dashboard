import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Column } from 'simple-flexbox';
import ContentCompany, { BillingDetails, Invoices, Myplan, Payments, SiteLabels } from './ContentCompany';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import theme from 'resources/theme';

const useStyles = createUseStyles({
    p: {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        padding: '21px 25px',
        borderBottom: '1px solid rgb(242, 244, 249)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
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

    },
    button: {
        display: 'inline-flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        borderRadius: '80px',
        height: '40px',
        padding: '0px 32px',
        outline: 'none',
        border: '1px solid rgb(209, 214, 223)',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'all 0.25s ease 0s',
        backgroundColor: 'transparent',
        fontWeight: 600,
        fontSize: '0.8rem',
        '&:hover': {
            borderColor: 'rgb(83, 51, 237)',
            color: 'rgb(83, 51, 237)'
        }
    },
});

const Company = () => {
    const classes = useStyles();
    const [contentTitle, setcontentTitle] = useState('MyPlan');
    let { path, url } = useRouteMatch();

    console.log({ contentTitle });
    return (
        <Router>
            <Column>
                <div className={classes.main}>
                    <div className={classes.firstDiv}>
                        <ul style={{ marginTop: '1rem' }} className={classes.ul}>
                            <Link to={`${url}/MyPlan`}>
                                <li
                                    style={contentTitle === 'MyPlan' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('MyPlan')}
                                    className={classes.li}
                                >
                                    My plan
                                </li>
                            </Link>
                            <Link to={`${url}/Invoices`}>
                                <li
                                    style={contentTitle === 'Invoices' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('Invoices')}
                                    className={classes.li}
                                >
                                    Invoices
                                </li>
                            </Link>
                            <Link to={`${url}/PaymentMethods`}>
                                <li
                                    style={
                                        contentTitle === 'Payment Methods' ? { color: 'black' } : {}
                                    }
                                    onClick={() => setcontentTitle('Payment Methods')}
                                    className={classes.li}
                                >
                                    Payment Methods
                                </li>
                            </Link>
                            <Link to={`${url}/Billing-Details`}>
                                <li
                                    style={
                                        contentTitle === 'Billing Details' ? { color: 'black' } : {}
                                    }
                                    onClick={() => setcontentTitle('Billing Details')}
                                    className={classes.li}
                                >
                                    Billing Details
                                </li>
                            </Link>
                            <Link to={`${url}/SiteLabels`}>
                                <li
                                    style={contentTitle === 'SiteLabels' ? { color: 'black' } : {}}
                                    onClick={() => setcontentTitle('SiteLabels')}
                                    className={classes.li}
                                >
                                    Site Labels
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className={classes.secondDiv}>
                        <ContentCompany title={contentTitle} />
                        <p className={classes.p}>
                            <span>{contentTitle}</span>
                            {contentTitle === 'Payment Methods' && (
                                <button className={classes.button}>Add payment method</button>
                            )}
                            {contentTitle === 'SiteLabels' && (
                                <button className={classes.button}>Add new label</button>
                            )}
                        </p>
                        <Switch>
                            <Route path={`${path}/`}>
                                <Myplan />
                            </Route>
                            <Route path={`${path}/MyPlan`}>
                                <Myplan />
                            </Route>
                            <Route path={`${path}/Invoices`}>
                                <Invoices />
                            </Route>
                            <Route path={`${path}/PaymentMethods`}>
                                <Payments />
                            </Route>
                            <Route path={`${path}/Billing-Details`}>
                                <BillingDetails />
                            </Route>
                            <Route path={`${path}/SiteLabels`}>
                                <SiteLabels />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Column>
        </Router>
    );
};

export default Company;
