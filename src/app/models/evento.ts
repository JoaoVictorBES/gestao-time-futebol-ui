import { Jogador } from "./jogador";
import { Jogo } from "./jogo";

export class evento {
  id!: number;
  tipoEvento!: string;
  jogo!: Jogo;
  jogador!: Jogador;
}
