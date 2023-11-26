import React ,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from './LoginContext';

function Login() {
  // use context hook for fetching setusername and setShowProfile
   const {setUsername,setShowProfile}=useContext(LoginContext);
  //  handle submit function for preventing refresh and setting showProfile
  const handleSubmit=(e)=>{
    e.preventDefault()
    setShowProfile(true)
  }
  return (
    <section className='d-flex border bg-secondary text-white py-5 my-3  w-50 justify-content-center flex-column align-items-center'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setUsername(e.target.value)}/>
        <Form.Text className="text-info">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

    </section>
  )
}

export default Login