import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  /* CREAMOS UNA VARIABLE CON UN VALOR PARA LUEGO AÑADIRLA DESDE EL HTML */
  variablefooter = 'Hey q tal';
  constructor() { }

  ngOnInit() {
  }

}
