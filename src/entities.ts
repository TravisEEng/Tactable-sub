import {injectable, inject} from 'inversify';
import "reflect-metadata";
import {Manager, Todo, Client} from './interfaces/interfaces';
import {TYPES} from './types/types';

const fetch = require('node-fetch');


@injectable()
class ApiManager implements Manager{

    private _todoClient: TodoClient;

    public constructor(@inject(TYPES.TodoClient) todoClient: TodoClient){
        this._todoClient = todoClient
    }

    async fetchData(id: number){
       let promiseWithData = () => {
        this._todoClient.getInfo(id).then((result) =>{
            return result;
        });
       };
       

        return this._todoClient.getInfo(id);
    }
}

@injectable()
class TodoClient implements Client{
    async getInfo(id: number): Promise<Todo[]>{
        try{
            return fetch(`https://jsonplaceholder.typicode.com/todos/?id=${id}`)
            .then((res:any) => res.json())
            .then((res:any) => { return res.map((todo: any) => formatTodo(todo))});
        }catch(error){
            throw new(error);
        }
    }
}


function formatTodo(todo: any): Todo{
  return {userId: todo.userId, id: todo.id, title: todo.title, completed: todo.completed}
}

export {TodoClient, ApiManager}



