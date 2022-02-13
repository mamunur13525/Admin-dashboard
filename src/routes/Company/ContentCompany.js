import React from 'react';
import { createUseStyles } from 'react-jss';
import Table from 'routes/Sites/Table';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import theme from 'resources/theme';
const useStyles = createUseStyles({
  
    box: {
        margin: '1px 0px',
        padding: '3rem 2.7rem',
        borderTop: '0.5px solid #e2e2e2',
        borderBottom: '0.5px solid #e2e2e2'
    },
    boxTitle: {
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        margin: '0px',
        marginBottom: '1rem'
    },
    boxContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 650px)': {
            flexDirection:'column',
            justifyContent:'start',
            alignItems: 'start',
            '& button':{
                marginTop:"1rem"
            }
        },
    },
    para: {
        color: 'rgb(143, 151, 163)',
        fontSize: '1rem'
    },
   
    cancelPlan: {
       ...theme.color.cancelBtn
    },
    outsideBox: {
        display: 'flex',
        padding: '2rem',
        '@media (max-width: 650px)': {
            flexDirection:'column'
        },
    },
    cardBox: {
        boxSizing: 'border-box',
        margin: '0px',
        color: 'rgb(46, 50, 56)',
        lineHeight: '1.5',
        listStyle: 'none',
        position: 'relative',
        background: 'rgb(255, 255, 255)',
        transition: 'all 0.3s ease 0s',
        boxShadow: 'rgb(16 7 104 / 8%) 0px 1px 6px 0px',
        borderRadius: '4px',
        borderTop: 'none',
        fontSize: '14px',
        padding: '2rem 2rem',
        marginRight: '1rem',
        '@media (min-width: 1150px)': {
            width:'40%',
        },
        '@media (max-width: 1150px)': {
            width:'100%',
        },
        '@media (max-width: 650px)': {
            width:'100%',
            marginTop:'1rem'
        },
    },
    upadte: {
        textAlign: 'right',
        marginBottom: '.5rem',
        color: 'rgb(83, 51, 237)',
        fontWeight: 600,
        cursor: 'pointer'
    },
    expireCard: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    number: { marginBottom: '.5rem' },
    billingForm: {
        padding: '1rem'
    },
    dFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        '@media (max-width: 800px)': {
            '&:first-child':{
                flexDirection:'column',
                marginBottom:'0px'
            }
            
        },
    },
    w50: {
        width: '50%',
        marginRight: '1rem',
         '@media (max-width: 800px)': {
                width: '100%',
                marginTop:'1rem'
            
        },
    },
    w100: {
        width: '100%',
        marginRight: '1rem'
    },
    input: {
        width: '100%',
        border: '1px solid rgb(209, 214, 223)',
        padding: '10px 16px',
        borderRadius: '4px',
        transition: 'all 0.3s ease 0s',
        fontFamily: 'Roboto, Arial, sans-serif',
        color: 'rgb(46, 50, 56)',
        fontWeight: '400',
        fontSize: '14px',
        height: '40px',
        '&:hover': {
            borderColor: 'rgb(74, 46, 208)'
        },
        '&:focus': {
            outlineColor: 'rgb(74, 46, 208)'
        }
    },
    name: {
        color: 'rgb(46, 50, 56)',
        fontSize: '14px',
        fontWeight: '600',
        marginBottom: '0.3rem',
        display:'flex',
        alignItems:'center'
    },
    borderNone: {
        borderRadius: 0,
        paddingLeft: '4px',
        paddingRight: '20px',
        cursor: 'pointer',
        '& input': {
            opacity: 0
        }
    },
    submitBtn: {
        fontSize: '1rem',
        borderRadius: '80px',
        height: '40px',
        padding: '0px 32px',
        outline: 'none',
        border: 'none',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'all 0.25s ease 0s',
        background: '#5333ED',
        backgroundPosition: 'right center',
        backgroundSize: '200%',
        color: 'white',
        '&:hover': {
            background: 'linear-gradient(90deg, rgba(17,134,235,1) 0%, rgba(83,51,237,1) 57%)',
            boxShadow: 'rgb(83 51 237 / 32%) 0px 4px 8px 0px'
        }
    },
    btnDiv: {
        marginTop: '3rem',
        textAlign: 'right',
        marginBottom: '0.5rem'
    },
    icon:{
        fontSize:'1rem!important',
        marginLeft:'5px'
    },
    button:{...theme.color.buttonTransparent}
    
});

const ContentCompany = ({ title }) => {
    const classes = useStyles({theme});
   
    let headerTitle = 'My hosting plan and add-ons';
    switch (title) {
        case 'Myplan':
            headerTitle = 'My hosting plan and add-ons';
            break;
        case 'Invoices':
            headerTitle = 'Invoices';
            break;
        case 'Payment Methods':
            headerTitle = 'Payment Methods';
            break;
        case 'Billing Details':
            headerTitle = 'Billing Details';
            break;
        case 'SiteLabels':
            headerTitle = 'Site Labels';
            break;

        default:
            break;
    }
    let { path, url } = useRouteMatch();

    console.log({ title });
    return (
        <div>
          
         
        </div>
    );
};

export default ContentCompany;

export const Myplan = () => {
    const classes = useStyles({theme});
    return (
        <>
            <Table tableName='hosting' />
            <div className={classes.box}>
                <p className={classes.boxTitle}>Disk space add on</p>
                <div className={classes.boxContent}>
                    <p className={classes.para}>
                        Extend your plan’s disk space with a monthly add-on.
                        <br />
                        You have 10 GB available disk space in your plan. <HelpOutlineOutlinedIcon className={classes.icon}/>
                    </p>
                    <button className={classes.button}>Add to plan</button>
                </div>
            </div>
            <div className={classes.box}>
                <p className={classes.boxTitle}>External Backups</p>
                <div className={classes.boxContent}>
                    <p className={classes.para}>
                        Upload your live environments’ backups to external providers. <HelpOutlineOutlinedIcon className={classes.icon}/>
                    </p>
                </div>
            </div>
            <div className={classes.box}>
                <p className={classes.boxTitle}>Cancel hosting plan</p>
                <div className={classes.boxContent}>
                    <p className={classes.para}>
                        Cancelling your plan will permanently delete your site from MyKinsta. This
                        action <br />
                        cannot be undone, our support staff won’t be able to help. So please be
                        absolutely <br /> certain you are ready to proceed.
                    </p>
                    <button className={` ${classes.cancelPlan}`}>
                        Cancel Plan
                    </button>
                </div>
            </div>
        </>
    );
};
export const Invoices = () => {
    return (
        <div style={{overflowX:'auto'}}>
            <Table tableName='invoice' />
        </div>
    );
};
export const SiteLabels = () => {
    return (
        <>
            <Table tableName='siteLabels' />
        </>
    );
};
export const Payments = () => {
    const classes = useStyles();
    return (
        <div className={classes.outsideBox}>
            <div className={classes.cardBox}>
                <p className={classes.upadte}>Update</p>
                <p className={classes.name}>Ashutosh Kumar</p>
                <p className={classes.number}>**** 9385</p>
                <div className={classes.expireCard}>
                    <p>9/25</p>
                    <CreditCardIcon/>
                </div>
            </div>
            <div className={classes.cardBox}>
                <p style={{ marginTop: '1rem' }} className={classes.name}>
                    Premium Migration Credits
                  <HelpOutlineOutlinedIcon  className={classes.icon}/>

                </p>
                <div style={{ marginTop: '2rem' }} className={classes.expireCard}>
                    <p>1 migration</p>
                    <span>icon</span>
                </div>
            </div>
        </div>
    );
};
export const BillingDetails = () => {
    const classes = useStyles();
    const submit = () => {};
    return (
        <div className={classes.billingForm}>
            <form onSubmit={submit} className={classes.form}>
                <div className={classes.dFlex}>
                    <div className={classes.w50}>
                        <p className={classes.name}>Company name</p>
                        <input
                            className={classes.input}
                            defaultValue='Ashutosh Company'
                            name='company_name'
                            type='text'
                        />
                    </div>
                    <div className={classes.w50}>
                        <p className={classes.name}>Company name</p>
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: '#F8FAFC',
                                border: 'none',
                                justifyContent: 'space-between'
                            }}
                            className={classes.input}
                        >
                            <span>efcaaa90-e6ee-420a-a3db-acee5cdc09fc</span>
                            <span>ico</span>
                        </span>
                    </div>
                </div>
                <div className={classes.dFlex}>
                    <div className={classes.w50}>
                        <p style={{ marginBottom: '0.6rem' }} className={classes.name}>
                            Company name
                        </p>
                        <label className={`${classes.input} ${classes.borderNone}`} htmlFor='0'>
                            <input type='radio' name='Organization_type' id='0' />
                            <span>Individual</span>
                        </label>

                        <label className={`${classes.input} ${classes.borderNone}`} htmlFor='1'>
                            <input type='radio' name='Organization_type' id='1' />
                            <span>Company</span>
                        </label>
                    </div>
                </div>
                <div className={classes.dFlex}>
                    <div className={classes.w100}>
                        <p className={classes.name}>Billin name</p>
                        <input
                            className={classes.input}
                            defaultValue='Ashutosh Company'
                            name='billing_name'
                            type='text'
                        />
                    </div>
                </div>

                <div className={classes.dFlex}>
                    <div className={classes.w50}>
                        <p className={classes.name}>Country</p>
                        <input
                            className={classes.input}
                            defaultValue='Ashutosh Company'
                            name='country'
                            type='text'
                        />
                    </div>
                    <div className={classes.w50}>
                        <p className={classes.name}>State</p>
                        <input
                            className={classes.input}
                            defaultValue='Delhi'
                            name='state'
                            type='text'
                        />
                    </div>
                </div>
                <div className={classes.dFlex}>
                    <div className={classes.w50}>
                        <p className={classes.name}>Address line 1</p>
                        <input
                            className={classes.input}
                            defaultValue='W3Dev, Incubation Center, IIIT Delhi, Okhla Phase 3'
                            name='address_1'
                            type='text'
                        />
                    </div>
                    <div className={classes.w50}>
                        <p className={classes.name}>Address line 2</p>
                        <input
                            className={classes.input}
                            defaultValue='Delhi'
                            name='address_2'
                            type='text'
                        />
                    </div>
                </div>
                <div className={classes.dFlex}>
                    <div className={classes.w50}>
                        <p className={classes.name}>City</p>
                        <input
                            className={classes.input}
                            defaultValue='Delhi'
                            name='city'
                            type='text'
                        />
                    </div>
                    <div className={classes.w50}>
                        <p className={classes.name}>Zip</p>
                        <input
                            className={classes.input}
                            defaultValue='110020'
                            name='zip'
                            type='text'
                        /> 
                    </div>
                </div>
                <div className={classes.dFlex}>
                    <div className={classes.w100}>
                        <p className={classes.name}>GSTIN</p>
                        <input className={classes.input} defaultValue='' name='gstin' type='text' />
                    </div>
                </div>
                <div className={classes.btnDiv}>
                    <button className={classes.submitBtn}>Save changes</button>
                </div>
            </form>
        </div>
    );
};
