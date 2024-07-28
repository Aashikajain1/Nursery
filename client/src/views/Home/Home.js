import React, { useEffect, useState } from 'react'
import PlantCard from "../../component/PlantCard/PlantCard"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import ImgAdd from "./add.png"
import { Link } from "react-router-dom"

function Home() {
  const [plants, setPlants] = useState([])

  const loadPlants = async () => {
    toast.loading("Loading plants...")
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

    toast.dismiss()
    toast.success("Plants loaded successfully")

    setPlants(response.data.data)
  }

  useEffect(()=>{
    loadPlants()
  }, [])

  return (
    <div>
      <h1 className='text-center'>My Nursery</h1>
      <div className='d-flex flex-wrap justify-content-around'>
      {
        plants.map((plant, i)=>{
          const {
            _id, 
            name, 
            category, 
            price, 
            image, 
            description
          } = plant

          return (
          <PlantCard 
              key={i}
              _id={_id} 
              name={name} 
              category={category} 
              price={price} 
              image={image} 
              description={description}
              loadPlants={loadPlants}
               />
            )
            
        })
      }
      </div>
      <Toaster />
      <Link to="/add">
        <img src={ImgAdd} style={{height:"40px",position:"fixed",right:"10px",bottom:"10px",zIndex:"100 !important"}}/>
      </Link>
    </div> 
  )
}

export default Home
