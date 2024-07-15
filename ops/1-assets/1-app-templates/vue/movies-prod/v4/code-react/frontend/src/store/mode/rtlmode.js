const initstate={
    rtlMode: 'ltr'
}

// Action/Dispatch
export const rtlModeAction = (value) => {
    sessionStorage.setItem('rtl-mode', value)

    if (value==='rtl') {
        document.body.parentElement.setAttribute('dir','rtl')
        document.querySelector('[data-value="rtl"]').classList.add('active')
        document.querySelector('[data-value="ltr"]').classList.remove('active')
        
    } 
    
    else  {
            document.body.parentElement.setAttribute('dir','ltr')
            document.querySelector('[data-value="ltr"]').classList.add('active')
            document.querySelector('[data-value="rtl"]').classList.remove('active')
    }
    
    return {type: 'RTLMODE', value}
}

// Mutations/Reducer
const Mode = (state = initstate,action) =>{
    switch (action.type) {
        case 'RTLMODE':
            return Object.assign({}, state, {
                rtlMode: action.value
            })
        default:
            return state
    }
}

// Selectores
export const getRtlMode = (state) => state.mode.rtlMode;

export default Mode