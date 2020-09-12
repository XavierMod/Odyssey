
/*
    File Description: Validates form services.
    Notes: KEY helper / service. 
*/

// Takes an object and checks if all fields have a minimum length of 5 characters
export const checkEmptyFields = (obj) => {
    var keysArr = [];
    Object.keys(obj).forEach((key, ind) => {
        if (obj[key].length < 5) {
            keysArr.push(false)
        } else {
            keysArr.push(true)
        } 
    })
    return keysArr.every(x => x);
}

// Validates Email inputs
export const validateEmail = ( string ) => {
    var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (string.match(email)) {
        return true
    } else {
        return false
    }
}