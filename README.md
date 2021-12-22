# Scheduler
Olá, tudo bem? Este programa se trata de um teste de desenvolvimento, foi desenvolvido de acordo com os requisitos enviados pela empresa, que podem ser encontrados [aqui](https://docs.google.com/document/d/16q9qQKL6U8TnfomRN7Kk2isJcpPoGGjeSlELlPmtU7s/edit?usp=sharing).

# Como executar o programa:
## Requisitos
- Node
- Npm

## Passo a passo
- Instale as dependências do projeto, utilizando `yarn` ou `npm install`;
- Para executar o programa, basta executar `yarn dev` ou `npm run dev`;
- Para executar os testes, execute `yarn test` ou `npm run test`;
- Caso deseje utilizar dados diferentes, basta alterar os arquivos `jobs.json` e `limit-dates.json`.

# Bugs conhecidos
- (Corrigido) Existe um bug quando se passa datas do range em meses diferentes, pretendo subir uma correção em breve.

# Melhorias futuras
- Interface gráfica;
- Disponibilizar opções para os trabalhos não executados, como reagendamento;
- Definir uma jornada de trabalho (atualmente eu considero qualquer hora do dia como disponível para serviços).