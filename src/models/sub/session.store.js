import { types } from 'mobx-state-tree';
import User from './user.store';

const Session = types
    .model('Session', {
        isAuthenticated: types.optional(types.boolean, false),
        loginStatus: types.optional(types.string,"idle"),
        User: types.optional(User, {})
    })
    .actions(self => ({
        signin(user) {
            if(user.username!=="" && user.password!=="") {
                self.isAuthenticated = true;
            }else{
                self.isAuthenticated = false
            }

            return setTimeout(self.isAuthenticated, 1000);
        },
        signout(user) {
            self.isAuthenticated = false
            return setTimeout(self.isAuthenticated, 1000);
        },
        invalidLogIn() {
            console.log("Entered here!");
            self.loginStatus = "invalid";
            setTimeout(() => { self.setLoginStatusToIdle(); }, 3000)
        },
        setLoginStatusToIdle() {
            self.loginStatus = "idle"
        }
    }));

    export default Session;