import {myContainer} from './inversify.config';
import {TYPES} from './types/types';
import {Manager} from './interfaces/interfaces';

const apiManager = myContainer.get<Manager>(TYPES.Manager);


apiManager.fetchData(2);