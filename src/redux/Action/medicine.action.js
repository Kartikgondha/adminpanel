import { deleteAllMedicineData, editAllMedicineData, getAllMedicineData, postAllMedicineData } from '../../common/apis/medicine.api';
import { getAllPatientData } from '../../common/apis/patient.api';
import { BASE_URL } from '../../Share/baseurl';
import * as Actiontype from '../actiontype'
import { db } from '../../Firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"; 
import { async } from '@firebase/util';



export const getMedicine = () => async(dispatch) => {
  try {

    const querySnapshot = await getDocs(collection(db, "medicine"));
    let data = [];
    querySnapshot.forEach((doc) => {
  data.push({ id: doc.id, ...doc.data()});
  console.log(`${doc.id} => ${doc.data()}`);
  console.log(data);
});
   
dispatch(({ type: Actiontype.GET_MEDICINE, payload: data }))
    //dispatch(lodingMedicine())

    // setTimeout(function () {

      // getAllMedicineData()
      //   .then(data => dispatch(({ type: Actiontype.GET_MEDICINE, payload: data.data })))
      //   .catch(error => dispatch(ErrorMedicine(error.message)));

      // fetch(BASE_URL + 'medicine')
      //   .then(response => {
      //     if (response.ok) {
      //       return response;
      //     } else {
      //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
      //       error.response = response;
      //       throw error;
      //     }
      //   },
      //     error => {
      //       var errmess = new Error(error.message);
      //       throw errmess;
      //     })
      //   .then(response => response.json())
      //   .then(data => dispatch(({ type: Actiontype.GET_MEDICINE, payload: data })))
      //   .catch(error => dispatch(ErrorMedicine(error.message)));
    // }, 2000)
  } catch (error) {
    dispatch(ErrorMedicine(error.message))
  }

}


export const EditMedicine = (data) => async(dispatch) => {
  try {
    const MedicineRef = doc(db, "medicine", data.id);


await updateDoc(MedicineRef, {
  name: data.name,
  price: data.price,
  quantity: data.quantity,
  expiry: data.expiry,

});
dispatch({ type: Actiontype.EDIT_MEDICINE, payload: data})
    // editAllMedicineData(data)
    //   .then(data => dispatch({ type: Actiontype.EDIT_MEDICINE, payload: data.data}))
    //   .catch((error) => dispatch(ErrorMedicine(error.message)))


    // fetch(BASE_URL + 'medicine/' + data.id, {
    //   method: 'PUT', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then(response => response.json())
    //   .then(data => dispatch({ type: Actiontype.EDIT_MEDICINE, payload: data }))
    //   .catch((error) => dispatch(ErrorMedicine(error.message)))

  } catch (error) {
    dispatch(ErrorMedicine(error.message))
  }
}

export const addMedicine = (data) => async(dispatch) => {
 console.log(data);
  try {
    const docRef = await addDoc(collection(db, "medicine"), data);
    
    dispatch({ type: Actiontype.ADD_MEDICINE, payload: {id: docRef.id,...data}})
    console.log("Document written with ID: ", docRef.id);
    // dispatch(lodingMedicine())
    
    
    
    // setTimeout(function () {
    //   postAllMedicineData(data)
    //     .then(data => dispatch(({ type: Actiontype.ADD_MEDICINE, payload: data.data })))
    //     .catch(error => dispatch(ErrorMedicine(error.message)));

      // fetch(BASE_URL + 'medicine', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then(response => response.json())
      //   .then(data => dispatch(({ type: Actiontype.ADD_MEDICINE, payload: data })))
      //   .catch(error => dispatch(ErrorMedicine(error.message)));
    // }, 2000)

  } catch (error) {
    dispatch(ErrorMedicine(error.message))
  }
}

export const DeleteMedicine = (id) => async(dispatch) => {
  try {
    await deleteDoc(doc(db, "medicine", "id"));
    dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id }))

    // dispatch(lodingMedicine())

    // setTimeout(function () {

    //   deleteAllMedicineData(id)
    //     .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
    //     .catch(error => dispatch(ErrorMedicine(error.message)));


      // fetch(BASE_URL + 'medicine/' + id, {
      //   method: 'DELETE', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
      //   .catch(error => dispatch(ErrorMedicine(error.message)));
    // }, 2000)
  } catch (error) {
    dispatch(ErrorMedicine(error.message))
  }
}

export const lodingMedicine = () => (dispatch) => {
  dispatch({ type: Actiontype.LODING_MEDICINE })
}

export const ErrorMedicine = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_MEDICINE, payload: error })
}

