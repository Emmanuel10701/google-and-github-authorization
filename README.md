# Next.js Authentication Project with Provider Login (Google & GitHub)

<div style="color:#1E90FF; font-weight: bold; font-size: 24px; margin-top: 20px;">Project Overview</div>

This project is a modern web application built with **Next.js** that implements user authentication using external providers, specifically **Google** and **GitHub**. The goal is to provide a seamless and secure login experience using OAuth 2.0 protocols, allowing users to sign in quickly without creating new passwords.

This project leverages **NextAuth.js** to manage authentication flows, session management, and protect routes within a Next.js environment. It demonstrates best practices for handling sensitive user information, securing sessions, and offering an extensible structure for adding more OAuth providers as needed.

---

<div style="color:#32CD32; font-weight: bold; font-size: 24px; margin-top: 20px;">Tech Stack</div>

- **Next.js** — React framework optimized for server-side rendering and API routes  
- **NextAuth.js** — Authentication library enabling OAuth provider login integration  
- **React** — Frontend UI components  
- **Tailwind CSS** (optional) — Utility-first CSS framework for styling  
- **OAuth 2.0 / OpenID Connect** — Industry-standard authentication protocols  
- **PostgreSQL** (or other SQL databases) — For persisting user and session data  
- **Node.js** — Runtime environment for server-side code  

---

<div style="color:#FF8C00; font-weight: bold; font-size: 24px; margin-top: 20px;">Features</div>

- User login with Google and GitHub OAuth providers  
- Secure OAuth 2.0 authentication flow with NextAuth.js  
- JWT or database-backed session management  
- Protected routes accessible only to authenticated users  
- Responsive and user-friendly login UI  
- Logout functionality to securely end user sessions  
- Easy extensibility to add more authentication providers  

---

<div style="color:#DC143C; font-weight: bold; font-size: 24px; margin-top: 20px;">Authentication Providers</div>

This project currently supports:

- **Google** OAuth login  
- **GitHub** OAuth login  

Additional providers can be added by configuring their client IDs and secrets in the NextAuth configuration.

---

<div style="color:#4B0082; font-weight: bold; font-size: 24px; margin-top: 20px;">How It Works</div>

1. User clicks “Login with Google” or “Login with GitHub” button.  
2. NextAuth redirects the user to the provider’s OAuth consent page.  
3. User authenticates and grants permission to share profile data.  
4. Provider redirects back to the Next.js app with an authorization code.  
5. NextAuth exchanges the code for access tokens and fetches user info.  
6. User session is created and stored securely using JWT or the database.  
7. User is redirected to protected pages available only to authenticated users.  
8. Logging out invalidates the session and clears user data on the client side.  

API routes in Next.js handle authentication flows on the server to keep sensitive data secure.

---

<div style="color:#20B2AA; font-weight: bold; font-size: 24px; margin-top: 20px;">Installation & Setup</div>

### Prerequisites

- Node.js (version 16 or higher recommended)  
- npm or yarn package manager  
- Google Developer Console and GitHub Developer settings for OAuth credentials  

### Setup Steps

1. Clone the repository  
```bash
git clone https://github.com/Emmanuel10701/google-and-github-authorization.git
cd google-and-github-authorization
