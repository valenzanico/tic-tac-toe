import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
const UserCard = (props) => {
    const classes = useStyles();
    return (
        <Card className="userdate">
    <CardContent><Avatar alt="Name" src={props.logdata[0].photo} className={classes.large} />
      {props.logdata[0].namep} {props.logdata[0].name}<br />
    {props.logdata[0].emailp} {props.logdata[0].email}</CardContent>
    

    </Card>
    )
}

export default UserCard
