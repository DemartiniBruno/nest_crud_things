import { Injectable } from '@nestjs/common';
interface Teste {
  nome: string
}

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!2';
  }
  getTeste(): any {

    const obj_teste: Partial<Teste> = {}
    obj_teste.nome='bruno'
    return obj_teste
  }
}
