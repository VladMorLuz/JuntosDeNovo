# JuntosDeNovo

> Plataforma de registro centralizado de pessoas desaparecidas em situações de desastre — conectando informações para acelerar reencontros.

---

## O problema

Durante enchentes e evacuações, o caos se instala em segundos e as famílias se separam no meio da confusão. O sinal de celular oscila, a comunicação falha e informações sobre quem foi levado para qual abrigo ficam espalhadas em grupos de WhatsApp, posts em redes sociais e anotações avulsas. Famílias ficam horas — às vezes dias — sem saber se seus entes queridos estão em segurança.

Ao mesmo tempo, equipes de apoio recebem dezenas de pedidos semelhantes e enfrentam dificuldade extrema para organizar as informações e coordenar o reencontro das famílias.

**JuntosDeNovo resolve isso.** Uma plataforma simples, rápida e acessível que funciona como ponto único de registro e busca — para quem procura e para quem ajuda.

---

## Para quem é?

| Quem usa | Como usa |
|---|---|
| **Familiares** | Buscam entes queridos pelo painel centralizado, conferindo foto, última localização e status de resgate |
| **Voluntários e equipes de resgate** | Cadastram pessoas localizadas nos abrigos em poucos segundos, atualizando a rede instantaneamente |
| **Coordenadores de operações** | Consultam o mural consolidado em tempo real, evitando duplicidade de esforços no caos |

---

## Como funciona

1. Um voluntário no abrigo (ou um familiar buscando ajuda) cadastra a pessoa com nome, características físicas, foto e última localização conhecida
2. O registro é enviado para a API e fica disponível imediatamente no mural global
3. Quando a pessoa é localizada, basta clicar em **"Marcar como Encontrado"**
4. O status é atualizado no banco de dados e o registro é movido para a área de casos resolvidos

---

## Stack técnica

```
Frontend   →   Astro + Tailwind CSS
Backend    →   Node.js + Express (API REST, ES Modules)
Banco      →   SQLite via Prisma ORM v5
```

A escolha do **Astro** no lugar de SPAs tradicionais não foi à toa: em situações de desastre a internet é instável e cada byte importa. O Astro entrega HTML estático ultra-rápido, exigindo o mínimo de banda do usuário afetado.

---

## Rodando localmente

O projeto é fullstack e modularizado — você vai precisar de **dois terminais** abertos simultaneamente.

### Backend

```bash
cd backend
npm install

# Cria o banco de dados e gera as tipagens do Prisma
npx prisma migrate dev --name init
npx prisma generate

# Inicia a API na porta 3333
node src/server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Sobre o projeto

Desenvolvido no **Empower 5.0** a partir do desafio sobre enchentes no Brasil. O foco foi claro desde o início: em vez de construir mais uma ferramenta genérica, resolver um ponto específico de falha — o desencontro de informações sobre pessoas desaparecidas no caos pós-desastre.

---

## Contribuindo

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue primeiro para discutirmos o que você gostaria de mudar.