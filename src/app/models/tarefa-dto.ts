import { Republica } from './republica';
import { Morador } from './morador';

export class TarefaDto {
    id: number;
    republica: Republica;
    dataAgendamento: Date;
    moradores: Morador[];
    descricao: string;
    dataTermino: Date; 
}
