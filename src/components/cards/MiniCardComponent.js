import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { Doughnut,Line } from 'react-chartjs-2';

const useStyles = createUseStyles((theme) => ({
    container: {
        boxSizing: 'border-box',
        margin: '0px',
        color: 'rgb(46, 50, 56)',
        fontSize: '12px',
        lineHeight: '1.5',
        listStyle: 'none',
        position: 'relative',
        background: 'rgb(255, 255, 255)',
        transition: 'all 0.3s ease 0s',
        boxShadow: 'rgb(16 7 104 / 8%) 0px 1px 6px 0px',
        borderRadius: '4px',
        borderTop: 'none'
    },
    title: {
        ...theme.typography.cardTitle,

        minWidth: 102,
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: theme.color.pisblack
    },
    subtitle: {
        fontFamily: 'Roboto, Arial, sans-serif',
        color: 'rgb(83, 51, 237)',
        fontSize: '14px',
        fontWeight: '500'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
        padding: '16px 24px'
    },
    ul: {
        margin: '0px',
        listStyle: 'none'
    },

    li: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: ' 1px solid #efefef',
        alignItems: 'center',
        padding: '24px',
        transition: 'all .3s',
        '&:hover': {
            background: 'rgb(242, 244, 249)'
        }
    },
    header_li: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        background: 'rgb(248, 250, 252)',
        fontSize: '11px',
        borderTop: '1px solid rgb(242, 244, 249)',
        borderBottom: '1px solid rgb(242, 244, 249)',
        color: 'rgb(143, 151, 163)',
        whiteSpace: 'nowrap',
        wordBreak: 'inherit',
        padding: '16px 24px'
    },
    link: {
        color: 'rgb(83, 51, 237)',
        textTransform: 'capitalize',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '14px'
    },
    padding: {
        padding: '16px 24px'
    },
    Resource_ul: {
        listStyle: 'none'
    },
    Resource_li: {
        padding: '.4rem',
        fontSize: ' 17px'
    },
    Resource_p: {
        fontWeight: ' 600'
    },
    circle_block: {
        display: 'flex',
        alignItems: 'center'
    },
    notififcationBox: {
        '@media (max-width: 1214px)': {
            gridColumn: '1/-1'
        },
        '@media (max-width: 992px)': {
            width: '100%'
        }
    },
    notificationClass: {
        width: '60%',
        color: 'rgb(46, 50, 56)',
        fontSize: '15px',
        fontWeight: 400,
       
    },
    notificatonSpann: {
        color: 'rgb(143, 151, 163)'
    },
    color:{
        height: '15px',
        width: '21px',
        marginRight: '5px',
        borderRadius: '41%',
        display: 'block'
    }
}));

function MiniCardComponent({ className = '', title, value, subtitle }) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    let composedClassName = [classes.container, className].join(' ');

    if (title === 'Notifications') {
        composedClassName = [classes.container, classes.notififcationBox].join(' ');
    }

    return (
        <Column flexGrow={1} className={composedClassName}>
            <div className={classes.header}>
                <span className={classes.title}>{title}</span>
                <span className={classes.subtitle}>{subtitle}</span>
            </div>
            {title === 'Your sites' && <YourSites />}
            {title === 'Resource usage' && <Resource />}
            {title === 'Notifications' && <Notifications />}
        </Column>
    );
}

export default MiniCardComponent;

const YourSites = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const headerClass = [classes.li, classes.header_li].join(' ');

    return (
        <>
            <ul className={classes.ul}>
                <li className={headerClass}>
                    <span>Name</span>
                    <span>Visits</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.link}>hello world</span>
                    <span>12</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.link}>hello world</span>
                    <span>08</span>
                </li>
                <li className={classes.li}>
                    <span className={classes.link}>hello world</span>
                    <span>21</span>
                </li>
            </ul>
        </>
    );
};
const Resource = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });
  const   data= {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [200,150,100,50],
            backgroundColor: [
                'rgba(83, 51, 237)',
                'rgba(44, 212, 217)',
                '#FF0000',
                '#008000'
             
            ],
            borderColor: [
                'rgba(83, 51, 237)',
                'rgba(44, 212, 217)',
                '#FF0000',
                '#008000'
            ],
            borderWidth: 3
        }]
    }

    return (
        <Row className={classes.padding} horizontal='space-between'>
                <div style={{width:'176px'}}>
                <Doughnut data={data} />
                </div>

            <ul className={classes.Resource_ul}>
                <li className={classes.Resource_li}>
                    <p className={classes.Resource_p}>This month</p>
                    <div className={classes.circle_block}>
                        <span className={classes.color}
                            style={{
                                background: 'green',
                            }}
                        ></span>
                        <span>Day 4 out of 31</span>
                    </div>
                </li>
                <li className={classes.Resource_li}>
                    <p className={classes.Resource_p}>Visits</p>
                    <div className={classes.circle_block}>
                        <span className={classes.color}
                            style={{
                                background: 'red',
                            }}
                        ></span>
                        <span>11 out of 25,000</span>
                    </div>
                </li>
                <li className={classes.Resource_li}>
                    <p className={classes.Resource_p}>CDN usage</p>
                    <div className={classes.circle_block}>
                        <span className={classes.color}
                            style={{
                                background: 'blue',
                            }}
                        ></span>
                        <span>0 B out of 50 GB</span>
                    </div>
                </li>
                <li className={classes.Resource_li}>
                    <p className={classes.Resource_p}>Disk usage</p>
                    <div className={classes.circle_block}>
                        <span className={classes.color}
                            style={{
                                background: '#5333ED',
                                height: '15px',
                                width: '21px',
                                marginRight: '5px',
                                borderRadius: '41%',
                                display: 'block'
                            }}
                        ></span>
                        <span>386.04 MB out of 10 GB</span>
                    </div>
                </li>
            </ul>
        </Row>
    );
};
const Notifications = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <ul className={classes.ul}>
            <li className={classes.li}>
                <span className={`${classes.link}  ${classes.notificationClass}`}>
                    Downloadable backup ready for ABX Guide (Live)
                </span>
                <span className={classes.notificatonSpann}>Aug 22</span>
            </li>
            <li className={classes.li}>
                <span className={`${classes.link}  ${classes.notificationClass}`}>
                    Verification still pending for abxguide.com
                </span>
                <span className={classes.notificatonSpann}>Aug 21</span>
            </li>
            <li className={classes.li}>
                <span className={`${classes.link}  ${classes.notificationClass}`}>
                    Go live with your new site
                </span>
                <span className={classes.notificatonSpann}>Aug 21</span>
            </li>
            <li className={classes.li}>
                <span className={`${classes.link}  ${classes.notificationClass}`}>
                    Hosting plan has been paid (30 USD)
                </span>
                <span className={classes.notificatonSpann}>Aug 21</span>
            </li>
            <li className={classes.li}>
                <span className={`${classes.link}  ${classes.notificationClass}`}>
                    Welcome to Kinsta! Here's how to get started.
                </span>
                <span className={classes.notificatonSpann}>Aug 21</span>
            </li>
        </ul>
    );
};
