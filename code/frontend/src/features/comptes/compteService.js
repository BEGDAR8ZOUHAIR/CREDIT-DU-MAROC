import axios from 'axios'

const API_URLCLIENT = 'http://localhost:5000/client/'
const API_URLADMIN = 'http://localhost:5000/admin/'

// Create new compte
const createCompte = async (compteData, token) =>
{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    console.log("create", compteData);

    const response = await axios.post(API_URLCLIENT + "newCompte", compteData, config)

    return response.data
}

// Get user comptes
const getComptes = async (token) =>
{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URLADMIN + "getComptes" , config)

    return response.data
}

// Delete user compte
const deleteCompte = async (compteId, token) =>
{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URLADMIN + compteId, config)

    return response.data
}
// Update user compte
const updateCompte= async (compteId, text, token) =>
{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.put(API_URLADMIN + compteId, {text}, config)
    return response.data
}

const compteService = {
    createCompte,
    getComptes,
    deleteCompte,
    updateCompte

}

export default compteService;
