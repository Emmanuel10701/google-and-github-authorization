This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Google and GitHub Authorization

A full-stack authentication project integrating Google and GitHub OAuth using Next.js for the frontend, Django and Express for backend APIs. This setup demonstrates secure user login with multiple frameworks working together.

## Features

- **Next.js Frontend**: Provides a responsive authentication UI and client-side logic.
- **Django Backend**: Manages user data, sessions, and database interactions.
- **Express Backend**: Handles OAuth callbacks and token verification for Google and GitHub.
- **OAuth 2.0 Flow**: Implements secure token exchange for authentication.
- **Scalable Architecture**: Modular and easy to extend for additional providers or features.

## Technologies Used

- **Next.js**: React-based framework for building the frontend.
- **Django**: Python web framework for backend logic and database management.
- **Express.js**: Lightweight Node.js framework for handling OAuth callbacks.
- **OAuth 2.0**: Protocol for secure authentication with Google and GitHub.
- **PostgreSQL/MySQL**: Database for storing user data (used with Django).
- **Tailwind CSS**: For styling the frontend (optional).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- Python (v3.8 or later)
- PostgreSQL/MySQL (or any preferred database)
- npm, yarn, or pnpm (for managing frontend dependencies)

### Frontend (Next.js)

1. Navigate to the frontend directory:

   ```bash
   cd my-next-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Backend (Django)

1. Navigate to the Django backend directory:

   ```bash
   cd backend/django
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run database migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

### Backend (Express.js)

1. Navigate to the Express backend directory:

   ```bash
   cd backend/express
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Express server:

   ```bash
   npm start
   ```

### Environment Variables

Create `.env` files in both the frontend and backend directories with the following variables:

#### Frontend (`my-next-app/.env.local`)

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_GITHUB_CLIENT_ID=your-github-client-id
NEXT_PUBLIC_API_URL=http://localhost:8000  # Django backend URL
```

#### Django Backend (`backend/django/.env`)

```env
SECRET_KEY=your-django-secret-key
DATABASE_URL=your-database-url
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

#### Express Backend (`backend/express/.env`)

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
DJANGO_API_URL=http://localhost:8000  # Django backend URL
```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Django Documentation](https://docs.djangoproject.com/en/stable/)
- [Express.js Documentation](https://expressjs.com/)
- [OAuth 2.0 Overview](https://oauth.net/2/)

## Deploying the Project

### Frontend Deployment

Deploy the Next.js app using platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

### Backend Deployment

- **Django**: Deploy using platforms like [Heroku](https://www.heroku.com/), [AWS](https://aws.amazon.com/), or [DigitalOcean](https://www.digitalocean.com/).
- **Express**: Deploy using [Heroku](https://www.heroku.com/) or [Vercel](https://vercel.com/).

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions and improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
