import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

import dashboardIcon from '../assets/images/sidePaneIcons/Dashboard.png';
import locationIcon from '../assets/images/sidePaneIcons/Location.png';
import inventoryIcon from '../assets/images/sidePaneIcons/Inventory.png';
import productIcon from '../assets/images/sidePaneIcons/Product.png';
import promotionIcon from '../assets/images/sidePaneIcons/Promotion.png';
import reportsIcon from '../assets/images/sidePaneIcons/Reports.png';
import customerIcon from '../assets/images/sidePaneIcons/Customer & Loyalty.png';
import usersIcon from '../assets/images/sidePaneIcons/Users.png';
import notificationIcon from '../assets/images/sidePaneIcons/Notification.png';
import settingsIcon from '../assets/images/sidePaneIcons/Settings.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const listItemHeight = 50;
const iconSize = 25;
const borderRadius = 5;

const useStyles = makeStyles((theme) => ({
  drawer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 125,
    [theme.breakpoints.down('sm')]: {
      width: 80,
    },
    [theme.breakpoints.down('xs')]: {
      width: 50,
    },
  },
  drawerPaper: {
    width: 130,
    [theme.breakpoints.down('sm')]: {
      width: 80,
    },
    [theme.breakpoints.down('xs')]: {
      width: 50,
    },
  },
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItem: {
    height: listItemHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: borderRadius,
  },
  selected: {
    backgroundColor: '#DFFEE6',
  },
  icon: {
    width: iconSize,
    height: iconSize,
    marginBottom: theme.spacing(1),
  },
  selectedIcon: {
    filter: 'brightness(0.8) invert(1) sepia(1) saturate(200%) hue-rotate(138deg) contrast(1.2) drop-shadow(0 0 0.2rem #00B625)',
},

  selectedText: {
    color: '#1b5e20',
  },
  smallTitle: {
    fontFamily: 'Inter',
    fontSize: '10px',
    fontWeight: 400,
  },
}));

const SideBar = () => {
  const classes = useStyles();

  const options = [
    { text: 'Dashboard', icon: dashboardIcon, route: '/dashboard' },
    { text: 'Location', icon: locationIcon, route: '/location' },
    { text: 'Inventory', icon: inventoryIcon, route: '/inventory' },
    { text: 'Product', icon: productIcon, route: '/product' },
    { text: 'Promotion', icon: promotionIcon, route: '/promotion' },
    { text: 'Reports', icon: reportsIcon, route: '/reports' },
    { text: 'Customer & Loyalty', icon: customerIcon, route: '/customer' },
    { text: 'Users', icon: usersIcon, route: '/users' },
    { text: 'Notification', icon: notificationIcon, route: '/notification' },
    { text: 'Settings', icon: settingsIcon, route: '/settings' },
    { text: 'Profile', icon: AccountCircleIcon, route: '/profile' },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List className={classes.list}>
        {options.map((option, index) => (
          <ListItem
            key={index}
            className={`${classes.listItem} ${index === selectedIndex && classes.selected}`}
            button
            onClick={() => handleListItemClick(index)}
            // component={Link}
            // to={option.route}
          >
            <img
              src={option.icon}
              alt={option.text}
              className={`${classes.icon} ${index === selectedIndex ? classes.selectedIcon : ''}`}
            />
            <Typography
              variant="body2"
              className={`${classes.smallTitle} ${index === selectedIndex ? classes.selectedText : ''}`}
            >
              {option.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

