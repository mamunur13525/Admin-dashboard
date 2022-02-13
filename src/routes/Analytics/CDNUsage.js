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
    halfBoxOuterDiv: {
       display:'grid',
       gridTemplateColumns:'1fr 1fr',
       gridGap:'20px',
       '@media (max-width: 767px)': {
       gridTemplateColumns:'1fr',

    },
    },
    halfBox: {
        background: 'white',
    },
    contentDiv: {
        textAlign: 'center',
        padding: '7rem 0rem',
        '& p': {
            fontSize: '14px',
            color: 'rgb(143, 151, 163)'
        }
    }
});
const CDNUsage = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.div}>
                <p className={classes.p}>
                    <span>Bandwidth ico</span>
                </p>
                <div className={classes.chart}></div>
            </div>
            <div className={classes.halfBoxOuterDiv}>
                <HalfBox data='no_data' title='file_request' />
                <HalfBox data='no_data' title='file_bytes' />
                <HalfBox data='no_data' title='file_extension' />
                <div className={classes.halfBox}>
                    <p className={classes.p}>
                        <span>Response code breakdown ico</span>
                    </p>
                    <div className={classes.contentDiv}>
                        <div className={classes.chart}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CDNUsage;

const HalfBox = ({ title, data }) => {
    const classes = useStyles();

    let titleName = '';

    switch (title) {
        case 'file_request':
            titleName = 'Top files by requests';
            break;
        case 'file_bytes':
            titleName = 'Top files by bytes';

            break;
        case 'file_extension':
            titleName = 'Top file extensions by bytes';

            break;

        default:
            break;
    }
    return (
        <div className={classes.halfBox}>
            <p className={classes.p}>
                <span>{titleName} ico</span>
            </p>
            <div className={classes.contentDiv}>
                <p>We do not have any data for this period.</p>
            </div>
        </div>
    );
};
