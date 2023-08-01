# Shoppee - Online Store

Shoppee is an online store application built using React JS, Redux, Tailwind CSS, React Router v6, and Supabase for authentication. The application also integrates the Paystack API for handling payments. This README.md provides detailed documentation on how to set up and run the Shoppee project using Yarn and Vite.

## Installation

Before you start, ensure you have Node.js and Yarn installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/DavOlufuwa/shoppee.git
cd shoppee
```

2. Install dependencies using Yarn:

```bash
yarn install
```

3. Install Tailwind CSS:

```bash
yarn add -D tailwindcss postcss autoprefixer
```
4. Initialize Tailwind:

```bash
yarn tailwindcss init -p
```
5. Install React Router v6:

```bash
yarn add react-router-dom
```
6. Install Redux and Redux Toolkit:

```bash
yarn add redux @reduxjs/toolkit
```

## Configuration

The application requires certain configurations to work correctly. Follow the steps below to set up the necessary configurations:

### Supabase Authentication

1. Sign up or log in to [Supabase](https://supabase.io/).
2. Create a new project on Supabase and retrieve the `PUBLIC_URL` and `SUPABASE_URL`.
3. Go to Project Settings > API in the Supabase dashboard and create a new API key with authentication enabled. Retrieve the `SUPABASE_ANON_KEY`.
4. Open the `.env` file in the root of the project and set the following environment variables:

```dotenv
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Paystack Integration

1. Sign up or log in to [Paystack](https://paystack.com/) and get your API key.
2. Open the `.env` file in the root of the project and set the following environment variable:

```dotenv
VITE_PAYSTACK_API_KEY=your_paystack_api_key
```

## Running the Application

Once the configurations are set up, you can run the Shoppee application locally using the following Yarn commands:

### Development Mode

Run the application in development mode with hot-reloading enabled:

```bash
yarn dev
```

The application should now be running on `http://localhost:5173/`.

### Production Mode

To build the application for production, use the following command:

```bash
yarn build
```

This will create an optimized build of the application in the `dist` folder.

To serve the production build locally, use:

```bash
yarn serve
```

The application should now be running on `http://localhost:5173/`.

## Conclusion

Congratulations! You have successfully set up and installed Shoppee, an online store built using React JS, Redux, Tailwind CSS, React Router v6, and integrated with Supabase authentication and Paystack for payments.

Please refer to the project's source code and documentation in each package to understand specific implementations and make any necessary customizations.

Happy shopping! 🛍️
