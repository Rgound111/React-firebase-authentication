import React from 'react'
import {Button} from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthcontext';

const Home = () => {
  const {user ,logOut} = useUserAuth();
  const handlelogOut =  async() =>{
    try{
      await logOut();
    } catch (err){
      console.log(err.message)
    }
  }

  return (
    <>
     <div className="p-4 box mt-3 text-center"> 
      Hello Welcome {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary"  onClick={handlelogOut}>  Log out  </Button>
      </div>
    </>
  )
}

export default Home
