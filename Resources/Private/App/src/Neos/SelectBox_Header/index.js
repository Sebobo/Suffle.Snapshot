/* eslint-disable camelcase, react/jsx-pascal-case */
import {themr} from '@friendsofreactjs/react-css-themr';
import identifiers from '../identifiers';
import style from './style.css';

import SelectBox_Header from './selectBox_Header';

import injectProps from './../_lib/injectProps';
import Icon from './../Icon';
import IconButton from './../IconButton';

const ThemedSelectBox_Header = themr(identifiers.selectBox_Header, style)(SelectBox_Header);


export default injectProps({
    Icon,
    IconButton
})(ThemedSelectBox_Header);
