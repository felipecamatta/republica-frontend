import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Republica } from '../models/republica';
import { RepublicadisponivelService } from '../services/republicadisponivel.service';
import { Morador } from '../models/morador';
import { SolicitacaoService } from '../services/solicitacao.service';

@Component({
  selector: 'app-republica-disponivel-list',
  templateUrl: './republica-disponivel-list.component.html',
  styleUrls: ['./republica-disponivel-list.component.css']
})
export class RepublicadisponivelListComponent implements OnInit {

  morador = new Morador();
  republicas: Republica[];
  displayedColumns: string[] = ['id', 'nome', 'endereco', 'numeroVagas', 'tipoLocacao', 'genero', /*'integrantes',*/ 'numeroComodos', 'utensilios', 'diferencial', 'numeroVagasDisponiveis', 'descricao', 'representante', 'link', 'solicitar'/*, 'curso'*/];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private republicaDisponivelService: RepublicadisponivelService,
    private solicitacaoService: SolicitacaoService) { }

  ngOnInit() {
    this.republicaDisponivelService.findAll().subscribe(data => {
      this.republicas = data;
    })
  }

  solicitar(republica: Republica) {
    this.morador = this.solicitacaoService.getMorador();
    if(!this.morador.representante){
      this.solicitacaoService.solicitar(republica, this.morador)
      .subscribe(result => {
        if (result) {
          alert('Solicitação enviada com sucesso!');
        } else {
          alert('Ocorreu um erro ao solicitar vaga!')
        }
      });}else{
        alert('Para solicitar vaga em uma nova republica, '
        + 'promova um novo morador a representante!')
      }
  }
}
