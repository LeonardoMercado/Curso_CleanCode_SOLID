export class HttpClient{
    async get(url: string){
        const response = await fetch (url);
        const data = await response.json();
        const status = await response.status;
        return {data , status};
    }
}