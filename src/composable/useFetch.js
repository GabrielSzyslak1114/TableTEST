import axios from 'axios'

const getData = async(pageNumber = 1)=>{
    const urlApi = `http://apitest.cargofive.com/api/ports?page=${pageNumber}`;
    try {
        const res = await axios(urlApi); 
        return res.data   
    } 
    catch (error) {
        console.error("errorApi", error);
    }


};

export {getData};