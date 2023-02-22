import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from "axios"
import { toast } from 'react-toastify'



export const Home = () => {

  // the information is stored in this variable
  const [data, setData] = useState([])

  useEffect(() => {
    getCars()
  }, [])

  // gets the list of all the cars on the api
  const getCars = async () => {
    const response = await axios.get("http://localhost:8080/cars");
    if(response.status === 200){
      setData(response.data)
    }
  }
  console.log("data =", data)

  // calling the delete api using axios
  // when the user clicks on the delete button
  // a popup wil appear asking if they sure that they want to delete a car
  const carDelete = async (id) => {
    if(window.confirm("Are you sure you want to remove this car ?")){
      const response = await axios.delete(`http://localhost:8080/car/${id}`);
      // the toast art pop will appear
      if(response.status === 200){
        toast.success(response.data)
        getCars()
      }
    }
    
}
// the table style with its respective element
  return (
    <div style={{marginTop: "150px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign : 'center'}}>No.</th>
            <th style={{textAlign : 'center'}}>Make</th>
            <th style={{textAlign : 'center'}}>Model</th>
            <th style={{textAlign : 'center'}}>Registration</th>
            <th style={{textAlign : 'center'}}>Owner</th>
            <th style={{textAlign : 'center'}}>Previous Owner</th>
            <th style={{textAlign : 'center'}}>Image</th>
            <th style={{textAlign : 'center'}}>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
          data.map((item,index) => {
            return(
              <tr key={index}>
                {/* adds a number to each item with their positions */}
              <th scope='row'>{index + 1}</th>
              <td>{item.make}</td>
              <td>{item.model}</td>
              <td>{item.registration}</td>
              <td>{item.owner}</td>
              <td>{item.previousowner}</td>
              {/* used image tag to display image */}
              <td><img className="images"src={item.image}></img></td>
              <td>
                {/* link to the edit page */}
                <Link to={`/update/${item.id}`}>
                  <button className='btn btn-edit'>Edit</button>
                </Link>
                {/* delete button */}
                <button className='btn btn-delete' onClick={() => carDelete(item.id)}>Delete</button>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
  )
}

export default Home