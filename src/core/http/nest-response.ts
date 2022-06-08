
export class NestResponse{
    status: number;
    headers: Object;
    body: Object;


    constructor(resposta: any){
        /* this.status = resposta.status;
        this.headers = resposta.headers;
        this.body = resposta.body; */

        Object.assign(this, resposta);
    }
}