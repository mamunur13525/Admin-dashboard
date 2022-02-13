import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    box: {
        width: '33.3%',
        margin: '2rem 1rem',
        cursor: 'pointer',
        '@media (max-width: 767px)': {
            width: '100%',
            margin: '0px',
            padding: '1rem'
        }
    },
    imgBox: {
        width: '100%'
    },
    title: {
        color: 'rgb(46, 50, 56)',
        fontSize: '14px',
        fontWeight: '400',
        marginBottom: '0px',

        display: 'block',
        lineHeight: '1.5',
        marginTop: '0.8rem'
    },
    date: {
        fontSize: '12px',
        lineHeight: '18px',
        color: 'rgb(143, 151, 163)'
    }
});

const RecourseCol = ({ img, title, date }) => {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <div className={classes.imgBox}>
                <img style={{ maxWith: '100%' }} src={img} alt='' />
            </div>
            <div>
                <span className={classes.title}>{title}</span>
                <span className={classes.date}>{date}</span>
            </div>
        </div>
    );
};

export default RecourseCol;
