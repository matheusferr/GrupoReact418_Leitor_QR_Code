# Leitor de QRCode

### Aplicativo de leitura e interação com QRCodes.
Código feito por [Matheus Ferreira da Costa](https://github.com/matheusferr).

[Documentação](https://cbt-ifsp-tcc-react.netlify.app/leitorqrcode) feita por [Henrico Lazuroz](https://github.com/hicolazu) e Luisa Toni.

## Tabela de conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
- [Instalação](#instala%C3%A7%C3%A3o)
- [Como usar](#como-usar)
- [Build](#build)
- [Licença](#licen%C3%A7a)

## Sobre o Projeto

Este projeto visa demonstrar um exemplo de uso da Camera API com QRCodes e Deep Linking utilizando o React Native.

## Instalação

Clone este repositório com o comando:
```bash
git clone https://github.com/matheusferr/GrupoReact418_Leitor_QR_Code.git
```
* Entre no diretório **GrupoReact418_Leitor_QR_Code** e instale as dependências utilizando o Yarn:
```bash
yarn
```

## Como Usar

Dentro do diretório do projeto, você pode executar os seguinte comandos:

### `yarn start`

Inicía o Metro Server para desenvolvimento do app.

A aplicação atualizará automaticamente quando você editar o código.

### `yarn android`

Compila a versão debug e instala nos dipositivos android conectados via **ADB**. Caso não encontre nenhum dispositivo, o emulador será iniciado.

### `yarn ios`

Compila a versão debug e instala no emulador iOS.

### Build
Entre no diretório **android** e execute o seguinte comando:
```bash
./gradlew assembleRelease
```
O **apk** será gerado em **android/app/build/outputs/apk/release** após a conclusão do processo.

## Licença

[MIT License](https://opensource.org/licenses/MIT)
