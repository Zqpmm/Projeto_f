import { Injectable } from '@angular/core';
import { Peca } from './peca';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  private pecas: Peca[]
  salva: string = "";

  constructor() {
    this.pecas = [
      new Peca("4585", "Item 1", 12, 50, 200, 39.00, "loja 1, loja 2, loja 3, loja 4"),
      new Peca("8454", "Item 2", 20, 10, 80, 10.99, "loja 1, loja 2, loja 3, loja 4"),
      new Peca("1312", "Item 3", 13, 5, 20, 100.50, "loja 1, loja 2, loja 4"),
      new Peca("9658", "Item 4", 50, 10, 50, 50.00, "loja 1, loja 2, loja 3, loja 4"),
      new Peca("1348", "Item 5", 80, 20, 100, 10.00, "loja 1, loja 2, loja 3"),
      new Peca("4574", "Item 6", 16, 5, 45, 5.00, "loja 1, loja 2, loja 3, loja 4"),
      new Peca("6524", "Item 7", 23, 25, 50, 120.99, "loja 1, loja 3, loja 4"),
      new Peca("0568", "Item 8", 56, 60, 110, 150.00, "loja 1, loja 2, loja 4")
    ]
  }


  public get getPecas(): Peca[] {
    this.ordenar(this.pecas)
    return this.pecas
  }

  public getPeca(cod: string) {
    for (let peca of this.pecas) {
      if (peca.getCod == cod) {
        return peca
      }
    }
    return undefined
  }


  public atualizaQuantidadePeca(cod: string, quantidade: number) {
    for (let peca of this.pecas) {
      if (peca.getCod == cod) {
        peca.setQuantidade = quantidade
      }
    }
  }

  public addPeca(cod: string, descricao: string, quantidadeDisponivel: number, quantidadeMinima: number, capacidadeMaxima: number, preco: number, loja: string) {
    this.pecas.push(new Peca(cod, descricao, quantidadeDisponivel, quantidadeMinima, capacidadeMaxima, preco, loja))

  }

  private ordenar(arr: Peca[]) {
    arr.sort((a, b) => (
      a.getQuantidadeDisponivel / a.getQuantidadeMinima <
      b.getQuantidadeDisponivel / b.getQuantidadeMinima) ? -1 : 1);
  }


}
