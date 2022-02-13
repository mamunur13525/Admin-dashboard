import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import RecourseCol from './RecourseCol';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = createUseStyles({
    cardsContainer: {
        marginTop: -30
    },
    cardRow: {
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        marginTop: '2rem',
        gridGap:'20px',
        '@media (max-width: 1250px)': {
        gridTemplateColumns: '1fr 1fr',
        width: '100%'
            
        },
        '@media (max-width: 845px)': {
        gridTemplateColumns: '1fr 2fr',

        },
        '@media (max-width: 720px)': {
            gridTemplateColumns: '1fr',
            gridRowsGap:'0px',

        }
    },
    miniCardContainer: {
        flexGrow: 1,

        '@media (max-width: 992px)': {
         marginTop:'2rem',
            marginRight: '0px'
        },
        '@media (max-width: 768px)': {
            maxWidth: 'none',
            marginTop:0
        },
       
    },
    todayTrends: {
        marginRight: 20
    },
    lastRow: {
        marginTop: 30,
        boxShadow: 'rgb(16 7 104 / 8%) 0px 1px 6px 0px',
        boxSizing: 'border-box',
        '@media (max-width: 992px)': {
            width: '100%'
        }
    },
    header: {
        display: 'flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        borderBottom: '1px solid rgb(242, 244, 249)',
        padding: '16px 24px',
        width: '100%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        display: 'flex',
        alignItems: 'center'
    },
    inputBox: {
        boxSizing: 'border-box',
        margin: '0px',
        padding: '0px',
        color: 'rgb(46, 50, 56)',
        fontSize: '12px',
        lineHeight: '1.5',
        listStyle: 'none',
        border: '1px solid rgb(209, 214, 223)',
        position: 'relative',
        background: 'rgb(255, 255, 255)',
        transition: 'all 0.3s ease 0s',
        boxShadow: 'rgb(16 7 104 / 8%) 0px 1px 6px 0px',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        padding: '0px 28px 0px 16px',
        transition: 'all 0.3s ease 0s',
        fontFamily: 'Roboto, Arial, sans-serif',
        color: 'rgb(46, 50, 56)',
        fontWeight: '400',
        width: '86%',
        fontSize: '14px',
        height: '40px',
        border: 'none',
        borderRadius: '100px',
        '&:focus': {
            border: 'none',
            outline: 'none'
        }
    },
    devider: {
        borderBottom: '1px solid #e2e2e2'
    },
    ulDiv: {
        width: '30%',
        padding: '1.4rem',
        borderLeft: '1px solid gray',
        height: '89%',
        marginTop: '1rem',
        paddingTop: '0.5rem',
        '@media (max-width: 767px)': {
            width: '100%',
            border: 'none'
        }
    },
    ul: {
        margin: 0,
        listStyle: 'none'
    },
    li: {
        fontSize: '14px',
        color: '#5333ED',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.9rem',
        marginLeft: '5px'
    },
    w100: {
        width: '100%'
    },
    dflex: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 767px)': {
            flexDirection: 'column'
        }
    },
    recourseCol: {
        display: 'flex',
        width: '80%',
        '@media (max-width: 767px)': {
            flexDirection: 'column',
            width: '100%'
        }
    },
    icon: {
        fontSize: '1rem!important',
        marginLeft: '5px'
    }
});

function DashboardComponent() {
    const classes = useStyles();
    return (
        <Column>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <div className={classes.cardRow}>
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Your sites'
                        subtitle='View all'
                        value='60'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Resource usage'
                        subtitle='Aug 20 – Sep 20'
                        value='60'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Notifications'
                        subtitle='View all'
                        value='16'
                    />
                </div>
            </Row>

            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <TodayTrendsComponent
                    containerStyles={classes.unresolvedTickets}
                    title='Data transfer'
                    date='Aug 16 – Aug 23'
                />
                <TodayTrendsComponent
                    containerStyles={classes.tasks}
                    title='Unique visits'
                    date='Aug 16 – Aug 23'
                />
            </Row>

            <Row
                horizontal='space-between'
                className={classes.lastRow}
                style={{ background: 'white' }}
                breakpoints={{ 1024: 'column' }}
            >
                <div className={classes.w100}>
                    <div className={classes.header}>
                        <p className={classes.title}>
                            Resource Center
                            <ExitToAppIcon className={classes.icon} />
                        </p>
                        <div className={classes.inputBox}>
                            <input
                                className={classes.input}
                                type='text'
                                placeholder='Search Recource Center'
                            />
                            <SearchIcon className={classes.icon} />
                        </div>
                    </div>
                    <div className={classes.devider}></div>

                    <div className={classes.dflex}>
                        <div className={classes.recourseCol}>
                            <RecourseCol
                                title='Website Security Check: Secure Your Website Against Malware and Spa'
                                img='https://kinsta.com/wp-content/uploads/2021/07/website-security-check.jpg'
                                date='August 20, 2021'
                            />
                            <RecourseCol
                                containerStyles={{ marginLeft: '0px', marginRight: '0px' }}
                                title='How to Fix the 414 Request-URI Too Large Error'
                                img='https://kinsta.com/wp-content/uploads/2021/07/414-request-uri-too-large.jpg'
                                date='August 20, 2021'
                            />
                            <RecourseCol
                                title='How to Fix the 414 Request-URI Too Large Error'
                                img='https://kinsta.com/wp-content/uploads/2021/07/html-best-practices.jpg'
                                date='August 20, 2021'
                            />
                        </div>
                        <div className={classes.ulDiv}>
                            <ul className={classes.ul}>
                                <li className={classes.li}>
                                    <span>Knowledge Base </span>
                                    <ExitToAppIcon className={classes.icon} />
                                </li>
                                <li className={classes.li}>
                                    <span>Feature updates </span>
                                    <ExitToAppIcon className={classes.icon} />
                                </li>
                                <li className={classes.li}>
                                    <span>System status </span>
                                    <ExitToAppIcon className={classes.icon} />
                                </li>
                                <li className={classes.li}>
                                    <span>Kinsta Blog </span>
                                    <ExitToAppIcon className={classes.icon} />
                                </li>
                                <li className={classes.li}>
                                    <span>Learn WordPress </span>
                                    <ExitToAppIcon className={classes.icon} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Row>
        </Column>
    );
}

export default DashboardComponent;
