import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useParams, Link } from 'react-router-dom'
import back from "./arrow.png"
function UpdatePlant() {
    const { id } = useParams();
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const updatePlant = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`, {
            name: name,
            price: price,
            description: description,
            category: category,
            image: image
        })
        toast.success(response.data.message)
    }
    const loadPlant = async (id) => {
        if (!id) {
            return
        }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
        const { name, image, price, category, description } = response.data.data
        setName(name)
        setImage(image)
        setCategory(category)
        setDescription(description)
        setPrice(price)
    }
    useEffect(() => {
        loadPlant(id)
    }, [id])
    return (
        <div>
            <h1 className='text-center'>Update Plant: {id}</h1>
            <div className='d-flex flex-column position-absolute top-50 start-50 translate-middle bg-dark' style={{width:"400px"}}>
                <img src={image} className='img-fluid' style={{height:"250px"}}/>
                <input
                    type='text'
                    placeholder='Enter plant name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='mx-5 my-2 p-2'
                />
                <input
                    type='number'
                    placeholder='Enter plant price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='mx-5 my-2 p-2'
                />
                <input
                    type='text'
                    placeholder='Enter plant category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='mx-5 my-2 p-2'
                />
                <input
                    type='text'
                    placeholder='Enter plant image url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='mx-5 my-2 p-2'
                />
                <input
                    type='text'
                    placeholder='Enter plant description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='mx-5 my-2 p-2'
                />
                <button type='button' onClick={updatePlant} className="btn btn-outline-warning w-75 mx-5 my-2">Update Plant</button>
            </div>

            <br />  <br />
            <Link to="/"><img src={back} alt="..." style={{height:"40px",position:"fixed",left:"10px",top:"10px",zIndex:"100 !important"}}/></Link>

            <Toaster />
        </div>
    )
}
export default UpdatePlant
