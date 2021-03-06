import 'rxjs/add/operator/map' 
import { Observable } from 'rxjs';
import { FotoComponent } from './../foto/foto.component';
import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class FotoService {
    private cabecalho: Headers
    private url: string

    constructor( private conexaoApi: Http ){

        this.url = 'http://localhost:3000/v1/fotos/'              

        this.cabecalho = new Headers()
        this.cabecalho.append('Content-Type', 'application/json')

   
    }

    listar(): Observable<Response>{

        return this.conexaoApi
                   .get(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Mensagens>{
        return this.conexaoApi
                    .post(
                        this.url
                        , JSON.stringify(foto)
                        , {headers: this.cabecalho}
                    )
                    .map( 
                        () => new Mensagens(`A foto ${foto.titulo} foi cadastrada com sucesso `)
                    )
    
    }

    deletar(foto: FotoComponent): Observable<Mensagens> {
        
        console.log(foto)

        return this.conexaoApi.delete(this.url+foto._id)
                                .map( 
                                    () => new Mensagens(`A foto ${foto.titulo} foi deletada com sucesso `)
                                )

    }

    atualizar(foto: FotoComponent): Observable<Mensagens>{
        return this.conexaoApi.put(
                    this.url+foto._id
                    , JSON.stringify(foto)
                    , {headers: this.cabecalho}
                )
                .map( 
                    () => new Mensagens(`A foto ${foto.titulo} foi alterada com sucesso `)
                )

    }

    obterFoto(id): Observable<Response>{
        return this.conexaoApi.get(this.url+id)
    }

}

class Mensagens {

    constructor(private _texto){}

    get texto(){
        return this._texto
    }

    /*
    set texto(novotexto){
        this._texto = novotexto
    }*/
}