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
    noData: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '250px',
        '& span': {
            fontSize: '15px',
            color: 'rgb(143, 151, 163)'
        }
    },
    dFlex: {
        display: 'flex',
        '@media (max-width: 667px)': {
            flexDirection: 'column'
        }
    },
    HalfBox: {
        width: '50%',
        '&:nth-child(1)': {
            marginRight: '1rem'
        },
        '@media (max-width: 667px)': {
            width: '100%',
            marginRight: '0px'
        }
    }
});
const GeoIP = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.dFlex}>
                <HalfBox data='table' title='Top countries' />
                <HalfBox data='table' title='Top cities' />
            </div>
            <div className={classes.dFlex}>
                <HalfBox data='table' title='Top client IPs' />
            </div>
        </>
    );
};

export default GeoIP;

const HalfBox = ({ title, data }) => {
    const classes = useStyles();

    return (
        <div className={`${classes.div} ${classes.HalfBox}`}>
            <p className={classes.p}>
                <span>{title}</span>
            </p>
            {data === 'data' && (
                <div className={classes.noData}>
                    <span>We do not have any data for this period.</span>
                </div>
            )}
            {data === 'no_data' && <div className={classes.chart}></div>}
            {data === 'table' && <Table tableName={title} />}
        </div>
    );
};
