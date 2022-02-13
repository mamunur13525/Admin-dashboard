import React from 'react';
import { createUseStyles } from 'react-jss';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = createUseStyles({
    table: {
        width: '100%',
        textAlign: 'left',
        borderCollapse: ' collapse',
        '@media (max-width: 850px)': {
            minWidth:'1035px',
        },
    },
    th: {
        fontSize: '12px',
        padding: '1rem',
        textTransform: 'uppercase',
        color: 'rgb(143, 151, 163)',
        textAlign: 'left',
        background: '#F8FAFC'
    },
    td: {
        padding: '2rem 1rem',
        fontWeight: 600,
        fontSize: '15px',
        textAlign:'left'
    },
    tr: {
        borderBottom: '1px solid #f2f4f9',
        '&:hover': {
            background: '#F2F4F9'
        }
    },
    link: {
        color: 'rgb(83, 51, 237)'
    },
    button: {
        display: 'inline-flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        borderRadius: '80px',
        height: '40px',
        padding: '0px 32px',
        outline: 'none',
        border: '1px solid rgb(209, 214, 223)',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'all 0.25s ease 0s',
        backgroundColor: 'transparent',
        fontWeight: 'bold',

        '&:hover': {
            borderColor: 'rgb(83, 51, 237)',
            color: 'rgb(83, 51, 237)'
        }
    },
    img: {
        borderRadius: '50%',
        width: '40px',
        marginRight: '.5rem'
    },
    imgTd: {
        display: 'flex',
        alignItems: 'center'
    },
    icon:{
        fontSize:'1rem',
        color:'#80DB79'
    }
});
const Table = ({ tableName }) => {
    return (
        <>
            {tableName === 'site' && <SiteTable />}
            {tableName === 'user' && <UserTable />}
            {tableName === 'activity' && <ActivityTable />}
            {tableName === 'hosting' && <Hosting />}
            {tableName === 'invoice' && <Invoice />}
            {tableName === 'siteLabels' && <SiteLabels />}
            {tableName === 'requestView' && <RequestView />}
            {tableName === 'requestBytes' && <RequestBytes />}
            {tableName === 'perfomance' && <Perfomance />}
            {tableName === 'cache' && <Cache />}
            {tableName === 'access' && <Access />}
            {tableName === 'Top countries' && (
                <Country title='country' data={[{ ip: 'India', request: 31 }]} />
            )}
            {tableName === 'Top cities' && (
                <Country title='city' data={[{ ip: 'Mumbai', request: 31 }]} />
            )}
            {tableName === 'Top client IPs' && (
                <Country
                    title='city'
                    data={[
                        { ip: ':1', request: 96 },
                        { ip: '34.93.84.65', request: 31 }
                    ]}
                />
            )}
        </>
    );
};

export default Table;

const SiteTable = () => {
    const classes = useStyles();

    return (
        <table className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th className={classes.th}>
                        <input type='checkbox' name='' id='' />
                    </th>
                    <th className={classes.th}>name</th>
                    <th className={classes.th}>location</th>
                    <th className={classes.th}>visits</th>
                    <th className={classes.th}>bandwitdth usage</th>
                    <th className={classes.th}>disk usage</th>
                    <th className={classes.th}>php version</th>
                    <th className={classes.th}>environment</th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td className={classes.td}>
                        <input type='checkbox' name='' id='' />
                    </td>
                    <td className={`${classes.td} ${classes.link}`}>ABX GUIDE</td>
                    <td className={classes.td}>17.0%</td>
                    <td className={classes.td}>14.3%</td>
                    <td className={classes.td}>Market Share</td>
                    <td className={classes.td}>96.1%</td>
                    <td className={classes.td}>17.0%</td>
                    <td className={`${classes.td} ${classes.link}`}>14.3%</td>
                </tr>
                <tr className={classes.tr}>
                    <td className={classes.td}>
                        <input type='checkbox' name='' id='' />
                    </td>
                    <td className={`${classes.td} ${classes.link}`}>96.1%</td>
                    <td className={classes.td}>17.0%</td>
                    <td className={classes.td}>14.3%</td>
                    <td className={classes.td}>Market Share</td>
                    <td className={classes.td}>96.1%</td>
                    <td className={classes.td}>17.0%</td>
                    <td className={`${classes.td} ${classes.link}`}>14.3%</td>
                </tr>
            </tbody>
        </table>
    );
};

const UserTable = () => {
    const classes = useStyles();

    return (
        <table className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th className={classes.th}>
                        <input type='checkbox' name='' id='' />
                    </th>
                    <th className={classes.th}>name</th>
                    <th className={classes.th}>email</th>
                    <th className={classes.th}>2fa</th>
                    <th className={classes.th}>role</th>
                    <th className={classes.th}>sites</th>
                    <th className={classes.th}>actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td className={classes.td}>
                        <input type='checkbox' name='' id='' />
                    </td>
                    <td className={`${classes.td} ${classes.link}`}>Ashutosh Kumar (me)</td>
                    <td className={classes.td}>ashutosh.iiitd+kinsta@gmail.com </td>
                    <td className={classes.td}>14.3%</td>
                    <td className={classes.td}>Company owner</td>
                    <td className={classes.td}>All sites</td>
                    <td className={`${classes.td} ${classes.link}`}>
                        <button className={classes.button}>Transfer ownership</button>
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td className={classes.td}>
                        <input type='checkbox' name='' id='' />
                    </td>
                    <td className={`${classes.td} ${classes.link}`}>Ashutosh Kumar (me)</td>
                    <td className={classes.td}>ashutosh.iiitd+kinsta@gmail.com </td>
                    <td className={classes.td}>14.3%</td>
                    <td className={classes.td}>Company owner</td>
                    <td className={classes.td}>All sites</td>
                    <td className={`${classes.td} ${classes.link}`}>
                        <button className={classes.button}>Transfer ownership</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const ActivityTable = () => {
    const classes = useStyles();

    return (
        <table className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th className={classes.th}>user</th>
                    <th className={classes.th}>action</th>
                    <th className={classes.th}>time</th>
                    <th className={classes.th}>status</th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td className={`${classes.td} ${classes.imgTd}`}>
                        <img
                            className={classes.img}
                            src='https://www.gravatar.com/avatar/a44be827447e1374a16777915d308070?s=200'
                            alt=''
                        />{' '}
                        Ashutosh Kumar (me)
                    </td>
                    <td className={classes.td}>Add "akxira.com" to the site "ABX Guide" (live) </td>
                    <td className={classes.td}>Aug 22, 2021, 9:38 PM</td>
                    <td className={classes.td}><CheckCircleOutlineIcon className={classes.icon}/></td>
                </tr>
                <tr className={classes.tr}>
                    <td className={`${classes.td} ${classes.imgTd}`}>
                        <img
                            className={classes.img}
                            src='https://www.gravatar.com/avatar/a44be827447e1374a16777915d308070?s=200'
                            alt=''
                        />{' '}
                        Ashutosh Kumar (me)
                    </td>
                    <td className={classes.td}>Add "akxira.com" to the site "ABX Guide" (live) </td>
                    <td className={classes.td}>Aug 22, 2021, 9:38 PM</td>
                    <td className={classes.td}><CheckCircleOutlineIcon className={classes.icon}/></td>
                </tr>
                <tr className={classes.tr}>
                    <td className={`${classes.td} ${classes.imgTd}`}>
                        <img
                            className={classes.img}
                            src='https://www.gravatar.com/avatar/a44be827447e1374a16777915d308070?s=200'
                            alt=''
                        />{' '}
                        Ashutosh Kumar (me)
                    </td>
                    <td className={classes.td}>Add "akxira.com" to the site "ABX Guide" (live) </td>
                    <td className={classes.td}>Aug 22, 2021, 9:38 PM</td>
                    <td className={classes.td}><CheckCircleOutlineIcon className={classes.icon}/></td>
                </tr>
                <tr className={classes.tr}>
                    <td className={`${classes.td} ${classes.imgTd}`}>
                        <img
                            className={classes.img}
                            src='https://www.gravatar.com/avatar/a44be827447e1374a16777915d308070?s=200'
                            alt=''
                        />{' '}
                        Ashutosh Kumar (me)
                    </td>
                    <td className={classes.td}>Add "akxira.com" to the site "ABX Guide" (live) </td>
                    <td className={classes.td}>Aug 22, 2021, 9:38 PM</td>
                    <td className={classes.td}><CheckCircleOutlineIcon className={classes.icon}/></td>
                </tr>
            </tbody>
        </table>
    );
};
const Hosting = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        name
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        type
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        price
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        renewal date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'center' }} className={`${classes.td}`}>
                        Starter
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        Monthly{' '}
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        30 USD
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        Sep 20, 2021
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const Invoice = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        {' '}
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Invoice Number
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Total
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Charged
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Period
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Created
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}></th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'center' }} className={`${classes.td}`}>
                      <HelpOutlineIcon/>
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        {' '}
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        30 USD
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        {' '}
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        Monthly
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        Sep 20, 2021
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        <DescriptionOutlinedIcon/>
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'center' }} className={`${classes.td}`}>
                          <CheckCircleIcon style={{color:'green'}}/>  
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        {' '}
                        20210820847268{' '}
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        30 USD
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        {' '}
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        Monthly
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        Aug 20, 2021
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        <GetAppIcon/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const SiteLabels = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Lable
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Sites
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'center' }} className={classes.td}></td>
                    <td style={{ textAlign: 'center' }} className={classes.td}>
                        No results
                    </td>
                    <td style={{ textAlign: 'center' }} className={classes.td}></td>
                </tr>
                {/* <tr className={classes.tr}>
                    <td style={{textAlign:'center'}} className={classes.td}>Monthly</td>
                    <td style={{textAlign:'center'}} className={classes.td}>Sep 20, 2021</td>
                    <td style={{textAlign:'center'}} className={classes.td}>Files</td>
                </tr> */}
            </tbody>
        </table>
    );
};
const RequestBytes = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'left' }} className={classes.th}>
                        path
                    </th>
                    <th style={{ textAlign: 'right' }} className={classes.th}>
                        requests
                    </th>
                    <th style={{ textAlign: 'right' }} className={classes.th}>
                        bandwith
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        96
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        19.3 kB
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        96
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        19.3 kB
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        96
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        19.3 kB
                    </td>
                </tr>
                {/* <tr className={classes.tr}>
                    <td style={{textAlign:'center'}} className={classes.td}>Monthly</td>
                    <td style={{textAlign:'center'}} className={classes.td}>Sep 20, 2021</td>
                    <td style={{textAlign:'center'}} className={classes.td}>Files</td>
                </tr> */}
            </tbody>
        </table>
    );
};
const RequestView = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'left' }} className={classes.th}>
                        path
                    </th>
                    <th style={{ textAlign: 'right' }} className={classes.th}>
                        requests
                    </th>
                    <th style={{ textAlign: 'right' }} className={classes.th}>
                        bandwith
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        96
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        19.3 kB
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        96
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        19.3 kB
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        96
                    </td>
                    <td style={{ textAlign: 'right' }} className={classes.td}>
                        19.3 kB
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const Perfomance = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'left' }} className={classes.th}>
                        path
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const Cache = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'left' }} className={classes.th}>
                        path
                    </th>
                    <th style={{ textAlign: 'left' }} className={classes.th}>
                        requests
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /wp-cron.php?server_triggered_cronjob
                    </td>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        96
                    </td>
                </tr>
                <tr className={classes.tr}>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        /
                    </td>
                    <td style={{ textAlign: 'left' }} className={classes.td}>
                        1
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const Country = ({ title, data }) => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        {title}
                    </th>
                    <th style={{ textAlign: 'center' }} className={classes.th}>
                        requests
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index) => (
                    <tr key={index} className={classes.tr}>
                        <td style={{ textAlign: 'center' }} className={classes.td}>
                            {item.ip}
                        </td>
                        <td style={{ textAlign: 'center' }} className={classes.td}>
                            {item.request}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


const Access = () => {
    const classes = useStyles();

    return (
        <table style={{ textAlign: 'center' }} className={classes.table}>
            <thead>
                <tr className={classes.tr}>
                    <th  className={classes.th}>
                       company name
                    </th>
                    <th  className={classes.th}>
                        role
                    </th>
                    <th  className={classes.th}>
                    
                    </th>
                </tr>
            </thead>
            <tbody>
              
                    <tr className={classes.tr}>
                        <td  className={classes.td}>
                            Ashutosh's Company
                        </td>
                        <td  className={classes.td}>
                        Company owner
                        </td>
                        <td  className={classes.td}>
                        Setting
                        </td>
                    </tr>
              
            </tbody>
        </table>
    );
};
