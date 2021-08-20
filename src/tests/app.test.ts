import {myContainer} from '../inversify.config';
import {TYPES} from '../types/types';
import {Client, Manager, Todo} from '../interfaces/interfaces';
import { TodoClient } from '../entities';

const apiManager = myContainer.get<Manager>(TYPES.Manager);


test("Should return the results from querying todo with ID 1", () => {
    let finalValue = [{"completed":false, "id": 1, "title": "delectus aut autem", "userId": 1}]; //new  = '[{"completed": false, "id": 1, "title": delectus aut autem, "userId": 1}]';

    return apiManager.fetchData(1).then((data : string)=> {
      expect(data).toStrictEqual(finalValue);
    });
  });

describe('Client', () =>{
    
    let mockClient : TodoClient;
    let success: any = [];
   beforeAll(async() => {
       mockClient = new TodoClient();
        myContainer.rebind(TYPES.TodoClient).toConstantValue(new TodoClient());

        success = await mockClient.getInfo(1);
   });

   it('get the correct todo information', () =>{
       expect(success).toStrictEqual([{"completed":false, "id": 1, "title": "delectus aut autem", "userId": 1}]);
   })

   it("mocking the client", () =>{
    jest.mock('../entities/ToDoClient')

    test('testing',()=>{
        const toClient = new TodoClient();
        toClient.getInfo(1);
        expect(toClient.getInfo(1)).toHaveBeenCalled();
    })
   });
})