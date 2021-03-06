import { combineReducers } from "redux";

import packagesReducer from './packagesReducer';
import prototypeReducer from './prototypeReducer';
import loadingStateReducer from './loadingStateReducer';
import availablePrototypesReducer from './availablePrototypesReducer';
import endpointReducer from './endpointReducer';
import previewMarkupReducer from './previewMarkupReducer';

export default combineReducers({
    sitePackages: packagesReducer,
    currentPrototype: prototypeReducer,
    loading: loadingStateReducer,
    availablePrototypes: availablePrototypesReducer,
    endpoints: endpointReducer,
    previewMarkup: previewMarkupReducer
});