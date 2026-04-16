# JuntosDeNovo

> Plataforma de registro centralizado de pessoas desaparecidas em situações de desastre

---

## O problema

Durante enchentes, o caos se instala em segundos. O sinal de celular oscila, a comunicação falha e informações sobre quem foi levado para qual abrigo ficam espalhadas em grupos de WhatsApp, posts em redes sociais e anotações avulsas. Famílias ficam horas — às vezes dias — sem saber se seus entes queridos estão em segurança.

**JuntosDeNovo resolve isso.** Uma plataforma simples, rápida e acessível que funciona como ponto único de registro e busca — para quem procura e para quem ajuda.

---

## Para quem é?

| Quem usa | Como usa |
|---|---|
| **Familiares** | Buscam por nome, localidade ou abrigo |
| **Voluntários e equipes de resgate** | Cadastram pessoas resgatadas nos abrigos |
| **Coordenadores de operações** | Consultam o painel consolidado em tempo real |

---

## Como funciona

1. Um voluntário no abrigo cadastra a pessoa com nome, descrição e localização
2. O registro fica disponível imediatamente na plataforma
3. Familiares buscam por qualquer dado disponível e encontram o registro
4. A equipe de resgate consegue coordenar transferências com informação centralizada

---

## Stack técnica

```
Frontend   →   Astro
Backend    →   Node.js + Express   (API REST)
Banco      →   SQLite / MongoDB    (perfis de pessoas registradas)
```

O uso de **Astro** ao invés de HTML: em situações de desastre, a internet é instável, logo é melhor uma página leve e que carregue rápido.

---

## Sobre o projeto

Desenvolvido no **Empower 5.0**, a partir do desafio sobre enchentes no Brasil. O foco foi claro desde o início: em vez de construir mais uma ferramenta genérica, resolver um ponto específico de falha — o desencontro de informações sobre pessoas desaparecidas no caos pós-desastre.

---

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## Contribuindo

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue primeiro para discutirmos o que você quer mudar.

---
