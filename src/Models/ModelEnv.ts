export default class ModelEnv{
    
    API_URL:string;
    API_KEY_ACESS:string;
    API_PARAMS:string;

    constructor(apiUrl:string, keyAcess:string, params:string){
        this.API_URL = apiUrl;
        this.API_KEY_ACESS = keyAcess;
        this.API_PARAMS = params;
    }
}