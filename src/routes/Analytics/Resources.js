import React from 'react';
import { createUseStyles } from 'react-jss';
import Table from 'routes/Sites/Table';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import HoverInfo from 'components/HoverInfo/HoverInfo';

const useStyles = createUseStyles({
    p: {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',
        padding: '21px 25px',
        borderBottom: '1px solid rgb(242, 244, 249)',
        display: 'flex',
        alignItems: 'center'
    },
    div: {
        background: 'rgb(255, 255, 255)',
        marginBottom: '2rem'
    },
    chart: {
        height: '300px'
    },
    Disk_para: {
        padding: '7rem',
        color: 'rgb(143, 151, 163)',
        fontSize: '14px'
    },
    icon: {
        fontSize: '1.1rem !important',
        marginLeft: '0.5rem',
        cursor: 'pointer',
        '&:hover +p': {
            transform: 'scale(1)'
        }
    },
    titleParentDiv: {
        position: 'relative'
    },
    titleBox: {
        position: 'absolute',
        background: 'black',
        color: 'white',
        width: '120px',
        padding: '0.3rem 0.8rem',
        left: '-39px',
        transition: 'all .3s',
        transform: 'scale(0)',
        fontSize: '1rem',
        textAlign: 'center',
        '&:after': {
            content: "''",
            background: 'black',
            width: '10px',
            height: '10px',
            display: 'block',
            position: 'absolute',
            top: '-2px',
            left: '44%',
            transform: 'rotate(45deg)'
        }
    }
});

const Resources = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.div}>
                <div className={classes.p}>
                    Visits
                    <div className={classes.titleParentDiv}>
                        <HoverInfo
                            label={<HelpOutlineOutlinedIcon className={classes.icon} />}
                            text='The number of visits in a given month is the sum of the unique IP addresses seen each 24-hour period as recorded in the Nginx logs.
                            Get more info'
                            position={{ left: 0,width:400 }}
                            linkDetails={{link:'migrations', text:'Get more info'}}
                        />

                        <p className={classes.titleBox}>Learn More</p>
                    </div>
                </div>
                <div className={classes.chart}></div>
            </div>
            <div className={classes.div}>
                <div className={classes.p}>
                    Disk space{' '}
                    <div className={classes.titleParentDiv}>
                        <HoverInfo
                            label={<HelpOutlineOutlinedIcon className={classes.icon} />}
                            text='The number of visits i'
                            position={{ left: 0 }}
                        />
                        <p className={classes.titleBox}>Learn More</p>
                    </div>
                </div>
                <p className={classes.Disk_para}>
                    Disk space usage cannot be viewed for the past 24 hours, only for the past 7 and
                    30 days. You can change this at the top of this page.
                </p>
            </div>
            <div className={classes.div}>
                <div className={classes.p}>
                    Bandwidth{' '}
                    <div className={classes.titleParentDiv}>
                        <HoverInfo
                            label={<HelpOutlineOutlinedIcon className={classes.icon} />}
                            text='The number of visits i'
                            position={{ left: 0 }}
                        />
                        <p className={classes.titleBox}>Learn More</p>
                    </div>
                </div>
                <div className={classes.chart}></div>
            </div>
            <div className={classes.div}>
                <div className={classes.p}>
                    Top requests by bytes{' '}
                    <div className={classes.titleParentDiv}>
                        <HoverInfo
                            label={<HelpOutlineOutlinedIcon className={classes.icon} />}
                            text='The number of visits i'
                            position={{ left: 0 }}
                        />
                        <p className={classes.titleBox}>Learn More</p>
                    </div>
                </div>
                <Table tableName='requestBytes' />
            </div>
            <div className={classes.div}>
                <div className={classes.p}>
                    Top requests by views{' '}
                    <div className={classes.titleParentDiv}>
                        <HoverInfo
                            label={<HelpOutlineOutlinedIcon className={classes.icon} />}
                            text='The number of visits i'
                            position={{ left: 0 }}
                        />
                        <p className={classes.titleBox}>Learn More</p>
                    </div>
                </div>
                <Table tableName='requestView' />
            </div>
        </>
    );
};

export default Resources;
