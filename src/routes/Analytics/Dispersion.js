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
    chart:{
        height:'300px'
    }
})
const Dispersion = () => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
                <p className={classes.p}>
                    <span>Handheld vs. desktop</span>
                </p>
                <div className={classes.chart}></div>
            </div>
    );
};

export default Dispersion;