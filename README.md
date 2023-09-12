# API de Envio de E-mails

Bem-vindo à API de Envio de E-mails, um projeto desenvolvido com paixão por Guilherme Matos.

## Como Começar

Para começar a usar esta API, siga os seguintes passos:

1. **Clone o Projeto**: Clone este repositório para sua máquina local usando o comando:

   ```bash
   git clone https://github.com/Guilherme-Matosoli/EmailApi
   ```

2. **Instale as Dependências**: Navegue até o diretório do projeto e instale as dependências usando um gerenciador de pacotes, como Yarn ou npm:

   ```bash
   cd seu-projeto
   yarn install
   # ou
   npm install
   ```

3. **Configure Variáveis de Ambiente**: Crie um arquivo de variáveis de ambiente (`.env`) no diretório raiz do projeto. Você pode usar o modelo fornecido no arquivo `.env.example` como referência. Certifique-se de configurar as informações necessárias, incluindo as credenciais do provedor SMTP.

4. **Configuração SMTP**: A configuração padrão do Nodemailer está definida para o Elastic Email. Se desejar usar um provedor SMTP diferente, obtenha as configurações SMTP desse provedor e atualize as informações no arquivo de variáveis de ambiente.

## Endpoints

Esta API possui o seguinte endpoint:

### `/sendmail` (POST)

Este endpoint permite enviar e-mails com os seguintes campos no corpo da requisição:

- `mail`: Endereço de e-mail do destinatário.
- `name`: Nome do destinatário.
- `subject`: Assunto do e-mail.
- `message`: Mensagem a ser enviada.

#### Campos:

- `mail`: O endereço de e-mail do destinatário.
- `name`: O nome do destinatário.
- `subject`: O assunto do e-mail.
- `message`: O conteúdo da mensagem a ser enviada.

#### Exemplo de Requisição:

```json
{
  "mail": "mailexample@tal.com",
  "name": "nameexample",
  "subject": "subject example",
  "message": "message example"
}
```

#### Resposta de Sucesso:

```json
{
  "status": "success"
}
```

#### Resposta de Erro (Campos Ausentes):

```json
{
  "message": "Missing fields"
}
```

#### Resposta de Erro (Erro Interno do Servidor):

```json
{
  "message": "Internal Server Error"
}
```

## Feito com Amor

Esta API foi desenvolvida com muita paixão por Guilherme Matos. Se você deseja saber mais sobre meu trabalho, não hesite em visitar meu [LinkedIn](https://www.linkedin.com/in/guilherme-matos-13b6a6229/).

--- 