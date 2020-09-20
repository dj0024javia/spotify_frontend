export const initialState = {
    user: null,
    token: "BQBWRlViJs8tcqbtSc07IX4l3vFztrutTo64rF2UHuvginhC85NOnwbki5C9N-yNXTayuHRfpbPCMEz0NSMWUb5xAHRUkqxu8woC_iBky_JX7-ASHFX-IfkMzH3tD2Vkt6jDmF5wuqdhpoNQ-CWH9JAkYgeYYxxi1tTofOiwzE_D_vCDpewJ",
}

export const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state, token: action.token
            }
        default:
            return state
    }
}

export default reducer