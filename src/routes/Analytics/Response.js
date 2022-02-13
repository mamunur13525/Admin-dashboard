import React from 'react';
import { createUseStyles } from 'react-jss';
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
        },
      
    },
    dFlex: {
        display: 'flex',
        '@media (max-width: 667px)': {
            flexDirection:'column'
    },
       
    },
    HalfBox: {
        width: '50%',
        '&:nth-child(1)': {
            marginRight: '1rem'
        },
        '@media (max-width: 667px)': {
            width:'100%',
            marginRight:'0px'
   },
    }
});
const Response = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.dFlex}>
                <HalfBox data='no_data' title='Response code breakdown' />
                <HalfBox data='no_data' title='Response stats' />
            </div>
            <FullBox data='data' title='500_error' />
            <FullBox data='data' title='400_error' />
            <FullBox data='data' title='redirect_breakdown' />
            <div className={classes.dFlex}>
                <HalfBox data='data' title='Top 404 errors' />
            </div>
        </>
    );
};

export default Response;

const FullBox = ({ title, data }) => {
    const classes = useStyles();

    let titleName = '';

    switch (title) {
        case '500_error':
            titleName = '500 error breakdown';
            break;
        case '400_error':
            titleName = '400 error breakdown';
            break;
        case 'redirect_breakdown':
            titleName = 'Redirect breakdown';
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
            {data === 'data' && (
                <div className={classes.noData}>
                    <span>We do not have any data for this period.</span>
                </div>
            )}
            {data === 'no_data' && <div className={classes.chart}></div>}
        </div>
    );
};
