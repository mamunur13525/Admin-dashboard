import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import ManTypeCom from 'assets/img/ManTypeCom';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';

const useStyles = createUseStyles({
    content: {
        width: '45%',
        '@media (max-width: 767px)': {
            width: '100%'
        }
    },
    img: {
        width: '40%',
        '@media (max-width: 767px)': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
    },
    learnMoreBtn: {
        color: 'rgb(83, 51, 237)',
        fontSize: '14px',
        border: 'none',
        fontWeight: '600',
        margin: '1rem 0rem',
        padding: '0px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    },
    upgradeBtn: {
        border: 'none',
        color: 'rgb(255, 255, 255)',
        background: 'linear-gradient(90deg, rgba(17,134,235,1) 0%, rgba(83,51,237,1) 57%)',
        backgroundPosition: 'right center',
        backgroundSize: '200%',
        fontSize: '13px',
        padding: '.5rem 2rem',
        borderRadius: '22px',
        fontWeight: '600',
        marginBottom: '1rem',
        transition: 'all .3s',
        cursor: 'pointer',

        '&:hover': {
            background: 'linear-gradient(90deg, rgba(17,134,235,1) 0%, rgba(83,51,237,1) 100%)',
            boxShadow: 'rgb(83 51 237 / 32%) 0px 4px 8px 0px'
        }
    },
    normalText: {
        color: 'rgb(46, 50, 56)',
        fontSize: '14px',
        fontWeight: '400',
        '&:first-child':{
            marginTop: '3rem'
        },
        '@media (max-width: 767px)': {
            '&:first-child':{
                marginTop: '0px'
            },
        }
    },
    icon: {
        fontSize: '1rem!important',
        marginLeft: '5px',
        color: 'gray'
    }
});
const Migrations = () => {
    const classes = useStyles();

    return (
        <Column>
            <Row wrap flexGrow={1} horizontal='space-between' breakpoints={{ 767: 'column' }}>
                <div className={classes.content}>
                    <p className={classes.normalText}>
                        You cannot request a migration right now because you already have 1 site –
                        the maximum that your plan allows. If you want to request a migration,
                        please delete a site to free up a slot or upgrade to a higher plan.
                    </p>
                    <button className={classes.learnMoreBtn}>
                        Learn more <KeyboardTabIcon className={classes.icon} />
                    </button>
                    <button className={classes.upgradeBtn}>See upgrade options</button>
                    <p className={classes.normalText}>
                        After submitting a migration request, our technicians will take care of
                        moving your site to Kinsta. Read all about migrations at Kinsta in our
                    </p>
                    <button className={classes.learnMoreBtn}>
                        Knowledge Base <KeyboardTabIcon className={classes.icon} />
                    </button>
                </div>
                <div className={classes.img}>
                    <ManTypeCom />
                </div>
            </Row>
        </Column>
    );
};

export default Migrations;
