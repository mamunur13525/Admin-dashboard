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
        ...theme.color.buttonBlue,
        
    },
    infoSec: {
        ...theme.color.infoSec,
        borderBottom:'none'
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
    tableDiv:{
        overflowX:'auto',
    }
});

const Access = () => {
    const classes = useStyles();
    return (
        <div className={classes.accountDiv}>
            <div className={classes.infoSec}>
                <p className={classes.infoSecTitle}>Company and site access</p>
                <div className={classes.infoSecTitleTextBtn}>
                    <p className={classes.infoSecTitleText}>
                    This is an overview of all the company accounts and sites you have access to. You can leave any of these accounts where you are not the company owner, or reach each company’s settings.
                    </p>
                    <button className={classes.button}>Create new company</button>
                </div>
            </div>
            <div className={classes.tableDiv}>
            <Table tableName='access'/>
            </div>
        </div>
    );
};

export default Access;
