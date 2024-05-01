import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import GridViewIcon from '@mui/icons-material/GridView';
import GiteIcon from '@mui/icons-material/Gite';
import TaskIcon from '@mui/icons-material/Task';
import InventoryIcon from '@mui/icons-material/Inventory';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; 

const drawerWidth = 123;
const listItemHeight = 53;
const iconSize = 30;
const borderRadius = 5;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth, 
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
    backgroundColor: '#c8e6c9',
  },
  icon: {
    fontSize: iconSize,
    color: '#333333',
  },
  selectedIcon: {
    color: '#2e7d32',
  },
  selectedText: {
    color: '#2e7d32',
  },
  smallTitle: {
    fontSize: '10px',
  },
}));

const SideBar = () => {
  const classes = useStyles();

  const options = [
    { text: 'Dashboard', icon: <GridViewIcon className={`${classes.icon}`} /> },
    { text: 'Location', icon: <GiteIcon className={`${classes.icon}`} /> },
    { text: 'Inventory', icon: <TaskIcon className={`${classes.icon}`} /> },
    { text: 'Product', icon: <InventoryIcon className={`${classes.icon}`} /> },
    { text: 'Promotion', icon: <VolumeDownIcon className={`${classes.icon}`} /> },
    { text: 'Reports', icon: <SummarizeIcon className={`${classes.icon}`} /> },
    { text: 'Customer & Loyalty', icon: <LoyaltyIcon className={`${classes.icon}`} /> },
    { text: 'Users', icon: <SupervisorAccountIcon className={`${classes.icon}`} /> },
    { text: 'Notification', icon: <NotificationsIcon className={`${classes.icon}`} /> },
    { text: 'Settings', icon: <SettingsIcon className={`${classes.icon}`} /> },
    { text: 'Profile', icon: <AccountCircleIcon className={`${classes.icon}`} /> }, 
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
      <List>
        {options.map((option, index) => (
          <ListItem
            key={index}
            className={`${classes.listItem} ${index === selectedIndex && classes.selected}`}
            button
            onClick={() => handleListItemClick(index)}
          >
            {React.cloneElement(option.icon, {
              className: `${classes.icon} ${index === selectedIndex ? classes.selectedIcon : ''}`,
            })}
            <Typography variant="body2" className={`${classes.smallTitle} ${index === selectedIndex ? classes.selectedText : ''}`}>
              {option.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
