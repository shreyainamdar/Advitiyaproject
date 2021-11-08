//import React from 'react'
import { useState } from 'react'
//import Button from './Button.js'

const Frontend=() => {

    const [Name,setName]=useState('')
  const [usn,setusn]=useState('')
  const [email,setemail]=useState('')
  const [college,setcollege]=useState('')
  const [branch,setbranch]=useState('')
  const [region,setregion]=useState('')
  const [sem,setsem]=useState('')
  const [contact,setcontact]=useState('')
   
   


    return (
        <form className="add-reg">
        <div className='form-control'>
        <label >Region</label>
        <input type='text' placeholder='Type region' value={region}
         onChange={(e) =>setregion(e.target.value)} ></input>
    </div>
    <div className='form-control'>
        <label >Name</label>
        <input type='text' placeholder='Type your name' value={Name}
         onChange={(e) =>setName(e.target.value)} ></input>
    </div>


    <div className="form-control">
        <label>USN</label>
        <input type='text' placeholder='Enter USN' value={usn} 
        onChange={(e) =>setusn(e.target.value)}></input>
    </div>

    <div className="form-control">
        <label>Email</label>
        <input type='text' placeholder='Enter email id' value={email} 
        onChange={(e) =>setemail(e.target.value)}></input>
    </div>
    <div className="form-control">
        <label>College</label>
        <input type='text' placeholder='Enter college name' value={college} 
        onChange={(e) =>setcollege(e.target.value)}></input>
    </div>

    <div className="form-control">
        <label>Branch</label>
        <input type='text' placeholder='Enter branch' value={branch} 
        onChange={(e) =>setbranch(e.target.value)}></input>
    </div>

    <div className='form-control'>
        <label >SEM</label>
        <input type='text' placeholder='enter sem' value={sem}
         onChange={(e) =>setsem(e.target.value)} ></input>
    </div>

    <div className='form-control'>
        <label >contact</label>
        <input type='text' placeholder='enter contact number' value={contact}
         onChange={(e) =>setcontact(e.target.value)} ></input>
    </div>

   

 <button >register</button>
 <button>cancel</button>
    

    </form>
    );
}

export default Frontend

// <div className="form-control">
//<Button color='green' text='register' textclr='white' />
//<Button  color='white' text='cancel' textclr='black' />
//</div>



//  <TextInput
//       ref='mobileNo'
//       keyboardType="numeric"
//       style={[styles.textInput, { width: '100%' }]}
//       placeholder='Enter mobile number'
//       onChangeText={(value) => this.handleChange('mobileNo', value)}   />
//  const App = () => {
//   const [name, setName] = useState("");

//   return (
//     <input
//       value={name}
//       onChange={e => setName(e.target.value)}
//       onInput={toInputUppercase} // apply on input which do you want to be capitalize
//     />
//   );
// };
// <input type="email" value={ this.state.email } onChange={ handleOnChange } />
//  let handleOnChange = ( email ) => {

//     // don't remember from where i copied this code, but this works.
//     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if ( re.test(email) ) {
//         // this is a valid email address
//         // call setState({email: email}) to update the email
//         // or update the data in redux store.
//     }
//     else {
//         // invalid email, maybe show an error to the user.
//     }

// }