import React, { useEffect, useState } from 'react';
import { arrayOf, element, func, number, oneOfType, shape, string } from 'prop-types';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const useStyles = createUseStyles((theme) => ({
    arrowContainer: {
        position: 'absolute',
        top: -19,
        right: 15
    },
    dropdownButton: {
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        padding: 0,
        outline: 'none'
    },
    dropdownContainer: {
        position: 'relative'
    },
    dropdownItemsContainer: {
        background: 'white',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 5,
        minWidth: 170,
        padding: 0,
        position: 'absolute',
        width: '100%',
        transition: 'all .3s',
        top: ({ position }) => position.top,
        right: ({ position }) => position.right,
        bottom: ({ position }) => position.bottom,
        left: ({ position }) => position.left,
        '& button:first-of-type:hover div > svg > path': {
            fill: theme.color.paleBlue
        }
    },
    dropdownItem: {
        cursor: 'pointer',
        border: 'none',
        fontSize: 14,
        outline: 'none',
        padding: '7px 10px 7px 1rem',
        background: 'rgb(232, 235, 244)',
      
        textAlign: 'left',
        fontWeight: '600',
        paddingLeft: '1rem',
        transition: 'all .4s',
        '&:first-child': {
            marginTop: '0.6rem'
        },
        '&:last-child': {
            marginBottom: '0.6rem',
        },
        '&:hover': {
            background: theme.color.paleBlue
        },

        '&:last-child:after': {
            content: '',
            display: 'none'
        }
    },
    show: {
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: ({ position }) => position.up,
    
    },
    hide: {
        opacity: 0,
        transform: 'scaleY(0)',
        transformOrigin: ({ position }) => position.up,
 
    },
    noData: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        color: 'gray',
        textTransform: 'uppercase',
        fontSize: '0.7rem'
    }
}));

function NormalDropDown({ label, options, position }) {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const theme = useTheme();
    const classes = useStyles({ theme, position });

    const clickChange = () => {
        setUserMenuOpen((prev)=> !prev)
    };
  
  

    function onItemClick(onClick) {
        setUserMenuOpen(false);
        onClick && onClick();
    }

    return (
        <Column className={classes.dropdownContainer}>
            <div onClick={clickChange} className={classes.dropdownButton}>
                {label}
            </div>

            <Column
                className={
                    userMenuOpen
                        ? `${classes.dropdownItemsContainer} ${classes.show}`
                        : `${classes.dropdownItemsContainer} ${classes.hide}`
                }
            >
                {options.map((option, index) => (
                    <button
                        key={`option-${index}`}
                        className={classes.dropdownItem}
                        onClick={() => onItemClick(option.onClick)}
                    >
                        {option.label}
                    </button>
                ))}
             </Column>
        </Column>
    );
}

NormalDropDown.propTypes = {
    label: oneOfType([string, element]),
    options: arrayOf(
        shape({
            label: oneOfType([string, arrayOf(element)]),
            onClick: func
        })
    ),
    position: shape({
        top: number,
        right: number,
        bottom: number,
        left: number
    })
};

NormalDropDown.defaultProps = {
    position: {
        top: 52,
        right: -6
    }
};

export default NormalDropDown;
