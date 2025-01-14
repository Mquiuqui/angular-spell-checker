import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellCheckService {
  // URL pública do LanguageTool (sem chave de API), para uso demonstrativo
  private apiUrl = 'https://api.languagetool.org/v2/check';

  constructor(private http: HttpClient) {}

  correctText(text: string, language: string = 'pt-BR'): Observable<any> {
    const body = {
      text: text,
      language: language
    };
    
    // Faz POST na API do LanguageTool
    return this.http.post<any>(this.apiUrl, body);
  }
}
