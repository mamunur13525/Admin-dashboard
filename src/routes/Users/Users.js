import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Table from 'routes/Sites/Table';
import { Column, Row } from 'simple-flexbox';
import DropdownComponent from 'components/dropdown';
import HoverInfo from 'components/HoverInfo/HoverInfo';

const useStyles = createUseStyles({
    userDiv: {
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
        marginTop: '2rem'
    },
   
 
    para: {
        color: 'rgb(46, 50, 56)',
        fontSize: '14px',
        fontWeight: '400',
        marginTop: '1rem'
    },
    icon: {
        fontSize: '1rem!important'
    },
    w30:{
        width:'250px',
        padding: '1.5rem 0 1.5rem 1.5rem'
    },
    tableDiv:{
        overflowX:'auto'
    }
});
const Users = () => {
    const classes = useStyles();
    // const [userMenuOpen, setUserMenuOpen] = useState({ status: false, value: '' });
  
    return (
        <Column>
            <Row className={classes.row} wrap breakpoints={{ 384: 'column' }}>
                <p className={classes.para}>
                    You can add new users or change existing permissions.
                    <br />
                    Each user can have access to the whole company or only specific sites.
                </p>
            </Row>
            <div className={classes.userDiv}>
                <div className={classes.w30}>

                    <DropdownComponent
                        label={{input:true, mess:'All sites', search:true}}
                        options={[
                            {
                                label: 'ABX Guide'
                            }
                        ]}
                        position={{
                            up: 'top',
                            top: 40,
                            right: -6
                        }}
                    />
                </div>
               <div className={classes.tableDiv}>

                <Table tableName='user' />
               </div>
            </div>
            <div></div>
        </Column>
    );
};

export default Users;
