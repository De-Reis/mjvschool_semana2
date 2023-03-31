import { Component } from '@angular/core';

interface Colaboradores {
  id: number;
  nome: string;
  salario: number;
  cargo: string;
  contratado: number;
  linguagens: any [];
  ferias: boolean;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  exibeSalario = true;

  exibeSalarioSimNao() {
    this.exibeSalario = !this.exibeSalario;
  }

  colaboradores: Array<Colaboradores> = [
    {
      id: 1,
      nome: "Nathan Carlos",
      salario: 4500,
      cargo: "Dev P1",
      contratado: 0,
      linguagens: ["javascript", "react"],
      ferias: true,

    },

    {
      id: 2,
      nome: "Falipe",
      salario: 2500,
      cargo: "Dev Jr 1",
      contratado: 3,
      linguagens: ["Phyton", "PHP", "git"],
      ferias: false,
    },
    {
      id: 3,
      nome: "Mariana",
      salario: 2500,
      cargo: "Dev Jr 2",
      contratado: 2,
      linguagens: ["angular", "PHP"],
      ferias: true,
    },
    {
      id: 4,
      nome: "Natalia",
      salario: 4500,
      cargo: "Dev P2",
      contratado: 5,
      linguagens: ["javascript", "react"],
      ferias: true,
    },

    {
      id: 5,
      nome: "Pedro",
      salario: 2500,
      cargo: "Dev Jr",
      contratado: 2,
      linguagens: ["Phyton", "PHP", "git"],
      ferias: true,
    },
    {
      id: 6,
      nome: "Luis",
      salario: 2500,
      cargo: "Dev Jr",
      contratado: 2,
      linguagens: ["javascript", "react"],
      ferias: true,
    }
  ]

}

