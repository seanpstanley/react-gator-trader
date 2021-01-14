import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        

    },
});


function Profile(props) {
    const classes = useStyles();

    return (
        <div>
            <h1 style={{marginLeft:"42%",  marginTop:"4%"}}>PROFILE</h1>
            <Card className={classes.root} style={{marginLeft:"37%", marginTop:"4%"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="albert"
                        height="140"
                        image="albert.jpg"
                        title="albert"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.username}
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <br />
                            <strong>Email:</strong> {props.email}
                            <br />
                            <br />
                            <strong>Phone Number: </strong>{props.phoneNumber}
                            <br />
                            <br />
                            <strong>Affiliation:</strong> {props.affiliation}
                            <br />

            </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Edit
          </Button>
                    
                </CardActions>
            </Card>
        </div>
    );
}

export default Profile;