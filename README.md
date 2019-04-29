# Gaia-Notifica

## Objetivo
Esse serviço é responsável por fazer o cronjob do usuário de acordo com as suas preferências.

## Como usar

### Como rodar
Primeiro tem que instalar o docker, em seguida rode o projeto como desenvolvimento da seguinte maneira:

```$ sudo docker-compose up --build```

Para rodar os testes, rode esse comando:

``` $ sudo docker-compose run gaianotifica /bin/sh -c "cd /app; npm i; npm run test" ```

Para rodar a folha de estilo, utilize este comando:

``` $ sudo docker-compose run gaianotifica /bin/sh -c "cd /app; npm i; npm run lint" ```

### Endpoints
