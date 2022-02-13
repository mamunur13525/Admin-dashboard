import React, { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { convertSlugToUrl } from 'resources/utilities';

const useStyles = createUseStyles(({ position }) => ({
    HoverInfoDiv: {
        padding: '25px',
        width:({position})=>  position.width || 200,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '4px',
        boxShadow: 'rgb(16 7 104 / 10%) 0px 2px 8px 0px, rgb(83 51 237 / 6%) 0px 1px 2px 0px',
        position: 'absolute',

        zIndex: '12',
        transition: 'all .3s',
        transform: 'scale(0)',
        opacity: '0',
        '& span': {
            fontFamily: 'Roboto, Arial, sans-serif',
            color: 'rgb(46, 50, 56)',
            fontSize: '14px',
            fontWeight: '400'
        },
        right: ({ position }) => 30 + position.right,
        left: ({ position }) => 40 + position.left
    },
    tikDiv: {
        left:  ({ position }) => position.hasOwnProperty('left') && '-5px'  ,
        right:  ({ position }) =>  position.hasOwnProperty('right') && '-5px'  ,
        boxShadow:  ({ position }) =>  position.hasOwnProperty('left')?' -1px 1px 2px #ababab54' : ' 1px -1px 2px #ababab54' ,
        width: '16px',
        height: '16px',
        zIndex: '10',
        position: 'absolute',
        transform: 'rotate(45deg)',
        background: 'white',
        // boxShadow: 'rgb(16 7 104 / 10%) 2px 2px -2px 0px, rgb(83 51 237 / 6%) 0px 2px 0px 0px',
        top: '41%'
    },
    parentDiv: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    }
}));

function HoverInfo({ label, position, text,linkDetails }) {
    const classes = useStyles({ position });
    const [infoShow, setInfoShow] = useState(false);
    const clickIcon = () => {
        setInfoShow((prev) => !prev);
        console.log('click ');
    };
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (infoShow && ref.current && !ref.current.contains(event.target)) {
                setInfoShow(false);
            }
        }
        // Bind the event listener
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('click', handleClickOutside);
        };
    }, [infoShow]);
    const {push} = useHistory();

    const linkClick=(link)=>{
        push(convertSlugToUrl(`/${link}`, {}));
    }
    return (
        <div ref={ref} className={classes.parentDiv}>
            <span onClick={clickIcon}>{label}</span>
            <div
                style={infoShow ? { transform: 'scale(1)', opacity: '1' } : {}}
                className={classes.HoverInfoDiv}
            >
                <span>{text}</span>
                {
                    linkDetails &&
                <p onClick={()=>linkClick(linkDetails.link)}>{linkDetails.text}</p>
                }
                <div className={classes.tikDiv}></div>
            </div>
        </div>
    );
}

export default HoverInfo;
