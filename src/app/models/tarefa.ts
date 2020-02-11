import { Republica } from './republica';
import { MoradorTarefa } from './morador-tarefa';

export class Tarefa {
    id: number;
    republica: Republica;
    dataAgendamento: Date;
    moradores: MoradorTarefa[];
    descricao: string;
    dataTermino: Date;
    finalizada: boolean;
}
