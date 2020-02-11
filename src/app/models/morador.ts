import { Republica } from './republica';
import { MoradorReceitaDespesa } from './morador-receita-despesa';

export class Morador {
    id: number;
    nome: String;
    apelido: String;
    telefone: String;
    link: String;
    telefoneResponsavel1: String;
    telefoneResponsavel2: String;
    sexo: String;
    //instituicao: String;
    //curso: String;
    representante: boolean;
    republica: Republica;
    moradorReceitaDespesas: MoradorReceitaDespesa[];
}
