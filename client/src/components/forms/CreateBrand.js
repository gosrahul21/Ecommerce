import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import { addBrand } from '../../functions/brand';
const CreateBrand = () => {

    const [name,setName] = useState('');
    const {user} = useSelector((state)=>({...state}))
    console.log(user)
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(await addBrand({name},user.token));
        
    }
    return <div>
        <form onSubmit = {handleSubmit}>
            <label for="input_name">Brand Name:</label>
            <input type='text' onChange = {(event)=>setName(event.target.value)} value={name} placeholder="Brand Name"/>
            <input type="submit" value="submit"/>
        </form>
    </div>
}

export default CreateBrand;