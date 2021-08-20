import {myContainer} from './inversify.config';
import {TYPES} from './types';
import {Manager} from './interfaces';

const apiManager = myContainer.get<Manager>(TYPES.Manager);


apiManager.fetchData(2);