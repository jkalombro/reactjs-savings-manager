import { types } from 'mobx-state-tree';

const User = types
    .model('User', {
        username: types.optional(types.string, ""),
        password: types.optional(types.string, "")
    })

export default User;