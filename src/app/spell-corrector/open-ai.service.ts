import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Endpoint para ChatGPT
  private apiKey = environment.openAiApiKey;

  constructor(private http: HttpClient) {}

  correctText(originalText: string): Observable<any> {
    // Mensagem "system" dando contexto: "Você é um assistente que corrige texto..."
    // Mensagem "user" com o texto original
    const messages = [
      {
        role: 'system',
        content: 'Você é um assistente que corrige ortografia e gramática em Português do Brasil.'
      },
      {
        role: 'user',
        content: `Corrija o texto a seguir: "${originalText}"`
      }
    ];

    const body = {
      model: 'gpt-4o-mini', // ou 'gpt-4', se você tiver acesso
      messages,
      temperature: 0.0 // zero para focar em correções mais "precisas" e menos criativas
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
