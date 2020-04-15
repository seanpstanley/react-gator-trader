import React, {useRef,useState, useEffect} from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ImageIcon from '@material-ui/icons/Image';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';





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
  


const BooksList = (props) => {
    const inputFile = useRef(null) 

    const [open, setOpen] = useState(false);
    const [newBookList, setNewBookList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings').then(response => {

      const result =  response.data.filter(name=> name.firstname + name.lastName == 'AlbertGator')

        
  
      
        // setNewBookList(response.data);
        setNewBookList(result);


      });
      
   
    //   setNewBookList([
    //     { course: "Human-Computer Interaction", bookTitle: "HCI Concepts", edition:"10", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 60 , views:10},
    //     { course: "Software Enginnering", bookTitle: "SCRUM Concepts", edition:"7", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 65 , views:20}
    //   ]);

    
  }, [props.updated]);
//   useEffect(() => {
//     console.log(newBookList)
//   }, [newBookList])
const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  return (
    
    <Container>
      
    <TableContainer component={Paper} >
    {/*       {appointmentList.map(entry => entry.firstname == 'Alan' ? (
            <TableRow key={entry._id}>
              
            </TableRow>
          ) : null)} */}
  
      <MaterialTable  
      icons={tableIcons}
      columns={[
        {title: 'Image', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 90, borderRadius: '0%'}}/> },
        {title:"FirstName", field:"firstname"},
        {title:"LastName", field:"lastName"},
        {title: "Course", field: "Course"},
        {title: "Textbook", field: "bookTitle"},
        {title: "Edition", field: "edition"},
        {title: "Author", field: "Author"},
        {title: "ISBN", field: "ISBN"},
        {title: "Condition", field: "condition",lookup: { 1: 'Brand New', 2: 'Like New', 3: 'Used', 4:'Old'}},
        {title: "Price($)", field: "price"},
        {title: "Method", field: "method",lookup: { 1: 'Sell', 2: 'Trade', 3: 'Borrow', 4:'PDF'} }
       
        
      ]}
      

      editable={{
        onRowAdd: newData =>
        new Promise((resolve, reject) => {
          
          axios.post("http://localhost:5000/api/listings/" ,newData);
          setTimeout(() => {
              {
                props.setUpdated(props.updated + 1); 
              }
              resolve();
          }, 1000);
      }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            console.log(oldData._id);
            axios.put("http://localhost:5000/api/listings/" + oldData._id, newData);
            setTimeout(() => {
                {
                  props.setUpdated(props.updated + 1); 
                }
                resolve();
            }, 1000);
        }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            axios.delete("http://localhost:5000/api/listings/" + oldData._id);
            setTimeout(() => {
                {
                  props.setUpdated(props.updated + 1); 
                }
                resolve();
            }, 1000);
        })
      }}
      actions={[
        {
          icon: ImageIcon,
          tooltip: 'Add Image',
          onClick: (event, rowData) => {
            // setUser(rowData);
            // setMessage(rowData.patientName + ', you have an upcoming appointment.');
            setOpen(true);
          }
        }
      ]}
      title="Your Textbooks"
      data={
    //     { seller: "Alan Nguyen", course: "Human-Computer Interaction", bookTitle: "HCI Concepts", edition:"10", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 60 , views:10},
    //     { seller: "Saw Luke Loo Wah", course: "Software Enginnering", bookTitle: "SRCUM Concepts", edition:"7", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 65 , views:20},
    //   ]
     newBookList
        //props.updated
      }
      />

    </TableContainer>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Upload an Image</DialogTitle>
      <DialogContent>
      <DialogContentText>
        Upload an image of your textbook 
      </DialogContentText>
        
      </DialogContent>
      <DialogActions>
      <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
      <Button
      
          containerElement="label"
          backgroundColor='#293C8E'
          onClick={onButtonClick}
          >
                
               

          Upload
        </Button>
      </DialogActions>
      </Dialog>
    </Container>
  )

}

export default BooksList;