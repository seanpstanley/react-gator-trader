import React, {useState} from 'react';
import { DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import axios from 'axios'

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const AddTextbook = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [edition, setEdition] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  var seller = {firstname: "", lastName: "" , Course: "", bookTitle: "", ISBN: "", edition: "", Author: "", condition: "", views: 1, price: ""};
  const handleSubmit = () => {
    
    seller.firstname = firstname;
    seller.lastName = lastName;
    seller.Course = course;
    seller.bookTitle = bookTitle;
    seller.ISBN = ISBN;
    seller.edition = edition;
    seller.Author = author;
    seller.condition = condition;
    seller.price = price;
    

    
    console.log("test");
    axios.post('http://localhost:5000/api/listings/', seller );
    
    // axios.post('/patient?name=' + name + '&middleInitial=' + mi + '&lastName=' + lastName + '&dateOfBirth=' + dob.toISOString() + '&phoneNumber=' + phone + '&emailAddress=' + email + '&address=' + address).then(response => console.log(response));
    
    props.setUpdated(props.updated+1);
    setFirstname("");
    setLastName("");
    setCourse("");
    setBookTitle("");
    setEdition("");
    setAuthor("");
    setISBN("");
    setCondition("");
    setPrice("");
    setShowAlert(true);
  };
  return (
    <Container>
      <br/>
    <Paper>
      <DialogTitle>Add a Textbook</DialogTitle>
      <Container>
      <TextField margin="dense" value={firstname} onChange={(e) => setFirstname(e.target.value)} label="First Name" />
      <TextField margin="dense" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" />
        <TextField margin="dense" value={course} onChange={(e) => setCourse(e.target.value)} label="Course" fullWidth/>
        <TextField margin="dense" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} label="Book Title" fullWidth/>
        <TextField margin="dense" value={edition} onChange={(e) => setEdition(e.target.value)}label="Edition" fullWidth/>
        <TextField margin="dense" value={author} onChange={(e) => setAuthor(e.target.value)}label="Author" fullWidth/>
        <TextField margin="dense" value={ISBN} onChange={(e) => setISBN(e.target.value)}label="ISBN" fullWidth/>
        <TextField margin="dense" value={condition} onChange={(e) => setCondition(e.target.value)}label="Condition" fullWidth/>
        <TextField margin="dense" value={price} onChange={(e) => setPrice(e.target.value)}label="Price" fullWidth/>

       
      </Container>
      <DialogActions>
        <Button onClick={handleSubmit}>Add textbook</Button>
      </DialogActions>
    </Paper>
    <Snackbar anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
    }} open={showAlert} autoHideDuration={5000} onClose={() => setShowAlert(false)}>
      <Alert severity="success">
        Textbook added to database
      </Alert>
    </Snackbar>
    </Container>
  )
}

export default AddTextbook;