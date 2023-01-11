import axios from 'axios'

const API_URL = 'http://localhost:5000/client/'

// Create new compte
const createCompte = async (compteData, token) =>
{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    console.log("create", compteData);

    const response = await axios.post(API_URL + "newCompte", compteData, config)

    return response.data
}

// Get user comptes
// const getComptes = async (token) =>
// {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }

//     const response = await axios.get(API_URL, config)

//     return response.data
// }

// Delete user compte
// const deleteCompte = async (compteId, token) =>
// {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }

//     const response = await axios.delete(API_URL + compteId, config)

//     return response.data
// }
// Update user compte
// const updateCompte= async (compteId, text, token) =>
// {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }
//     const response = await axios.put(API_URL + compteId, {text}, config)
//     return response.data
// }

const compteService = {
    createCompte,
    // getComptes,
    // deleteCompte,
    // updateCompte

}

export default compteService;
