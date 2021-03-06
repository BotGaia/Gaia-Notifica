[![pipeline status](https://gitlab.com/botgaia/Gaia-Notifica/badges/master/pipeline.svg)](https://gitlab.com/botgaia/Gaia-Notifica/commits/master)
[![coverage report](https://gitlab.com/botgaia/Gaia-Notifica/badges/master/coverage.svg)](https://gitlab.com/botgaia/Gaia-Notifica/commits/master)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# DEPRECATED

Esse repositório não será mais utilizado, pois como estamos utilizando microserviços, foi decidido que esse repositório foi transferido para [Gaia-Esporte](https://github.com/BotGaia/Gaia-Esporte)

# Gaia-Notifica

## Objetivo
Esse serviço é responsável por fazer o cronjob do usuário de acordo com as suas preferências.

## Como contribuir

Se tiver interesse em como contribuir para o projeto, olhe nossa [wiki](https://github.com/fga-eps-mds/2019.1-Gaia).

## Como usar

### Como rodar

O nosso projeto utiliza o Docker e o Docker Compose como ferramentas de desenvolvimento. Para instalar eles, siga o tutorial no site oficial do [Docker](https://www.docker.com/).

Após instalar o docker rode o projeto como desenvolvimento da seguinte maneira:

```$ sudo docker-compose up --build```

Para rodar os testes, rode esse comando:

``` $ sudo docker-compose run gaianotifica npm run test ```

Para rodar a folha de estilo, utilize este comando:

``` $ sudo docker-compose run gaianotifica npm run lint ```

### Endpoints

Aqui se encontra todos os endpoints desse serviço. Todos os endpoints se encontra em `localhost:3003`.

|Requisição|Endpoint|Parâmetro:Tipo|Descrição|
|:--------:|:------:|:------------:|:-------:|
|POST|/createNotification|telegramId: String, <br> sports: Array, <br> days: Array, <br> hours: Integer, <br> minutes: Integer, <br> locals: Array|Salva uma notificação no sistema.|
