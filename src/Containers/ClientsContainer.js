import React, { useState, useEffect } from 'react'
import '../CSS/ClientTable.css'
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
 
const ClientsContainer = () => {
    // Get current clients
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState([false])
    const [currentPage, setCurrentPage] = useState([1])
    const[clientsPerPage] = useState(5)   //# of items per page

    //Change page (pageNumber is passed in from Pagination.js ln 21)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        async function fetchData() {
          setLoading(true)          //set to true (in the process of fetching)
          const res = await fetch("http://localhost:3000/users/4");
          res
            .json()
            .then(res => setClients(res.clients))
            setLoading(false)
        }
    
        fetchData();
      },[]) //ADD EMPTY ARRAY TO AVOID INFINITE LOOP, MIMICS COMPONENTDIDMOUNT

    const indexOfLastClient = currentPage * clientsPerPage      //1 X 10
    const indexOfFirstClient = indexOfLastClient - clientsPerPage  
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient)  //get state of current clients and pass in

    return (
        <>
            <div className="table-title">
                <h3>My Clients</h3>
            </div>
            <ClientCards clients={currentClients} loading={loading} />
            <Pagination clientsPerPage={clientsPerPage} totalClients={clients.length} clients={clients} paginate={paginate}/>
        </>
    )
     

        
}
export default ClientsContainer