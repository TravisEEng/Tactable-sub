import {injectable} from 'inversify';
import "reflect-metadata";
import {Todo, Client} from './interfaces';

const fetch = require('node-fetch');

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

export {TodoClient}
