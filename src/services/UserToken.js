const UserToken = (type, body) => {
    if (type == 'set' && window.localStorage.getItem('odyssey-user-token') == null) {
        window.localStorage.clear();
        window.localStorage.setItem('odyssey-user-token', body);
    } else if (type == 'get') {
        return window.localStorage.getItem('odyssey-user-token')
    } else if (type == 'remove') {
        window.localStorage.clear();
    }
}

export default UserToken;