import React from 'react';
import { createUseStyles } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import Table from './Table';
import SearchIcon from '@material-ui/icons/Search';
import DropdownComponent from 'components/dropdown';
import theme from 'resources/theme';
const useStyles = createUseStyles({
    siteDiv: {
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
    input: {
        border: 'none',
        borderRadius: '20px',
        padding: '0.6rem 0.9rem',
        fontSize: '13px',
        fontWeight: 'bold',
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
        display: 'flex',
        paddingRight: '15px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        ...theme.color.buttonTransparent,
        '@media (max-width: 740px)': {
           marginTop:'1rem'
    
        },
    },
    dFlex: {
        display: 'flex'
    },
    row: {
        padding: '1.8rem',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1rem!important',
        color: 'gray'
    },
    tableContainer:{
        width:'100%',
        overflowX:'auto'
    }
});
const SitesComponent = () => {
    const classes = useStyles();
   
    return (
        <Column className={classes.siteDiv}>
            <Row
                className={classes.row}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 384: 'column' }}
            >
                <div className={classes.dFlex}>
                    <div className={classes.inputDiv} style={{ marginRight: '10px' }}>
                        <input placeholder='Search sites' className={classes.input} type='text' />
                        <SearchIcon className={classes.icon} />
                    </div>
                
                    <DropdownComponent
                        label={{input:true, mess:'All label', search:true}}
                        options={[
                            {
                                label: 'ABX Guide'
                            },
                            {
                                label: 'ABX Guide'
                            }
                        ]}
                        position={{
                            up:'top',
                            top: 40,
                            right: -6
                        }}
                    />

                                    
                </div>
                <button className={classes.button}>
                    <span>Export all to CVS</span>
                </button>
            </Row>
            <Row id='style-2' className={classes.tableContainer}>
                <Table tableName='site' />
            </Row>
        </Column>
    );
};

export default SitesComponent;
