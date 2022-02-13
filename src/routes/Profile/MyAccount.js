import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from 'resources/theme';
import DropdownComponent from 'components/dropdown';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
const useStyles = createUseStyles({
    accountDiv: {
        background: 'white',
        '@media (max-width: 800px)': {
            padding: '0 0.6rem'
        }
    },
    header: {
        padding: '2rem',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        margin: '0px'
    },
    imgForm: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        '& img': {
            borderRadius: '50%',
            width: '130px',
            margin: 'auto',
            marginTop: '2rem'
        },
        '@media (max-width: 800px)': {
            gridTemplateColumns: '1fr'
        }
    },
    inputTitle: {
        color: 'rgb(46, 50, 56)',
        fontSize: '14px',
        fontWeight: 600,
        marginBottom: '.1rem'
    },
    titleInput: {
        width: '100%',
        marginBottom: '1rem',
        marginLeft: '0.3rem',
        display: 'flex',
        justifyContent: 'flex-end',
        '@media (max-width: 800px)': {
            flexDirection: 'column',
            width: '98%'
        }
    },
    inputBox: {
        width: '100%',
        marginRight: '1rem'
    },
    language: {
        width: '100%',
        marginRight: '1rem'
    },
    input: {
        width: '100%',
        border: '1px solid rgb(209, 214, 223)',
        padding: '0px 16px',
        // borderRadius: '4px',
        transition: 'all 0.3s ease 0s',
        fontFamily: 'Roboto, Arial, sans-serif',
        color: 'rgb(46, 50, 56)',
        fontWeight: '400',
        fontSize: '14px',
        height: '40px',
        borderRadius: '20px',
        '&:hover': {
            borderColor: 'rgb(74, 46, 208)'
        },
        '&:focus': {
            border: '2px solid rgb(74, 46, 208)',
            outline: 'none'
        },
        '@media (max-width: 800px)': {
            width: '100%!important'
        }
    },
    inputButton: {
        width: '100%',
        display: 'flex',
        '& input': {
            width: '78%',
            marginRight: '2%'
        },
        '@media (max-width: 800px)': {
            flexDirection: 'column'
        }
    },
    button: {
        ...theme.color.buttonTransparent,
        '@media (max-width: 800px)': {
            width: '40%',
            marginTop: '1rem'
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
        ...theme.color.infoSecTitleTextBtn,
       
    },
    infoSecTitleText: {
        ...theme.color.infoSecTitleText,
     
    },
    spanText: {
        color: '#492CD3',
        fontWeight: '600',
        marginTop: '.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor:'pointer',
        '& span':{
            marginRight:'.2rem'
        },
        
    }
});

const MyAccount = () => {
    const classes = useStyles();
    return (
        <div className={classes.accountDiv}>
            <p className={classes.header}>Account Setting</p>
            <div className={classes.imgForm}>
                <div className={classes.imgDiv}>
                    {' '}
                    <img
                        src='https://www.gravatar.com/avatar/a44be827447e1374a16777915d308070?s=200'
                        alt='logo'
                    />
                    <span className={classes.spanText}>
                        <span >Edit at Gravatar.com</span>
                        <OpenInNewIcon style={theme.color.icon} />
                    </span>
                </div>
                <form className={classes.form}>
                    <div className={classes.titleInput}>
                        <div className={classes.inputBox}>
                            <p className={classes.inputTitle}>Email addres</p>
                            <div className={classes.inputButton}>
                                <input className={classes.input} type='text' />
                                <button className={classes.button}>change password</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.titleInput}>
                        <div className={classes.inputBox}>
                            <p className={classes.inputTitle}>First name</p>
                            <input className={classes.input} type='text' />
                        </div>
                        <div className={classes.inputBox}>
                            <p className={classes.inputTitle}>last name</p>
                            <input className={classes.input} type='text' />
                        </div>
                    </div>
                    <div className={classes.titleInput}>
                        <div className={classes.language}>
                            <p className={classes.inputTitle}>Language</p>
                            <DropdownComponent
                                className={classes.inputClass}
                                label={{
                                    input: false,
                                    button: true,
                                    mess: 'English',
                                    profile: false
                                }}
                                options={[
                                    {
                                        label: 'Dansk'
                                    },
                                    {
                                        label: 'Deutsch'
                                    },
                                    {
                                        label: 'English'
                                    },
                                    {
                                        label: 'Espanl'
                                    },
                                    {
                                        label: 'Francais'
                                    },
                                    {
                                        label: 'Italiano'
                                    },
                                    {
                                        label: 'China'
                                    },
                                    {
                                        label: 'Nederlands'
                                    },
                                    {
                                        label: 'Portugues'
                                    }
                                ]}
                                position={{
                                    up: 'top',
                                    top: 40,
                                    right: 0
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.titleInput}>
                        <button className={classes.blueButton}>Save changes</button>
                    </div>
                </form>
            </div>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Two-factor authentication</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        Use an authenticator app (e.g. Google Authenticator) on your phone to
                        generate verification codes
                    </p>
                    <button className={classes.button}>Begin Setup</button>
                </div>
            </div>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>SSH keys</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                        SSH access allows you to log into a command prompt, perform common sysadmin
                        tasks, and execute commands just as if you were sitting at the server
                        itself. You also have the ability to run additional tools such as Git,
                        Composer, npm, WP-CLI, etc.
                    </p>
                    <button className={classes.button}>Add SSH Key</button>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
