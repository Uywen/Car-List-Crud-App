import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./AddEdit.css"
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'


// the initialstate of all the inputs
const initialState = {
  make : "",
  model: "",
  registration: "",
  owner: "",
  previousowner: "",
  image: ""
}

 const AddEdit = () => {

  const [state , setState] = useState(initialState)

// used to navigate to other webpages
  const history = useNavigate()

  // gets a car by the id to edit
  const {id} = useParams()

  useEffect(() => {
if (id) {
  getSingleCar(id)
}
  }, [id])

  // api used to get a single car
  const getSingleCar = async () => {
    const response = await axios.get(`http://localhost:8080/car/${id}`);
    if(response.status === 200){
     setState({ ...response.data[0] })
    }
  }

  // api used to add a car
  const addCar = async (data) => {
    const response = await axios.post(`http://localhost:8080/car`, data);
    if(response.status === 200){
      toast.success(response.data)
    }
  }

  // api used to update car
  const updateCar = async (data, id) => {
    const response = await axios.put(`http://localhost:8080/car/${id}`,data);
    if(response.status === 200){
      toast.success(response.data)
      console.log(data)
    }
  }

  // if the input fields are empty a popup will appear
  // you will be redirected to the home page with the cars list once a car has been added
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!state.make || !state.model || !state.registration || !state.owner || !state.previousowner || !state.image){
      toast.error("please fill in the respective field")
    } else {
      if (!id){
        addCar(state)
      }else{
        updateCar(state, id)
      }
      history('/')
    }
    
  }


  // allows the user to enter details in the input field
  const handleChange = (e) => {
    let {name, value} = e.target;
    setState({ ...state,[name]: value})
  }

  // the edit form
  return (
    <div style={{marginTop : "100px"}}>
<form style={{margin:"auto",
          padding:"15px",
             maxWidth: '400px',
             alignContent: "center"}}
             onSubmit={handleSubmit}>
              <label>Make</label>
              <input type="text" id='make' name='make' placeholder='Enter the make...' onChange={handleChange} value={state.make}></input>
              <label>Model</label>
              <input type="text" id='model' name='model' placeholder='Enter the model...' onChange={handleChange} value={state.model}></input>
              <label>Registration no.</label>
              <input type="text" id='registration' name='registration' placeholder='Enter the registration number...' onChange={handleChange} value={state.registration}></input>
              <label>Owner</label>
              <input type="text" id='owner' name='owner' placeholder='Enter the name of owner...' onChange={handleChange} value={state.owner}></input>
              <label>Previous Owner</label>
              <input type="text" id='previousowner' name='previousowner' placeholder='Enter the name of previousowner...' onChange={handleChange} value={state.previousowner}></input>
              <label>Image</label>
              <input type="text" id='image' name='image' placeholder='Enter image url...' onChange={handleChange} value={state.image}></input>
              {/* the add button */} 
<input type="submit"  value={id ? "Update" : "Add"} />
</form>
    </div>
  )
}

export default AddEdit