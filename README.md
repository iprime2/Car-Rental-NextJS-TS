# Full Stack Car Rental with Next.js 13, Typescript, and Tailwind

#### https://sushil-car-rental.vercel.app

### Features:
 
- Rent cars online
- Filter cars with a brand name, model, year, and fuel type.
- Pop-up modal to see car details
- Tailwind design
- Tailwind animations and effects
- Full responsiveness


![Screenshot](demo.png)

![Screenshot](demo1.png)

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/iprime2/AI-SAAS
```

### Install packages

```shell
npm install
```

### Setup .env file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
OPENAI_API_KEY=
REPLICATE_API_KEY=
DATABASE_URL=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
```
 
### Setup Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `lint`          | Check any javascript error               |
| `build`         | To build the webapp                      |
