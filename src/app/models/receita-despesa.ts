import { Republica } from './republica';
import { MoradorReceitaDespesa } from './morador-receita-despesa';

export class ReceitaDespesa {
    id: number;
    republica: any;
    tipo: String;
    descricao: String;
    valor: number;
    periodo: String;
    dataLancamento: Date;
    dataVencimentoRecebimento: Date;
    efetivado: boolean;
    moradorReceitaDespesa: MoradorReceitaDespesa[];
}
