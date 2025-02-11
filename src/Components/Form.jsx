export default function Form ({formData, setFormData}) {

    // Handle state changes in the form
    function handleChange (e) {

        // e.preventDefault();
        setFormData({...formData},  )
    }
        
    // Handle submit fanctionality
    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <>
        <h3 className="formHeader">Form</h3>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Serach" name="searchTerm" onChange={{handleChange}}/>
                <input type="submit" />
            </form>
        </div>
        
        </>
    )
}