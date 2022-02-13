import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import LineChart from 'react-svg-line-chart';

const data = [];

for (let x = 1; x <= 24; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer',
        '&:nth-child(1)':{
            marginRight:'1rem',
            '@media (max-width: 992px)': {
                marginRight:0,
                marginBottom:'1rem'
            }
        }
  
        
        
    },
    graphContainer: {
        marginTop: 24,
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        padding: 24
    },
    
    
    graphSubtitle: {
        ...theme.typography.smallSubtitle,
        color: theme.color.grayishBlue2,
        marginTop: 4,
        marginRight: 8
    },
    graphTitle: {
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    legendTitle: {
        ...theme.typography.smallSubtitle,
        fontWeight: '600',
        color: theme.color.grayishBlue2,
        marginLeft: 8
    },
    separator: {
        backgroundColor: theme.color.lightGrayishBlue2,
        width: 1,
        minWidth: 1
    },
    statContainer: {
        borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
        padding: '24px 32px 24px 32px',
        height: 'calc(114px - 48px)',
        '&:last-child': {
            border: 'none'
        }
    },
    stats: {
        borderTop: `1px solid ${theme.color.lightGrayishBlue2}`,
        width: '100%'
    },
    statTitle: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: '22px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: theme.color.grayishBlue2,
        whiteSpace: 'nowrap',
        marginBottom: 6
    },
    statValue: {
        ...theme.typography.title,
        textAlign: 'center',
        color: theme.color.veryDarkGrayishBlue
    },
    titleDate: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        padding: 24
    },
    devider:{
        borderBottom:" 1px solid #e2e2e2"
    },
    title: {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(46, 50, 56)',

    },
    date:{
        color: "rgb(143, 151, 163)",
        fontSize: "14px"
    }
}));

function TodayTrendsComponent({ title, date }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    console.log({ title });

    return (
        <Row
            flexGrow={1}
            className={classes.container}
            horizontal='center'
            breakpoints={{ 1024: 'column' }}
        >
            <Column
                wrap
                flexGrow={7}
                flexBasis='735px'
                className={classes.graphSection}
                breakpoints={{ 1024: { width: 'calc(100% - 48px)', flexBasis: 'auto' } }}
            >
                <div className={classes.titleDate}>
                    <p className={classes.title}>{title}</p>
                    <span className={classes.date}>{date}</span>
                </div>
                <div className={classes.devider}></div>
                <div className={classes.graphContainer}>
                    <LineChart
                        data={data}
                        viewBoxWidth={500}
                        pointsStrokeColor={theme.color.lightBlue}
                        areaColor={theme.color.lightBlue}
                        areaVisible={true}
                    />
                </div>
            </Column>
        </Row>
    );
}

export default TodayTrendsComponent;
