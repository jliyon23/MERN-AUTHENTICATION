import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    async function handleSubmit(e) {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:5001/register', { name, email, password });
          console.log(response);
          toast.success('Registration successful');
          setTimeout(() => {
              navigate('/login');
          }, 3000);
      } catch (error) {
          if (error.response && error.response.status === 400) {
              toast.error('Email already exists. Please use a different email.');
          } else {
              console.error('Registration failed:', error);
              toast.error('Registration failed. Please try again.');
          }
      }
  }
  
  

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-5 rounded w-75'>
          <h1>MERN-AUTH by Liyon</h1>
            <h2>SignUp</h2>
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
        <Form onSubmit={handleSubmit} >
            <Form.Group className='mb-3' controlId='userName'>
                <Form.Label>User name</Form.Label>
                <Form.Control type='text' placeholder='Enter username' onChange={(e) => setName(e.target.value)} />
            </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button className='mb-3 w-100 rounded' variant="primary" type="submit">
        Signup
      </Button>
      <Link to="/login" className='btn bg-light btn-default mb-3 w-100 rounded' variant='outline-success'>
        Already have account ? Login here
      </Link>
    </Form>
        </div>
    </div>
  )
}

export default Signup