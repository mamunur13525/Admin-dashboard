import React from 'react';
import { createUseStyles } from 'react-jss';
import Table from 'routes/Sites/Table';
const useStyles = createUseStyles({
    p: {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        padding: '21px 25px',
        borderBottom: '1px solid rgb(242, 244, 249)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    div: {
        background: 'rgb(255, 255, 255)',
        marginBottom: '2rem'
    },
    chart: {
        height: '300px'
    },
    contentDiv: {
        textAlign: 'center',
        padding: '7rem 0rem',
        '& p': {
            fontSize: '14px',
            color: 'rgb(143, 151, 163)'
        }
    },
    noData:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'250px',
        '& span':{
            fontSize:'15px',
            color: 'rgb(143, 151, 163)' 
        }
    },
    dFlex:{
        display:'flex',
        '@media (max-width: 767px)': {
          flexDirection:'column'
    },

    },
    HalfBox:{
        width:'50%',
        '&:nth-child(1)':{
            marginRight:'1rem'
        },
        '@media (max-width: 767px)': {
           width:'100%',
           marginRight:'0px'
      },
    }
});
const Performance = () => {
    const classes = useStyles();
    return (
        <>
            <FullBox data='no_data' title='php_mysql' />
            <FullBox data='no_data' title='php' />
            <FullBox data='no_data' title='PHP_worker_limit' />
            <FullBox data='data' title='ajax' />
            <div className={classes.dFlex}>
                <HalfBox title='Top average PHP + MySQL response time'/>
                <HalfBox title='Top maximum upstream time'/>
            </div>
        </>
    );
};

export default Performance;

const FullBox = ({ title, data }) => {
    const classes = useStyles();

    let titleName = '';

    switch (title) {
        case 'php_mysql':
            titleName = 'Average PHP + MySQL response time';
            break;
        case 'php':
            titleName = 'PHP throughput';

            break;
        case 'PHP_worker_limit':
            titleName = 'PHP worker limit';

            break;
        case 'ajax':
            titleName = 'AJAX usage';

            break;

        default:
            break;
    }
    return (
        <div className={classes.div}>
            <p className={classes.p}>
                <span>{titleName}</span>
            </p>
            {data === 'data' && (
                <div className={classes.noData}>
                    <span>We do not have any data for this period.</span>
                </div>
            )}
            {data === 'no_data' && <div className={classes.chart}></div>}
        </div>
    );
};
const HalfBox = ({ title, data }) => {
    const classes = useStyles();

    return (
        <div className={`${classes.div} ${classes.HalfBox}`}>
            <p className={classes.p}>
                <span>{title}</span>
            </p>
            <Table tableName='perfomance'/>
        </div>
    );
};
