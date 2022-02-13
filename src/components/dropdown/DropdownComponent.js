import React, { useEffect, useRef, useState } from 'react';
import { arrayOf, element, func, number, oneOfType, shape, string } from 'prop-types';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';

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
        position: 'relative',
        width: '100%'
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
        maxHeight: '250px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
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
        background: 'white',
        textAlign: 'left',
        paddingLeft: '1rem',
        transition: 'all .3s',
        '&:first-child': {
            marginTop: '0.6rem'
        },
        '&:last-child': {
            marginBottom: '0.6rem'
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
        transformOrigin: ({ position }) => position.up
    },
    hide: {
        opacity: 0,
        transform: 'scaleY(0)',
        transformOrigin: ({ position }) => position.up
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
    },
    inputDiv: {
        border: '1px solid gray',
        borderRadius: '20px',
        display: 'flex',
        paddingRight: '15px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        marginRight: '5px'
    },
    input: {
        border: 'none',
        borderRadius: '20px',
        padding: '0.4rem 0.9rem',
        fontSize: '13px',
        fontWeight: 'bold',
        width: '100%',
        height: '38px',
        background: 'white',
        textAlign: 'left',
        textOverflow: 'ellipsis',
        '&:hover ': {
            color: '#5333ED',
            borderColor: '#5333ED'
        },
        '&:focus': {
            outline: 'none',
            border: 'none'
        }
    },
    icon: {
        fontSize: '1rem!important'
    },
    logOut: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    profileIcon: {
        width: '30px',
        borderRadius: '50%',
        '& +p': {
            fontSize: '1rem'
        }
    }
}));

function DropdownComponent({ label, options, position, clickFunction }) {
    const [userMenuOpen, setUserMenuOpen] = useState({ status: false, value: '' });
    const theme = useTheme();
    const classes = useStyles({ theme, position });
    const [filterValue, setFilterValue] = useState(null);
    const [searchText, setSearchText] = useState(null);

    const inputChange = (e) => {
        let text = e.target.value;
        setSearchText(text);
        setFilterValue(
            options.filter((val) => {
                if (val === '') {
                    return val;
                } else if (JSON.stringify(val.label).toLowerCase().includes(text.toLowerCase())) {
                    return val;
                }
            })
        );
    };
    useEffect(() => {
        if (userMenuOpen.value === '') {
            setTimeout(() => {
                setFilterValue(null);
            }, 300);
        }
    }, [userMenuOpen.value]);

    const clickInputDiv = () => {
        if (userMenuOpen.value) {
            setUserMenuOpen({ status: true, value: userMenuOpen.value });
        } else {
            setUserMenuOpen({ status: !userMenuOpen.status, value: userMenuOpen.value });
        }
    };

    const clickButtonItem = (option) => {
        clickFunction(option)

        setUserMenuOpen({ status: false, value: option.label });
    };
    // drop down hide when outside click
    const ref = useRef();

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (userMenuOpen.status && ref.current && !ref.current.contains(event.target)) {
                setUserMenuOpen({ status: false, value: userMenuOpen.value });
                setSearchText(null);
            }
        }

        // Bind the event listener
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('click', handleClickOutside);
        };
    }, [userMenuOpen]);

    const onItemClick = (option) => {
        setSearchText(null);
        setUserMenuOpen({ status: false, value: option.label });
    };

    return (
        <Column className={classes.dropdownContainer}>
            <div className={classes.dropdownButton}>
                <>
                    {label.input && (
                        <>
                            <div className={classes.inputDiv}>
                                <input
                                    placeholder={label.mess}
                                    className={classes.input}
                                    type='text'
                                    onChange={(e) => inputChange(e)}
                                    onClick={clickInputDiv}
                                    value={searchText !== null ? searchText : userMenuOpen.value}
                                    id='searchInput'
                                    ref={ref}
                                />
                                {userMenuOpen.status ? (
                                    <SearchIcon
                                        onClick={() =>
                                            setUserMenuOpen({
                                                status: !userMenuOpen.status,
                                                value: ''
                                            })
                                        }
                                        className={classes.icon}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        onClick={() => setUserMenuOpen({ status: true, value: '' })}
                                        className={classes.icon}
                                    />
                                )}
                            </div>
                        </>
                    )}
                    {label.button && (
                        <>
                            <div className={classes.inputDiv}>
                                <input
                                    className={classes.input}
                                    // onChange={(e) => setUserMenuOpen({ status: true, value: e.target.value })}
                                    onClick={clickInputDiv}
                                    value={userMenuOpen.value || label.mess}
                                />

                                <ExpandMoreIcon
                                    onClick={() =>
                                        setUserMenuOpen({ status: !userMenuOpen.status, value: '' })
                                    }
                                    className={classes.icon}
                                />
                            </div>
                        </>
                    )}
                    {label.profile && (
                        <>
                            <div
                                onClick={() =>
                                    setUserMenuOpen({ status: !userMenuOpen.status, value: '' })
                                }
                                className={classes.logOut}
                            >
                                <img
                                    className={classes.profileIcon}
                                    src='https://www.gravatar.com/avatar/a44be827447e1374a16777915d308070?s=200'
                                    alt=''
                                />
                                <p>Ashutosh Kumar</p>
                                <ExpandLessOutlinedIcon className={classes.icon} />
                            </div>
                        </>
                    )}
                </>
            </div>

            <div
                ref={ref}
                id='style-2'
                className={
                    userMenuOpen.status
                        ? `${classes.dropdownItemsContainer} ${classes.show}`
                        : `${classes.dropdownItemsContainer} ${classes.hide}`
                }
            >
                {(label.button || label.profile) &&
                    options.map((option, index) => (
                        <button
                            key={`option-${index}`}
                            style={
                                userMenuOpen.value === option.label
                                    ? { fontWeight: 600, background: '#E8EBF4' }
                                    : {}
                            }
                            className={classes.dropdownItem}
                            onClick={() => clickButtonItem(option)}
                        >
                            {option.label}
                        </button>
                    ))}
                {label.input &&
                    (filterValue === null ? options : filterValue).map((option, index) => (
                        <button
                            key={`option-${index}`}
                            style={
                                userMenuOpen.value === option.label
                                    ? { fontWeight: 600, background: '#E8EBF4' }
                                    : {}
                            }
                            className={classes.dropdownItem}
                            onClick={() => onItemClick(option)}
                        >
                            {option.label}
                        </button>
                    ))}
                {JSON.stringify(filterValue) === '[]' && (
                    <div className={classes.noData}>
                        <DescriptionOutlinedIcon style={{ marginBottom: '5px' }} />
                        no data
                    </div>
                )}
            </div>
        </Column>
    );
}

DropdownComponent.propTypes = {
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

DropdownComponent.defaultProps = {
    position: {
        top: 52,
        right: -6
    }
};

export default DropdownComponent;
