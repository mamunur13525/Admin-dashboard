import React from 'react';
import { createUseStyles } from 'react-jss';
import Table from 'routes/Sites/Table';
import { Column, Row } from 'simple-flexbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DropdownComponent from 'components/dropdown';
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
        width: '90%',
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
        alignItems: 'center',
        marginRight: '0.4rem',
        width: '27%'
    },

    dFlex: {
        display: 'flex',
        padding: '2rem'
    },
    tableDiv:{
        overflowX:'auto',
        width: '100%'
    }
});

const ActivityLog = () => {
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

                    
                <DropdownComponent
                        label={{input:true, mess:'All sites', search:true}}
                        options={[
                            {
                                label: 'ABX Guweewhide'
                            },
                            {
                                label: 'ABX Guie  de'
                            },
                            {
                                label: 'ABX Guheide'
                            },
                            {
                                label: 'ABX Gehuide'
                            },
                            {
                                label: 'ABX Gueneide'
                            },
                            {
                                label: 'ABX Guibeebde'
                            },
                            {
                                label: 'ABX j4r4jGuide'
                            },
                            {
                                label: 'ABX Gui  dbhede'
                            },
                        ]}
                        position={{
                            up: 'top',
                            top: 40,
                            right: 0
                        }}
                    />
                    
                    <DropdownComponent
                        label={{input:true, mess:'All actions', search:true}}
                        options={[
                            {
                                label: 'ABX Guide'
                            },
                            {
                                label: 'ABX Guidse'
                            },
                            {
                                label: 'ABX Gufwide'
                            },
                            {
                                label: 'ABX Guwtwtide'
                            },
                            {
                                label: 'ABX Guebebide'
                            },
                            {
                                label: 'ABX Guiqtwde'
                            },
                            {
                                label: 'ABX Gubeebide'
                            },
                        ]}
                        position={{
                            up: 'top',
                            top: 40,
                            right: 0
                        }}
                    />
                    
                    <DropdownComponent
                        label={{input:true, mess:'ALl sites', search:true}}
                        options={[
                            {
                                label: 'ABX Guideeyy'
                            },
                            {
                                label: 'Ashutosh kumar'
                            },
                        ]}
                        position={{
                            up: 'top',
                            top: 40,
                            right: 0
                        }}
                    />
                 
                </div>
                <div className={classes.tableDiv}>

                <Table tableName='activity' />
                </div>
            </Row>
        </Column>
    );
};

export default ActivityLog;
