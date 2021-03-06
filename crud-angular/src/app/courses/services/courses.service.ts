import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //take(1), assim que o servidor der uma resposta, utilizo ela e finalizo a inscrição nessa origem de dados
      first(), //obter a primeira resposta que o servidor enviar (ex.:lista de json)
      delay(5000), //para testar o spinner
      tap(courses => console.log(courses))
    );
  }
}
