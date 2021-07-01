import axios from 'axios'


export const getBrand = async (authtoken) => {
    try {
        return await axios.get(`${process.env.REACT_APP_API}/brand`,{
            headers:{
                authtoken
            }
        })
    } catch (error) {
        console.log("error occured while loading products")
    }
}


export const addBrand = async (brand,authtoken) => await axios.post(`${process.env.REACT_APP_API}/brand`,brand,{
    headers:{
        authtoken
    }
})


// export const updateBrand = async (brand,id,authtoken