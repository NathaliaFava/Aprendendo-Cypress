<h2 align="center">Aprendendo Cypress</h3>

<h3 align="center">Projeto criado a fim de mostrar a aplicabilidade do Cypress nos testes 2e2 automatizados.</h3>
<br>
:speech_balloon: <b>Afinal, o que é Cypress?</b>
<br>
<br>
<p>Cypress é uma ferramenta de automação que utiliza a linguagem JavaScript para a escrita dos testes dos aplicativos web. 
<br>
O que o torna interessante, além de possuir fácil instalação, configuração e aprendizado, é também o fato da ferramenta proporcionar a escrita nas três camadas de testes: <b>Testes Unitários</b>, <b>Testes de Serviço</b> e <b>Testes de Interface(UI).</b> 
Neste primeiro momento, <i>este projeto terá como foco os testes na camada de interface(UI)</i>.
<br>
Para conhecer na íntegra esta ferramenta, recomendo a leitura da documentação oficial do <a href="https://www.cypress.io/"><b>Cypress.io</a></b>.</p>
<br>
:raised_hand: <b>Ambiente e Cypress</b>
<br>
<br>
Antes de instalarmos o Cypress, é necessário prepararmos o ambiente para que possamos recebê-lo.
<br>
<br>
<b>1)	Instalação via prompt de comando do node.js e, consequentemente, do NPM</b>

- Utilize o comando abaixo para que você possa ir até o diretório de instalação
```
cd C:/
```

- Após, utilize o comando
```
npm node install
```

- Quando concluída a instalação do node, utilize os comandos
```
node -v
```
<i>(caso a instalação do node.js tiver sido concluída com sucesso, você verá qual a versão do node que está instalado na sua máquina)</i>
```
npm -v
```
<i>(caso a instalação do node.js tver sido concluída com sucesso você verá qual a versão do npm que está instalado na sua máquina)</i>
<br>
<br>
<b>2)	Desta forma, preparamos o ambiente para receber o Cypress. Agora, vamos às configurações finais!</b>
<br>
- Vá até o diretório que você comumente utiliza para realizar instalações
```
cd C:/
```

- Crie uma pasta 
```
mkdir testes-com-cypress
```
- Utilize o comando abaixo dentro da pasta <i>testes-com-cypress</i>
```
npm init -y
```

<i>(desta forma, o arquivo package.json será criado de forma default)</i>

- Após, utilize o comando
```
npm install cypress --save-dev
```
- Após conclusão da instalação do cypress, utilize
```
npx cypress open
```

<h4 align="center"><b>Tchanã! O Cypress foi configurado na sua máquina. Agora, basta você criar um projeto do zero ou utilize o repositório “Aprendendo-Cypress” como base. :blush: </b></h3> 


