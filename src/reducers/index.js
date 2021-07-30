import { combineReducers } from 'redux';
import Login from "./Login";
import SignUp from './SignUp';
import DrawerMenuReducer from "./DrawerMenuReducer";
import CheckOfflineReducer from './CheckOfflineReducer';
import SideScreenReducer from './SideScreenReducer';
import ForgetPassReducer from './ForgetPassReducer';
import ResetPassReducer from './ResetPassReducer'
import CreateSponser  from './CreateSponser';
import MeetPeopleReducer from './MeetPeopleReducer';
import userprofileReducer from './userprofileReducer';
import UploadImageReducer from './UploadImageReducer';
import UpdateProReducer from './UpdateProReducer';
import AllEventsReducer from './AllEventsReducer';


export default combineReducers({
    login: Login,
    SignUp: SignUp,
    checkOfflineFeature:CheckOfflineReducer,
    drawermenu:DrawerMenuReducer,
    forgetpaswword:ForgetPassReducer,
    resetpass: ResetPassReducer,
    sidescreen:SideScreenReducer,
    updateprofile:UpdateProReducer,
    createsponser: CreateSponser,
    meetpeople:MeetPeopleReducer,
    userprofile:userprofileReducer,
    UploadImage: UploadImageReducer,
    allevents:AllEventsReducer,

})