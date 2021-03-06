'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';

const LoginStore = Reflux.createStore({

    listenables: Actions,

    clearError() {
        this.trigger('');
    },

    loginError(errorCode) {
        let message;

        switch (errorCode) {
            case 'LOGIN_REQUIRED':
                message = 'You have to login to do that.'; break;
            case 'INVALID_EMAIL':
                message = 'Invalid email address.'; break;
            case 'INVALID_PASSWORD':
                message = 'Invalid password.'; break;
            case 'INVALID_USER':
                message = 'User doesn\'t exist.'; break;
            case 'NO_USERNAME':
                message = 'You have to enter a username.'; break;
            case 'EMAIL_TAKEN':
                message = 'That email is taken.'; break;
            case 'USERNAME_TAKEN':
                message = 'That username is taken.'; break;
            default:
                message = 'Something went wrong.';
        }

        this.trigger(message);
    }

});

export default LoginStore;
