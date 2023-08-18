import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public conteudoTs: string = $localize`:@@conteudo-ts:Este é meu conteudo de TS`
}
