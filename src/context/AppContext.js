import { createContext, useReducer } from "react";


const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        default:
            return state;
    }
};

const initialState = {
    budget: 2200,
    expenses: [
        { id: 12345, name: 'Shopping', cost: 50 },
        { id: 12346, name: 'Holiday', cost: 300 },
        { id: 12347, name: 'Transportation', cost: 30 },
        { id: 12348, name: 'Fuel', cost: 40 },
        { id: 12349, name: 'Childcare', cost: 40 }
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    );
};