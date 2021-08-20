import {injectable, inject} from 'inversify';
import "reflect-metadata";
import {Manager, Todo, Client} from './interfaces/interfaces';
import {TYPES} from './types/types';
import {TodoClient} from './todoClient';


@injectable()
class ApiManager implements Manager{

    private _todoClient: TodoClient;

    public constructor(@inject(TYPES.TodoClient) todoClient: TodoClient){
        this._todoClient = todoClient
    }

    async fetchData(id: number){     
        return this._todoClient.getInfo(id);
    }
}


export {ApiManager}



