export interface Manager{
    fetchData(id: number): any 
}

export interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

export interface Client{
    getInfo(id: number) : Promise<Todo[]>
}