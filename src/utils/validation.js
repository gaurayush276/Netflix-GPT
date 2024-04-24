export const checkValidData = (email,password  )=>{

    // rejes expression 
    const emailCheck =  /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email) ;
    const passwordCheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ; 
    // const nameCheck =/([A-Z][a-z]*)([\\s\\\'-][A-Z][a-z]*)*/.test(name) ; 

    
    // if ( !nameCheck)
    // return "Invalid Credential" ; 

    if ( !emailCheck)
    return "Email is not valid" ; 

    if ( !passwordCheck)
    return "Password is not valid, please use uppercase ,special char and nums" ; 

    return null ; 
}