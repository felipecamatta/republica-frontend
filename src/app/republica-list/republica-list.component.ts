import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Republica } from '../models/republica';
import { RepublicaService } from '../services/republica.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-republica-list',
  templateUrl: './republica-list.component.html',
  styleUrls: ['./republica-list.component.css']
})
export class RepublicaListComponent implements OnInit {

  republicas: Republica[];
  displayedColumns: string[] = ['id', 'nome', 'endereco', 'numeroVagas', 'tipoLocacao', 'genero',
    'numeroComodos', 'diferencial', 'numeroVagasDisponiveis', 'descricao', 'representante', 'acoes'];

  constructor(private route: ActivatedRoute, private router: Router,
              private republicaService: RepublicaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.republicaService.findAll().subscribe(data => {
      this.republicas = data;
    });
  }

  onUpdate(republica: Republica) {
    this.republicaService.setRepublica(republica);
    this.router.navigate(['/addrepublica']);
  }

  onDelete(id: number) {
    this.republicaService.delete(id).subscribe(result => {
      alert('República deletada!');
      this.ngOnInit();
    });
  }

  onCreate() {
    let republica = new Republica();
    this.republicaService.setRepublica(republica);
    this.router.navigate(['/addrepublica']);
  }

  onDetalhes(republica: Republica): void {
    const dialogRef = this.dialog.open(RepublicaListDialogComponent, {
      width: '600px',
      data: republica
    });
  }

  onAdd(id: number) {
    alert('localhost:8080/republicas/' + id + '/adicionarmorador');
  }

}

@Component({
  selector: 'app-republica-list-dialog',
  templateUrl: 'republica-list-dialog.component.html',
})
export class RepublicaListDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RepublicaListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Republica) { }

}
