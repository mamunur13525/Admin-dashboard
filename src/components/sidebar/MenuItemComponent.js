import React from 'react';
import { any, arrayOf, func, string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CollapsibleContent from 'components/collapsible/CollapsibleContent';
import { useSidebar } from 'hooks/useSidebar';
import './MenuItem.css';

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
    },
    container: {
        display: 'flex',
        height: 45,
        cursor: 'pointer',
        'svg':{
            fill: 'red'
        },
        '&:hover svg': {
            transition: 'background .4s',
            backgroundColor:"#4325db"
        },
        paddingLeft: ({ level }) => 32 * level,
        transition: 'all 0.2s ease-in-out'
    },
  
    title: {
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: ({ theme, isActive }) => (isActive ? theme.color.paleBlue : theme.color.grayishBlue),
        marginLeft: 24
    },
   

});

function MenuItemComponent({ children, icon: Icon, id, items = [], level = 1, onClick, title }) {
    const theme = useTheme();
    const isCollapsible = children && children.length > 0;
    const { isExpanded, isActive, onItemClick } = useSidebar({
        isCollapsible,
        item: id,
        items
    });
    const classes = useStyles({ theme, level, isActive });
    const classNameColumn = isActive ? classes.leftBar : '';
    const classNameContainer = [classes.container, isActive && classes.activeContainer].join(' ');
    const iconColor = isActive ? theme.color.paleBlue : theme.color.grayishBlue2;

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }
    return (
        <Column key={id} className={classNameColumn}>
            <Row vertical='center' onClick={onItemClicked} className={`${classNameContainer}  ${isActive  ? 'sidebar_row svgIcon':'sidebar_row'}`}>
                <Icon className={classes.icon} fill={ isActive ? "white": iconColor}  />
                <span className={classes.title}>{title}</span>
            </Row>
            {isCollapsible && (
                <CollapsibleContent expanded={isExpanded}>
                    {children.map((child) => child.type({ ...child.props }))}
                </CollapsibleContent>
            )}
        </Column>
    );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
    children: any,
    icon: func,
    id: string,
    onClick: func,
    items: arrayOf(string),
    title: string
};

export default MenuItemComponent;