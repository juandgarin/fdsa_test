import axios from 'axios'

const Destination = ({setIsEditing,references, data, setData, dest, setSelectedDestination, selectedDestination,getDestinationById }) => {
    
    const handleEdit = () => {
        setIsEditing(true);
        references.refId.current.value = dest.id;
        references.refName.current.value = dest.name;
        references.refDescription.current.value = dest.description;
        references.refCountryCode.current.value = dest.countryCode;
        references.refCountry.current.value = dest.destinationType.country;
        references.refCity.current.value = dest.destinationType.city;
        //references.refLastModify.current.value = dest.lastModify;
    }

    const handleDelete = (selectedDestination) => {
        console.log(selectedDestination)
        axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteDestination`, {
            data: {
                id: dest.id
            }
        });
        setData(data.filter(d => d.id !== dest.id));

    }
    return (
        <>
            <div className="destination">
                {dest.name}
            </div>

            <div className="buttons d-flex">
                <div className="p-2">
                    <button onClick={handleEdit} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                </div>
                <div className="p-2">
                    <button onClick={() => handleDelete()} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}
export default Destination;