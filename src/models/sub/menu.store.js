import { types } from 'mobx-state-tree';

const NavbarMenu = types
    .model('NavbarMenu', {
        currenturl: types.optional(types.string, ""),
        dashboard: types.optional(types.string, ""),
        savings: types.optional(types.string, ""),
        settings: types.optional(types.string, "")
    })
    .actions(self => ({
        updateMenuState() {
            //reset everything first
            self.dashboard = ""; self.savings = ""; self.settings = "";
            self.currenturl = window.location.href.split("/")[3];
            
            switch(self.currenturl) {
                case "dashboard":
                    self.dashboard = "selected";
                    break;
                case "savings":
                    self.savings = "selected";
                    break;
                case "settings":
                    self.settings = "selected";
                    break;
                default:
                    break;
            }
        }
    }));

export default NavbarMenu;