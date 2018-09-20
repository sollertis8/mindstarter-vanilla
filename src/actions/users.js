import {SubmissionError} from 'redux-form';
import React from 'react';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {loadUserId} from '../local-storage';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {put} from 'axios';
import {post} from 'axios';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
            body: JSON.stringify(user)
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(new SubmissionError({[location]: message}));
            }
        });
};

// free, fullstack(react-paid), data science(python-paid),
export const addAccountType = user => dispatch => {
    const user_id = loadUserId(user_id)
    return fetch(`${API_BASE_URL}/users/user/${user_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify([
            {
                id: user_id
            },
                user
            ])
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(new SubmissionError({[location]: message}));
            }
        });
}

export const uploadPhoto = user => dispatch => {
    const user_id = loadUserId(user_id);
    const id = {
        id: user_id
    };
    let data = new FormData();
    data.append('id', (id.id));
    // data.append('name', user.name);
    data.append('profile_image', (user.profile_image));
    const config = {
        // headers: {     'Content-type': 'multipart/form-data' }
    }
    const url = `${API_BASE_URL}/users/profile/${user_id}`;
    return post(url, data)
        .then(res => normalizeResponseErrors(res))
        .then(console.log(data))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return
                Promise.reject(new SubmissionError({[location]: message}));
            }
        });
}

export const getProfile = user => dispatch => {
    const user_id = loadUserId(user_id);
    const url = `${API_BASE_URL}/users/profile/${user_id}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
            body: JSON.stringify({id: user_id})
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return
                Promise.reject(new SubmissionError({[location]: message}));
            }
        });
}

export const addUserInfo = user => dispatch => {
    const user_id = loadUserId(user_id)
    return fetch(`${API_BASE_URL}/users/user/${user_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify([
            {
                id: user_id
            },
                user
            ])
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(new SubmissionError({[location]: message}));
            }
        });
}

export const addUserStats = user => dispatch => {
    const user_id = loadUserId(user_id)
    return fetch(`${API_BASE_URL}/users/stats/${user_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify([
            {
                id: user_id
            },
                user
            ])
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(new SubmissionError({[location]: message}));
            }
        });
}