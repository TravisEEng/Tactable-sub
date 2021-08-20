import {myContainer} from '../inversify.config';
import {TYPES} from '../types';
import {Client, Manager, Todo} from '../interfaces';
import { TodoClient } from '../todoClient';
import { ApiManager } from '../apiManager';
import { mocked } from 'ts-jest/utils';


const apiManager = myContainer.get<Manager>(TYPES.Manager);


test("Should return the results from querying todo with ID 1", () => {
    let finalValue = [{"completed":false, "id": 1, "title": "delectus aut autem", "userId": 1}]; //new  = '[{"completed": false, "id": 1, "title": delectus aut autem, "userId": 1}]';

    return apiManager.fetchData(1).then((data : string)=> {
      expect(data).toStrictEqual(finalValue);
    });
  });

  test("Should return blank or empty as theres no such todo", () => {

    return apiManager.fetchData(-1).then((data : string)=> {
      expect(data).toStrictEqual([]);
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


    test('Testing Api Manager class',()=>{
        jest.mock('../apiManager');
        
        expect(apiManager).toStrictEqual(new ApiManager(new TodoClient()));

    });

    jest.mock('../apiManager', () =>{
      return{
        ApiManager: jest.fn().mockImplementation(() => {
          return{
            fetchData: () => {},
          };
        })
      };
    });
    

})