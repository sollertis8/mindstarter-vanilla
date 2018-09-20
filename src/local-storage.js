export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};

export const loadUserId = () => {
    return localStorage.getItem('user_id');
};

export const saveUserId = user_id => {
    try {
        localStorage.setItem('user_id', user_id);
    } catch (e) {}
};

export const clearUserId = () => {
    try {
        localStorage.removeItem('user_id');
    } catch (e) {}
};