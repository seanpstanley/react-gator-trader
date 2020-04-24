import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { TableContainer } from '@material-ui/core';
import MaterialTable from "material-table";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)

};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


const AllBooksList = (props) => {


    const [newBookList, setNewBookList] = useState([]);
    const [condition, setCondition] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        axios.get('http://localhost:5000/api/listings').then(response => {
            setNewBookList(response.data);

        });


        //   setNewBookList([
        //     { course: "Human-Computer Interaction", bookTitle: "HCI Concepts", edition:"10", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 60 , views:10},
        //     { course: "Software Enginnering", bookTitle: "SCRUM Concepts", edition:"7", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 65 , views:20}
        //   ]);


    }, [props.updated]);
    //   useEffect(() => {
    //     console.log(newBookList)
    //   }, [newBookList])


    const getCondition = (conditionNumber) => {
        if (conditionNumber === '1') {
            return "Brand New";
        }
        else if (conditionNumber === '2') {
            return "Like New";
        }
        else if (conditionNumber === '3') {
            return "Used";
        }
        else {
            return "Old";
        }
    }

    const getMethod = (conditionNumber) => {
        if (conditionNumber === '1') {
            return "Sell";
        }
        else if (conditionNumber === '2') {
            return "Trade";
        }
        else if (conditionNumber === '3') {
            return "Borrow";
        }
        else {
            return "PDF";
        }
    }
    const classes = useStyles();

    const handleEmail = (fN, lN) => {
        axios.get('http://localhost:5000/api/users/')
            .then((users) => {
                users.data.forEach((user) => {
                    if (user.username === fN + " " + lN) {
                        window.location.href="mailto:" + user.email;
                        
                    }
                })
            })
            
    }

    return (
        <Container>

            <TableContainer component={Paper} width="100%">
                <MaterialTable
                    icons={tableIcons}
                    columns={[
                        { title: "firstName", field: "firstname" },
                        { title: "lastName", field: "lastName" },
                        { title: "Course", field: "Course" },
                        { title: "Textbook", field: "bookTitle" },
                        { title: "Edition", field: "edition" },
                        { title: "Author", field: "Author" },
                        { title: "ISBN", field: "ISBN" },
                        { title: "Condition", field: "condition", lookup: { 1: 'Brand New', 2: 'Like New', 3: 'Used', 4: 'Old' } },
                        { title: "Price ($)", field: "price" },
                        { title: "Method", field: "method", lookup: { 1: 'Sell', 2: 'Trade', 3: 'Borrow', 4: 'PDF' } }


                    ]}
                    detailPanel={[
                        {
                            tooltip: 'Details',
                            render: rowData => {

                                return (

                                    <Paper >
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase className={classes.image}>
                                                    <img src={rowData.imageUrl} style={{ width: 120, borderRadius: '0%' }} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <strong>Seller's Name:</strong> {rowData.firstname} {rowData.lastName}
                                                        <br />
                                                        <br />
                                                        <strong>Course Number:</strong> {rowData.Course}
                                                        <br />
                                                        <br />
                                                        <strong>Book Title:</strong> {rowData.bookTitle}
                                                        <br />
                                                        <br />
                                                        <strong>ISBN:</strong> {rowData.ISBN}
                                                        <br />
                                                        <br />
                                                        <strong>Edition:</strong> {rowData.edition}
                                                        <br />
                                                        <br />
                                                        <strong>Author:</strong> {rowData.Author}
                                                        <br />
                                                        <br />
                                                        <strong>Condition:</strong> {getCondition(rowData.condition)}
                                                        <br />
                                                        <br />
                                                        <strong>Price:</strong> {rowData.price}
                                                        <br />
                                                        <br />
                                                        <strong>Method:</strong> {getMethod(rowData.method)}
                                                        <br />




                                                    </Grid>
                                                    <Grid item>
                                                        <Button size="small" color="primary"  >
                                                            <a href={handleEmail(rowData.firstname, rowData.lastName)} >Contact Seller</a>
                                                        </Button>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Paper>



                                )
                            }
                        }
                    ]}
                    title="Textbooks"
                    data={
                        newBookList
                    }
                />

            </TableContainer>
        </Container>
    )

}

export default AllBooksList;