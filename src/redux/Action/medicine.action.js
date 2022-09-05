import { deleteAllMedicineData, editAllMedicineData, getAllMedicineData, postAllMedicineData } from '../../common/apis/medicine.api';
import { getAllPatientData } from '../../common/apis/patient.api';
import { BASE_URL } from '../../Share/baseurl';
import * as Actiontype from '../actiontype'


export const getMedicine = () => (dispatch) => {
  try {
    dispatch(lodingMedicine())

    setTimeout(function () {

      getAllMedicineData()
        .then(data => dispatch(({ type: Actiontype.GET_MEDICINE, payload: data.data })))
        .catch(error => dispatch(ErrorMedicine(error.message)));

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
    }, 2000)
  } catch (error) {
    dispatch(ErrorMedicine(error.message))
  }

}


export const EditMedicine = (data) => (dispatch) => {
  try {
    editAllMedicineData(data)
      .then(data => dispatch({ type: Actiontype.EDIT_MEDICINE, payload: data.data}))
      .catch((error) => dispatch(ErrorMedicine(error.message)))


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

export const addMedicine = (data) => (dispatch) => {
  try {
    dispatch(lodingMedicine())

    setTimeout(function () {
      postAllMedicineData(data)
        .then(data => dispatch(({ type: Actiontype.ADD_MEDICINE, payload: data.data })))
        .catch(error => dispatch(ErrorMedicine(error.message)));

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
    }, 2000)

  } catch (error) {
    dispatch(ErrorMedicine(error.message))
  }
}

export const DeleteMedicine = (id) => (dispatch) => {
  try {
    dispatch(lodingMedicine())

    setTimeout(function () {

      deleteAllMedicineData(id)
        .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
        .catch(error => dispatch(ErrorMedicine(error.message)));


      // fetch(BASE_URL + 'medicine/' + id, {
      //   method: 'DELETE', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
      //   .catch(error => dispatch(ErrorMedicine(error.message)));
    }, 2000)
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

