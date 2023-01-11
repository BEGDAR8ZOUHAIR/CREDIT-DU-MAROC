import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import compteService from './compteService'

const initialState = {
    comptes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new compte
export const createCompte = createAsyncThunk(
    'comptes/create',
    async (compteData, thunkAPI) =>
    {
        try
        {
            const token = thunkAPI.getState().auth.user.token
            return await compteService.createCompte(compteData, token)
        } catch (error)
        {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user comptes
// export const getComptes = createAsyncThunk(
//     'Comptes/getAll',
//     async (_, thunkAPI) =>
//     {
//         try
//         {
//             const token = thunkAPI.getState().auth.user.token
//             return await compteService.getComptes(token)
//         } catch (error)
//         {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString()
//             return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

// Delete user compte
// export const deleteCompte = createAsyncThunk(
//     'comptes/delete',
//     async (id, thunkAPI) =>
//     {
//         try
//         {
//             const token = thunkAPI.getState().auth.user.token
//             return await compteService.deleteCompte(id, token)
//         } catch (error)
//         {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString()
//             return thunkAPI.rejectWithValue(message)
//         }
//     }
// )
// Update user compte
// export const updateCompte = createAsyncThunk(
//     'comptes/update',
//     async (compteData, thunkAPI) =>
//     {
//         try
//         {
//             const token = thunkAPI.getState().auth.user.token
//             return await compteService.updateCompte(compteData.id, compteData.text, token)
//         }
//         catch (error)
//         {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString()
//             return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

export const compteSlice = createSlice({
    name: 'compte',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) =>
    {
        builder
            .addCase(createCompte.pending, (state) =>
            {
                state.isLoading = true
            })
            .addCase(createCompte.fulfilled, (state, action) =>
            {
                state.isLoading = false
                state.isSuccess = true
                state.comptes.push(action.payload)
            })
            .addCase(createCompte.rejected, (state, action) =>
            {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        //     .addCase(getComptes.pending, (state) =>
        //     {
        //         state.isLoading = true
        //     })
        //     .addCase(getComptes.fulfilled, (state, action) =>
        //     {
        //         state.isLoading = false
        //         state.isSuccess = true
        //         state.comptes = action.payload
        //     })
        //     .addCase(getComptes.rejected, (state, action) =>
        //     {
        //         state.isLoading = false
        //         state.isError = true
        //         state.message = action.payload
        //     })
        //     .addCase(deleteCompte.pending, (state) =>
        //     {
        //         state.isLoading = true
        //     })
        //     .addCase(deleteCompte.fulfilled, (state, action) =>
        //     {
        //         state.isLoading = false
        //         state.isSuccess = true
        //         state.comptes = state.comptes.filter(
        //             (compte) => compte._id !== action.payload.id
        //         )
        //     })
        //     .addCase(deleteCompte.rejected, (state, action) =>
        //     {
        //         state.isLoading = false
        //         state.isError = true
        //         state.message = action.payload
        //     })
        //     .addCase(updateCompte.pending, (state) =>
        //     {
        //         state.isLoading = true
        //     }
        // )
        //     .addCase(updateCompte.fulfilled, (state, action) =>
        //     {
        //         state.isLoading = false
        //         state.isSuccess = true
        //         state.comptes = state.comptes.map((compte) =>
        //             compte._id === action.payload.id ? action.payload : compte
        //         )
        //     }
        // )
        //     .addCase(updateCompte.rejected, (state, action) =>
        //     {   
        //         state.isLoading = false
        //         state.isError = true
        //         state.message = action.payload
        //     }
        // )

        
            
                
    },
})

export const { reset } = compteSlice.actions
export default compteSlice.reducer
