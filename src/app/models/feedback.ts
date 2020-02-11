import { Morador } from './morador';
import { Republica } from './republica';

export class Feedback {

    id : number;	
    morador : Morador;
    republica : Republica;
    status: String;
    tipo: String;
    descricao: String;
    dataFeedback: Date;
    dataSolucao: Date;
    anonimo: boolean = false;
    idade: number;
 
}
