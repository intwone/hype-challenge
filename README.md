<h1 align="center">
    <h1 align="center">
      <img src="https://hypeempreendimentos.com.br/_next/image?url=https%3A%2F%2Fhype-cms-bucket.s3.sa-east-1.amazonaws.com%2Flogoescura_b4232a0d5e.webp&w=256&q=75" alt="hype" width="25%"/>
    </h1>
    <h3 align="center">
    Desafio técnico desenvolvido para o processo seletivo da empresa Hype Empreendimentos.
    </h2>
</h1>

<br>

<div align="center">
  <a href="https://drive.google.com/file/d/1YEbMMSm1h5mN_tBhydQfVhe5t0-KN_kY/view?usp=sharing">Link para demonstrar a api em funcionamento</a>
</div>

## Introdução

<div align="justify">
  A Acme® é uma empresa de tecnologia que desenvolve sistemas para diversos segmentos da indústria mundial e se preza pela utilização de formas inovadoras para a resolução de problemas ligados ao dia-a-dia das pessoas.
  A tarefa será atuar em uma API de um dos produtos da Acme®, chamado HBM+ (Heart-beat monitor - Plus), que servirá para futuramente realizar análises de padrão de sinal de batimentos cardíacos de pacientes para futura análise preditiva de algumas doenças cardíacas.
</div>

## Pré requisitos

Para executar o projeto `SEM` o Docker:

- Ter o Node (versao >= 16.15.0) instalado na máquina

Para executar o projeto `COM` o Docker:

- Ter o Docker instalado na máquina

## Como executar o projeto

1° - Clonando o projeto

```bash
$ git clone https://github.com/intwone/hype-challenge.git
```

### Utilizando o Docker

2° - Subindo o container do Docker

```bash
$ npm run up
```

### Não Utilizando o Docker:

2° - Instalando as dependências

```bash
$ npm install
```

3° - Gerando o build do TypeScript

```bash
$ npm run build
```

4° - Executando o projeto

```bash
$ npm start
```

Retorno esperado

```bash
$ Server running at http://localhost:5000
```

## Testes

Para executar os testes unitários, execute o seguinte comando

```bash
$ npm test
```

## Diagrama de Arquitetura

<a href="https://miro.com/welcomeonboard/akFsNVFQNkdqODRaRkxZem55d2MwOEtwR2tsNVdoRnNLWnZzdHRRTGt5T0Fibno4MmFrRFdHZFZjOWVjMVJkZ3wzMDc0NDU3MzU5OTAyNzgwMjE1fDI=?share_link_id=982705160386">Link para visualizar o diagrama com mais detalhes</a>

<h1 align="center">
  <a href="https://ibb.co/HhsNPLd"><img src="https://i.ibb.co/fD58NVv/HYPE.jpg" alt="HYPE" border="0"></a>
</h1>

## Tecnologias Utilizadas

- NodeJs
- TypeScript
- Socket.io
- Express
- Jest

## Explicação da Arquitetura

<div align="justify">
  Um usuário irá se comunicar com o nosso dispositivo (HBM+). Essa interação poderá ser realizado com o dispositivo conectado ao pulso do usuário para que seja realizada a leitura da frequência cardiáca do mesmo.
  Esse dispositivo irá emitir um evento chamado de `heart_beat_information` onde irá conter o `tempo` em milisegundos, seguindo o formato abaixo:
</div>

```json
{
  "time": TEMPO_EM_MS (number)
}
```

<div align="justify">
  Nesse momento, o nosso servidor estará "ouvindo" o evento enviado pelo dispositivo.
  Ao receber a informação do dispositivo, nosso servidor irá calcular a resposta de saída (formula abaixo) e irá emitir um novo evento chamado de `heart_beat_output` no seguinte formato.
</div>

```json
{
  "status": TIPO_STATUS (number), // Se o resultado tiver sucesso retornará 1, senão, retornará 0
  "output": RESULTADO (number) // Se o resultado tiver sucesso retornará o valor do resultado calculado, senão, retornará 0
}
```

Formula:

```txt
  -0.06366 +
  0.12613 * cos(pi * (x / 500)) +
  0.12258 * cos(pi * (x / 250)) +
  0.01593 * sin(pi * (x / 500)) +
  0.03147 * sin(pi * (100 / 250))

  Onde x é o tempo em ms
```

<div align="justify">
  Agora, qualquer front-end ou api pode "ouvir" esse evento de saída do nosso servidor, fazendo com que essas informações possam ser utilizadas para a plotagem de um gráfico em tempo real.
</div>

## Considerações

Apesar do projeto parecer "simples", o mesmo demanda bastante conhecimento técnico.\
Como a ideia era que as informações da api trafegasse em tempo real, precisei pesquisar mais sobre o assunto para decidir qual tecnoligia iria utilizar para resolver o desafio.\
Depois de várias pesquisas, decidi utilizar o protocolo websockets e com ele pude criar uma api que se comunica em tempo real.

### Principais desafios

- Tempo curto para aprender uma nova tecnologia
- Entendimento do desafio para construir uma arquitetura do sistema
