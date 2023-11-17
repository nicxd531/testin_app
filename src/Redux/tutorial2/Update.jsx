import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/UserReducer';

function Update() {
    // this component contains all hooks that make up the update component that used to update the second redux tutorial app
    // the used dispatch method is used to send data back to the reducer passed into it 
    // the use navigate method is used to navigate to the url passed into it 
    // the useparams method is ued to get the id passed into the url
    // the use selector method is used to fatch data from the main store
    // the form in this component is used to update and edit data from the main reducers 
    const {id} = useParams();
    const usersTut2 =useSelector((state)=>state.usersTut2)
    const existingUser = usersTut2.filter(f => f.id == id)
    const {name,email}=existingUser[0]
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate =useNavigate()
    const handleUpdate = (e)=>{
        e.preventDefault()
        dispatch(updateUser({ id : id,name: uname,email: uemail}))
        navigate("/reduxHome")
    }
  return (
    <div className='d-flex w-100 mt-5 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update User</h3>
            <form onSubmit={handleUpdate} >
                <div>
                    <label htmlFor='name'>name:</label>
                    <input type='text' name='name' className='form-control' placeholder='enter name'
                    value={uname}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='enter email'
                    value={uemail}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </form><br/>
            <button onClick={handleUpdate} className='btn btn-info'>Update</button>
        </div>
    </div>
  )
}

export default Update