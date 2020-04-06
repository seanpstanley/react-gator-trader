import React, {useState, useEffect} from 'react';
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
  
  const [newBookList, setNewBookList] = useState([]);
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
  return (
    <Container>
      
    <TableContainer component={Paper}>
      <MaterialTable 
      icons={tableIcons}
      columns={[
        {title:"firstName", field:"firstname"},
        {title:"lastName", field:"lastName"},
        {title: "Course", field: "Course"},
        {title: "Textbook", field: "bookTitle"},
        {title: "Edition", field: "edition"},
        {title: "Author", field: "Author"},
        {title: "ISBN", field: "ISBN"},
        {title: "Condition", field: "condition"},
        {title: "Views", field: "views"},
        {title: "Price", field: "price"},
       
        
      ]}

      editable={{
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
      title="Textbooks"
      data={
    //     { seller: "Alan Nguyen", course: "Human-Computer Interaction", bookTitle: "HCI Concepts", edition:"10", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 60 , views:10},
    //     { seller: "Saw Luke Loo Wah", course: "Software Enginnering", bookTitle: "SRCUM Concepts", edition:"7", author: "John Doe", ISBN: 1234567, condition:"Like New" ,price: '$' + 65 , views:20},
    //   ]
     newBookList
        //props.updated
      }
      />

    </TableContainer>
    </Container>
  )

}

export default BooksList;