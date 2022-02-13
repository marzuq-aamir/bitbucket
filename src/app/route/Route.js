import ActionPage from '../view/actionpage/ActionsPage';
import Country from '../view/country/Country';
import DisplayName from '../view/displayname/DisplayName';
import ProfileInfo from '../view/profileinfo/ProfileInfo';

const route = [
    {
        path : 'actionpage',
        exact : true,
        Component : ActionPage
    },
    {
        path : 'dependancyCountries',
        exact : true,
        Component : Country
    },
    {
        path : 'displayname',
        exact : true,
        Component : DisplayName
    },
    {
        path : 'user/:id',
        exact : true,
        Component : ProfileInfo
    },

];

export {route};