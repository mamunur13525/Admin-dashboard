import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = createUseStyles({
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
        borderTop: 'none',
        padding: '16px',
        marginTop: '1rem'
    },
    para: {
        color: 'rgb(46, 50, 56)',
        fontSize: '14px'
    },
    input: {
        border: 'none',
        borderRadius: '20px',
        padding: '0.6rem 0.9rem',
        fontSize: '13px',
        fontWeight: 'bold',
        width: '100%',
        '&:hover ': {
            color: '#5333ED',
            borderColor: '#5333ED'
        },
        '&:focus': {
            outline: 'none',
            border: 'none'
        }
    },
    inputDiv: {
        border: '1px solid gray',
        borderRadius: '20px',
        paddingRight: '15px',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        fontWeight: 'bold',

        '&:hover': {
            borderColor: 'rgb(83, 51, 237)',
            color: 'rgb(83, 51, 237)'
        }
    },
    box: {
        display: 'flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        padding: '0px 16px 24px',
        width: '270px',
        background: 'rgb(255, 255, 255)',
        transition: 'all 0.3s ease 0s',
        boxShadow: 'rgb(16 7 104 / 8%) 0px 1px 6px 0px',
        borderRadius: '4px',
        marginTop: '2rem'
    },
    box_title: {
        width: '100%',
        borderBottom: '1px solid rgb(242, 244, 249)',
        alignItems: 'center',
        padding: '1rem 0px'
    },
    span_title: {
        color: 'rgb(83, 51, 237)',
        fontSize: '1rem',
        fontWeight: '600',
        display:'flex',
        alignItems:'center'
    },
    box_content: {
        padding: '2rem 1rem 0rem 0rem',
        flexDirection: 'column!important'
    },
    box_content_title: {
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '6px',
        textShadow: '0px 0px 1px #797979'
    },
    li: {
        marginBottom: '0.4rem',
        fontSize: '0.9rem'
    },
    redIcon: {
        background: 'red',
        borderRadius: '57%',
        color: 'white',
        fontSize: '1rem!important',
        marginRight:'5px'
    },
    icon:{
        fontSize:'1rem!important'
    }
});
const KindaDNS = () => {
    const classes = useStyles();

    return (
        <Column>
            <Row wrap flexGrow={1} horizontal='space-between' breakpoints={{ 384: 'column' }}>
                <p className={classes.para}>
                    Add your domain and DNS records to handle all your DNS setup at Kinsta.
                    <br />
                    Your plan allows for 1 domains (as many as your sites count) and unlimited
                    records to be added.
                </p>
            </Row>
            <div className={classes.container}>
                <Row wrap flexGrow={1} horizontal='space-between' breakpoints={{ 384: 'column' }}>
                    <div className={classes.inputDiv}>
                        <input
                            placeholder='Search your domains'
                            className={classes.input}
                            type='text'
                        />
                        <SearchIcon className={classes.icon}/>
                    </div>
                    <button className={classes.button}>Export</button>
                </Row>
                <Row
                    className={classes.box}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <Row className={classes.box_title} wrap horizontal='space-between'>
                        <span className={classes.span_title}>
                            <HighlightOffTwoToneIcon className={classes.redIcon}/>
                            akxira.com
                        </span>
                        <span className={classes.span_title}>Manage</span>
                    </Row>
                    <Row className={classes.box_content}>
                        <p className={classes.box_content_title}>Nameservers</p>
                        <ul>
                            <li className={classes.li}>ns-782.awsdns-33.net</li>
                            <li className={classes.li}>ns-1300.awsdns-34.org</li>
                            <li className={classes.li}>ns-1540.awsdns-00.co.uk</li>
                            <li className={classes.li}>ns-13.awsdns-01.com</li>
                        </ul>
                    </Row>
                </Row>
            </div>
        </Column>
    );
};

export default KindaDNS;
