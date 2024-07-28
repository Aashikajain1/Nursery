import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


function PlantCard({_id,name,category,image,price,description,loadPlants}) {

  const deletePlant = async(plantId) =>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)
    toast.success(response.data.message)

    loadPlants()
  }

  return (
    <div className='shadow mb-5 bg-dark bg-gradient text-light rounded ms-3 'style={{width:"400px"}}>
      <img src={image} alt="..." className='img-fluid w-100' style={{height:200}}/>
      <h1 className='text-warning'>{name}</h1>
      <h4 className='text-light'>Price:  ₹{price}</h4>
      <div className='d-flex justify-content-around'>
        <Link className='bg-dark text-warning rounded border-0 px-5 py-3 mx-0 my-2 text-decoration-none' to={`/update/${_id}`}>Edit</Link>
        <button 
          type='button' 
          className='bg-dark text-warning rounded border-0 px-5 py-3 mx-0 my-2 text-decoration-none' 
          onClick={()=>{
            deletePlant(_id)
          }}>
          Delete
        </button>
      </div>
      <h6 className='fs-5'>Category:- {category}</h6>

      <h6 className='fs-5'>{description}</h6>
    </div>
  )
}

export default PlantCard
