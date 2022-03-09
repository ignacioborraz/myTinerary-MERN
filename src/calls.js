import axios from 'axios';

export const getCitiesFromApi = async () => {
    try {
        let data = await axios.get(`http://localhost:4000/api/cities`)
        return data
    }
    catch (error) {
        throw error
    }
}

export const getTinerariesFromApi = async () => {
    try {
        let data = await axios.get(`http://localhost:4000/api/tineraries`)
        return data
    }
    catch (error) {
        throw error
    }
}