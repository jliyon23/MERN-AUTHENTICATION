import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:5001/login', {email, password})
            .then(result => {console.log(result)
              if(result.data == "Success"){
                toast.success("Login Successfull")
                setTimeout(() => {
                  navigate('/home');
              }, 3000)
              }
              else if(result.data == "Incorrect password"){
                toast.error("incorrect password")
              
              }
              else if(result.data == "User not found"){
                toast.error("user not found please register")
              }
            }
            )
            .catch(err => console.log(err))

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-5 rounded w-75'>
            <h1>Login</h1>
            
        <Form onSubmit={handleSubmit} >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Slide
        />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button className='mb-3 w-100 rounded' variant="primary" type="submit">
        Login
      </Button>
      <Link to="/register" className='btn bg-light btn-default mb-3 w-100 rounded' variant='outline-success'>
        Not registered yet? Signup here
      </Link>
    </Form>
        </div>
    </div>
  )
}

export default Login