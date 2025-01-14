// spell-corrector.component.ts
import { Component } from '@angular/core';
import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-spell-corrector',
  templateUrl: './spell-corrector.component.html'
})
export class SpellCorrectorComponent {
  textValue = '';
  correctedText = '';
  isLoading = false;
  errorMsg = '';

  constructor(private openAiService: OpenAiService) {}

  corrigirTexto(): void {
    // Limpa estados anteriores
    this.correctedText = '';
    this.errorMsg = '';
    this.isLoading = true;

    this.openAiService.correctText(this.textValue)
      .subscribe({
        next: (response) => {
          /* Estrutura de resposta do ChatGPT:
            {
              "id": "...",
              "object": "chat.completion",
              "choices": [
                {
                  "index": 0,
                  "message": {
                    "role": "assistant",
                    "content": "Aqui está o texto corrigido..."
                  },
                  "finish_reason": "stop"
                }
              ],
              ...
            }
          */
          const choice = response?.choices?.[0];
          if (choice?.message?.content) {
            this.correctedText = choice.message.content.trim();
          } else {
            this.errorMsg = 'Não foi possível obter correção.';
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = 'Ocorreu um erro ao corrigir o texto.';
          this.isLoading = false;
        }
      });
  }
}
