<div align="center">
  <img src="https://github.com/Rashidziya/Blog-App/blob/main/Frontend/public/icons/logo.png.png" />
</div>

# [Medium - A Blog React App  🔗](https://blog-app-ten-neon.vercel.app/) 

- A React app styled with Tailwind CSS and powered by a serverless backend using Cloudflare Workers for enhanced performance.

-  It features Recoil state management for efficient caching, JWT-based authentication, and comprehensive TypeScript with Zod for type safety and validation.

## Features

- Database Integration with Prisma and PostgreSQL.
- Robust Authentication and Validation Using JWT.
- Efficient State Management with Recoil.
- Serverless Backend with Cloudflare Workers.

## Live Link
https://blog-app-ten-neon.vercel.app/

## Screenshots

![App Screenshot1](https://github.com/Rashidziya/Image-Assets/blob/main/SignupPage.png)

![App Screenshot2](https://github.com/Rashidziya/Image-Assets/blob/main/publishPost.png)
![App Screenshot2](https://github.com/Rashidziya/Image-Assets/blob/main/Screenshot%202024-05-24%20004939.png)

## Run Locally(Backend)

```bash
  git clone https://github.com/Rashidziya/Blog-App
```
Go to the project directory

```bash
  cd Blog-App/Backend
```
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
## Run Locally(Frontend)

```bash
  git clone https://github.com/Rashidziya/Blog-App
```
Go to the project directory

```bash
  cd Blog-App/Frontend
```
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Open your browser and go to http://localhost:5173

## Dependencies

Key libraries and packages used in this project: Frontend
- **HTTP Client**: `Axios`
- **Routing**: `react-router-dom`
- **Typeinference**: `@rashidziya/medium-common: ^1.0.3`
### Environment Variables: Frontend
- Add BACKEND_URL='own backend api'      in bacendurl.ts
### Evironment Variables : Backend
Create Top level wrangler.toml file.
- put JWT_SECRET='own jwt secret'
- put BACKEND_URL='own connection pool usl'

Create a Top-Level .env file.
- put BACKEND_URL = 'own postgreSQL url'

For all the dependencies see package.json file for frontend and backend.

## Lessons Learned
- **Shared Types with npm:** shared `npm package` for types between the backend and frontend, ensuring type safety and consistency across environments
- **React Fundamentals:** Deepened understanding of React, enhancing my ability to write and optimize React code.
- **Component Interaction:** Mastered the use of React hooks like `useState` and `useEffect` for state management and side effects.
- **API Integration:** Gained experience in fetching and handling data through APIs.
- **Data Handling:** Learned to effectively render dynamic data using JavaScript’s `map` function.

## Author

- [@Rashidziya](https://github.com/Rashidziya)

## License

[MIT](https://choosealicense.com/licenses/mit/)
