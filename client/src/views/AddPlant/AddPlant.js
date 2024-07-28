import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'
import back from "../UpdatePlant/arrow.png"
function AddPlant() {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const addPlant = async () => {
        toast.loading("Adding plant....")

        if (!name || !category || !price || !image || !description) {
            toast.error("Please enter all details")

            return
        }

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
            name: name,
            price: price,
            category: category,
            image: image,
            description: description
        })

        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setCategory("")
        setPrice("")
        setImage("")
        setDescription("")
    }

    return (
        <div>
            <h1 className='text-center'>Add Plant</h1>
            <div className='d-flex flex-column position-absolute top-50 start-50 translate-middle bg-dark' style={{width:"400px"}}>
                <img src={image} alt='...' style={{height:"250px"}}/><br/>
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
                <button type='button' onClick={addPlant} className="btn btn-outline-warning w-75 mx-5 my-2">Add Plant</button>
            </div>
            <Link to="/"><img src={back} alt="..." style={{height:"40px",position:"fixed",left:"10px",top:"10px",zIndex:"100 !important"}}/></Link>
            <Toaster />
        </div>
    )
}

export default AddPlant
