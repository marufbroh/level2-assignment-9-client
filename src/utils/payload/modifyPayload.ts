// export const modifyPayload=(values: any)=>{
//     const obj={...values}
//     console.log('modified payload', obj);
     
//     const file = obj['file']
//     delete obj['file']
//     const data= JSON.stringify(obj)
//     const formData= new FormData()
//     formData.append("data" , data)
//     formData.append('file', file  as Blob)     
//     return formData
// }


export const modifyPayload = (values: any) => {
    const obj = { ...values };
    console.log('modified payload', obj);
    
    const file = obj['file'];
    delete obj['file'];
    const data = JSON.stringify(obj);
    
    const formData = new FormData();
    formData.append("data", data);
    formData.append('file', file as Blob);
    
    return formData;
  }
  
  type TMultipleValues = {
    id: { id: string };
    file: File[];
  };

  export function modifyMultiplePayload(values:TMultipleValues) {
    const formData = new FormData();
  
    // Append the id to the form data
    formData.append('data', JSON.stringify({id:values.id}));
  
    // Append each file to the form data
    values.file.forEach((file, index) => {
      formData.append('files', file);
    });
  
    return formData;
  }



  type ValueObject = { [key: string]: any };

export const getUpdatedValues=(oldValue:ValueObject, newValue:ValueObject):ValueObject=> {
    let updatedValue:ValueObject = {};
    for (let key in oldValue) {
        if (oldValue.hasOwnProperty(key) && newValue.hasOwnProperty(key)) {
            if (oldValue[key] !== newValue[key]) {
                updatedValue[key] = newValue[key];
            }
        }
    }

    return updatedValue;
}





// function getUpdatedValues(oldValue: ValueObject, newValue: ValueObject): ValueObject {
//     let updatedValue: ValueObject = {};

//     for (let key in oldValue) {
//         if (oldValue.hasOwnProperty(key) && newValue.hasOwnProperty(key)) {
//             if (oldValue[key] !== newValue[key]) {
//                 updatedValue[key] = newValue[key];
//             }
//         }
//     }

//     return updatedValue;
// }