import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from 'resources/theme';
import DropdownComponent from 'components/dropdown';
import Table from 'routes/Sites/Table';

const useStyles = createUseStyles({
    accountDiv: {
        background: 'white'
    },

    button: {
        ...theme.color.buttonTransparent,
        '@media (max-width: 800px)': {
            marginTop:'1rem'
           }
    },
    blueButton: {
        marginRight: '1.3rem',
        marginTop: '1rem',
        ...theme.color.buttonBlue
    },
    infoSec: {
        ...theme.color.infoSec
    },
    infoSecTitle: {
        ...theme.color.infoSecTitle
    },
    infoSecTitleTextBtn: {
        ...theme.color.infoSecTitleTextBtn
    },
    infoSecTitleText: {
        ...theme.color.infoSecTitleText
    },
    switch: {
        marginRight: '0.4rem',
        display: 'inline-block',
        position: 'relative',
        width: '45px',
        height: '23px',
        '& input': {
            '&:checked': {
                '& + span': {
                    backgroundColor: '#5333ED',
                    '&:before': {
                        transform: 'translateX(20px)'
                    }
                }
            }
        },
        '@media (max-width: 800px)': {
            marginTop:'1rem'
           }
    },
    slider: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundColor: '#8F97A3',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '3px',
            left: '4px',
            width: '17px',
            height: '17px',
            backgroundColor: 'white',
            transition: 'all 0.4s ease'
        }
    },

    round: {
        borderRadius: '34px',
        '&:before': {
            borderRadius: '50%'
        }
    },
    dFlex:{
        display:'flex',

        marginBottom:'5px'
    },
    text:{
        fontSize: '14px'
    },
    overageNotificationBtnBox :{
        width: '30%',
        '& div':{
            '& label':{
                marginTop:'0!important'
            }
        },
        '@media (max-width: 800px)': {
            width: '100%',
            marginTop:'1rem'
         }
    }
});

const Notification = () => {
    const classes = useStyles();
    return (
        <div className={classes.accountDiv}>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Overage notification</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        If you reach your plan's visits, CDN bandwidth, or disk space limits, we'll
                        keep your sites running but charge you an overage fee. We'll send you a
                        notification at 80% and 100% usage.
                    </p>
                    <div className={classes.overageNotificationBtnBox}>
                        <div className={classes.dFlex}>
                            <label className={classes.switch}>
                                <input hidden type='checkbox' defaultChecked/>
                                <span className={`${classes.slider} ${classes.round}`}></span>
                            </label>
                            <span className={classes.text}>Messages in MyKinsta</span>
                        </div>
                        <div className={classes.dFlex}>
                        <label className={classes.switch}>
                                <input hidden type='checkbox' defaultChecked/>
                                <span className={`${classes.slider} ${classes.round}`}></span>
                            </label>
                            <span className={classes.text}>Email (to </span>
                        </div>
                        <span className={classes.text}>
                        ashutosh.iiitd+kinsta@gmail.com)
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Newsletter subscription</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        Kinsta's newsletter is delivered weekly. It's all about WordPress news,
                        industry trends, and applicable tips on how to drive more traffic and
                        revenue to your business.
                    </p>
                    <button className={classes.button}>Subscribe</button>
                </div>
            </div>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Invoice in email</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        You can receive your invoices in email (to ashutosh.iiitd+kinsta@gmail.com)
                        attached as PDF. This is delivered for all companies where you have
                        permission to visit the Company section.
                    </p>

                    <label className={classes.switch}>
                        <input hidden type='checkbox' />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                </div>
            </div>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Beta Crew participation</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        This adds you to our list of Kinsta Beta testers. It means we may reach out
                        to you about an occasional survey or a quick usability testing session from
                        time to time. We appreciate all feedback and you can have a real impact on
                        how things work in MyKinsta.
                    </p>
                    <label className={classes.switch}>
                        <input hidden type='checkbox' />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                </div>
            </div>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Site monitoring</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        Automatic monitoring alerts in email (to ashutosh.iiitd+kinsta@gmail.com)
                        when your site needs critical attention. This includes downtime alerts, DNS
                        and SSL errors, domain expiry.
                    </p>
                    <label className={classes.switch}>
                        <input hidden type='checkbox' />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Notification;
