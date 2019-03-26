import { types } from 'mobx-state-tree';
import Session from './sub/session.store';
import NavbarMenu from './sub/menu.store';

const Store = types
    .model('Store', {
        Session: types.optional(Session, {}),
        NavbarMenu: types.optional(NavbarMenu, {})
    });

export default Store;