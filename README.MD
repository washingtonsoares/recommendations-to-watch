# Uma lista colaborativa de recomendações de séries, filmes e animes para assistir :heart_eyes:

## Como contribuir

Basta adicionar no arquivo `recommendations/index.json` algum filme, série ou anime.

#### Exemplo:
```json
[
    {
        "title": "Stranger Things",
        "description": "Stranger Things é uma série de televisão americana de ficção científica e terror criada, escrita e dirigida pelos irmãos Matt e Ross Duffer.",
        "imageURL": "https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg",
        "learnMore": "https://pt.wikipedia.org/wiki/Stranger_Things"
    }
]
```

## Crie seu primeiro pull request

- [Fork este repositório](https://help.github.com/articles/fork-a-repo/)
- Clone o repositório forcado, da sua conta
- Adicione a sua contribuição no arquivo `recommendations/index.json`
- Prepare os arquivos para o commit: 
    ```shell
     git add .
    ```
- Commit suas alterações com uma menasgem apropriada, exemplo: 
    ```shell
     git commit -m "Adicionando filme Clube da Luta"
    ```
- Envie as alterações para o seu repositório:
     ```shell
      git push orign master
    ```
- [Crie o seu pull request](https://github.com/washingtonsoares/recommendations-to-watch/pull/new/master) e aguarde aprovação :)

## Como manter o seu projeto local sincronizado com este repositório
- Adicionar o endereço deste reposiório como `origin` do projeto local: 
     ```shell
      git remote add upstream https://github.com/washingtonsoares/recommendations-to-watch.git
    ```
- Sincroniza o projeto local com o repositório do Github que foi "forkado": 
     ```shell
      git pull upstream master
    ```