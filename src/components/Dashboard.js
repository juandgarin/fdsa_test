import { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import Destination from './Destination';

const Dashboard = () => {
    const references = {
        refId: useRef(),
        refName: useRef(),
        refDescription: useRef(),
        refCountryCode : useRef(),
        refCountry: useRef(),
        refCity: useRef(),
    }
    const {refId, refName,refDescription,refCountryCode,refCountry,refCity} = references;
    const [data, setData] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState({
        id: '',
        name: '',
        description: '',
        countryCode: '',
        destinationType: {
            country: '',
            city: ''
        },
        lastModify: ''
    })

    //Editing or Adding Handler 
    const [isEditing, setIsEditing] = useState(false);
    
    //Fetching destinations
    useEffect(async function() {
        setData(await getDestinations())
  }, []);
 

    //Fetching destination by id
    const getDestinationById = (id) => {
        return data.find(dest => dest.id === id)
    }


    //Cleaning Textboxs
    const cleanTextboxs = () => {

        refId.current.value = '';
        refName.current.value = '';
        refDescription.current.value = '';
        refCountryCode.current.value = '';
        refCountry.current.value = '';
        refCity.current.value = '';
        //refLastModify.current.value = '';
    }

    //Editing destination
    const handleSaveButton = async () => {
        
        //EDITING 
        if(isEditing){
        const editedDestination = {
            id: refId.current.value,
            name: refName.current.value,
            description: refDescription.current.value,
            countryCode: refCountryCode.current.value,
            destinationType: {
                country: refCountry.current.value,
                city: refCity.current.value
            } 
        }
 
        let result = await axios({
            method: "put",
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/editDestination `,
            data: editedDestination
          });
          
        console.log("EDITING");
        setData(await getDestinations())
        }else{
            //ADDING
            const newDestination = {
                name: refName.current.value,
                description: refDescription.current.value,
                countryCode: refCountryCode.current.value,
                destinationType: {
                    country: refCountry.current.value,
                    city: refCity.current.value
                },
                lastModify: new Date()
            }
            let result = await axios({
                method: "post",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/addDestination`,
                data: newDestination
              });
              console.log("ADDING");
              setData(await getDestinations())
        }
    }

    //Adding new destination
    const handleNewDestinationButton = async () => {
        cleanTextboxs()
        setIsEditing(false);
    }
  
    const getDestinations = async () => {
        console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/destinations`)
        const result = await axios({
            method: "get",
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/destinations`,
        });
        
        return result.data
    }



    return (
        <>
            {data.map(dest => (
                <div key={dest.id} className="d-flex bg-dark m-3 justify-content-around p-3">
                    <Destination
                        dest={dest}
                        setSelectedDestination={setSelectedDestination}
                        selectedDestination={selectedDestination}
                        data={data}
                        setData={setData}
                        getDestinationById={getDestinationById}
                        references={references}
                        setIsEditing={setIsEditing}
                    />


                </div>))}
            <div className="d-flex justify-content-end">
                <button type="button" onClick={handleNewDestinationButton}className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Create a new one
                </button>
            </div>

            {/* MODAL EDITAR */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editDestinationModal_label">Editing : {selectedDestination.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-between p-2">
                                <label>Id</label>
                                <input type="text" ref={refId} disabled defaultValue={selectedDestination.id} placeholder='Id - Automaticly' />
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <label>Name</label>
                                <input type="text" ref={refName} defaultValue={selectedDestination.name} placeholder='Write the name' />
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <label>Description</label>
                                <input type="text" ref={refDescription} defaultValue={selectedDestination.description} placeholder='Enter a description' />
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <label>Country Code</label>
                                <input type="text" ref={refCountryCode} defaultValue={selectedDestination.countryCode} placeholder='Enter a CountryCode' />
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <label>Country</label>
                                <input type="text" ref={refCountry} defaultValue={selectedDestination.destinationType.country} placeholder='Enter a Country' />
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <label>City</label>
                                <input type="text" ref={refCity} defaultValue={selectedDestination.destinationType.city} placeholder='Enter a City' />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSaveButton} data-bs-dismiss="modal" type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


        

 
        </>
    );
}
export default Dashboard;