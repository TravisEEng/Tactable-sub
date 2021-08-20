import {Container} from 'inversify';
import {TYPES} from './types/types';
import {Manager, Client, Todo} from './interfaces/interfaces';
import {ApiManager} from './apiManager';
import {TodoClient} from './todoClient';

const myContainer = new Container();
myContainer.bind<Manager>(TYPES.Manager).to(ApiManager);
myContainer.bind<Client>(TYPES.TodoClient).to(TodoClient);


export {myContainer};