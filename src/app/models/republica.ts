import { Morador } from './morador';

export class Republica {
    id: number;
    nome: String;
    endereco: String;
    numeroVagas: number;
    tipoLocacao: String;
    genero: String;
    moradores: Morador[];
    numeroComodos: number;
    utensilios: String;
    diferencial: String;
    numeroVagasDisponiveis: number;
    descricao: String;
    representante: Morador;
    link: String;
}
