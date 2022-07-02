import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';

function Patient(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem('Patient'));
        if (localData === null) {
            localStorage.setItem('Patient', JSON.stringify([values]))
        } else {
            localData.push(values);
            localStorage.setItem('Patient', JSON.stringify(localData))
        }



    }

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        age: yup.number().required("please enter age").positive().integer(),
        address: yup.string().required("please enter address"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            address: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            handleInsert(values);
        },
    });

    const { errors, handleChange, handleSubmit, handleBlur, touched } = formik;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'name', headerName: 'Patient Name', width: 70 },
        { field: 'age', headerName: 'Age', width: 130 },
        { field: 'address', headerName: 'Address', width: 130 },
       
    ];

    const loadData = ()=>{
        let localData = JSON.parse(localStorage.getItem('Patient'));
        if(localData !== null){
            setData(localData);
        }
    }

    useEffect(() => { 
        loadData();
    },[])

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form patient Detail
            </Button>
            {/* <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div> */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Patient Detaile</DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>

                            <TextField
                                margin="dense"
                                name="name"
                                label="Patient Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                            <TextField
                                margin="dense"
                                name="age"
                                label="Age"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p>{errors.age && touched.age ? errors.age : ''}</p>
                            <TextField
                                margin="dense"
                                name="address"
                                label="Address"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p>{errors.address && touched.address ? errors.address : ''}</p>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Subscribe</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
        </div>
    );
}

export default Patient;