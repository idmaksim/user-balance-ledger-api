<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# 🎉 Welcome to the NestJS Base Template! 🎉

---

🚀 **Kickstart your NestJS journey with this comprehensive template!** 🚀

This template is designed to provide you with a solid foundation for building scalable and maintainable server-side applications using **NestJS**. It comes packed with essential features to streamline your development process.

---

## ✨ Features ✨

- **🔑 JWT Authentication**: Authorization is handled using **JWT** and **passport-jwt**, ensuring secure and stateless authentication.

- **🔑 Sessions**: Sessions are handled using **Redis/Memory** to store user sessions and manage them.

- **🛡️ Role-Based Access Control**: Effortlessly manage user roles and permissions to ensure the right access levels.

- **🌐 Internationalization Support**: Seamlessly support multiple languages and locales to reach a global audience.

- **📜 Swagger Documentation**: Automatically generated API documentation to help you and your team understand and use the API effectively.

- **🛠️ Modular Architecture**: Clean and organized structure to facilitate scalability and maintainability.

- **⚡ High Performance**: Optimized for speed and efficiency, ensuring your application runs smoothly.

- **🐳 Docker**: Docker compose file for development environment.

---

## 📘 Introduction

This template is structured to help you quickly start developing your NestJS application. Here's how you can make the most of it:

- **Apps**: Add new apps in the `apps` directory. Each app should encapsulate related functionality, including modules, common types, guards, interceptors, etc.

- **Modules**: Add new features by creating modules in the `<app-name>/src/modules` directory. Each module should encapsulate related functionality, including controllers, services, and repositories.

- **Controllers**: Define your API endpoints in controllers. Place them in the respective module's directory under `app-name/src/modules`.

- **Services**: Implement your business logic in services. These should also be placed within the module's directory.

- **Repositories**: Interact with the database using repositories. Define them in the module's directory and use Prisma or TypeORM for database operations.

- **DTOs (Data Transfer Objects)**: Define DTOs in the `dto` directory within each module to validate and type-check incoming data.

- **Guards and Interceptors**: Implement guards and interceptors in the `libs/common/src/guards` directory to handle cross-cutting concerns like authentication and logging.

- **Configuration**: Manage application configuration using the `ConfigModule` in `apps/app-name/src/config`. Environment variables can be defined in `.env` files.

- **Internationalization**: Add translations in the `libs/i18n` directory to support multiple languages.

- **Swagger Documentation**: Automatically generate API documentation by annotating your controllers and DTOs with Swagger decorators.

---

## 📚 Applications Structure

### Main API (apps/main)

- Primary API application
- Port: 3000
- Swagger: http://localhost:3000/api

### Admin API (apps/admin)

- Administrative API
- Port: 3001
- Swagger: http://localhost:3001/api

---

## 🚀 Getting Started

To get started with this template, follow these steps:

1. **Create Your Repository**: This is a GitHub template repository. Use it to create your own repository by clicking the "Use this template" button on GitHub.

2. **Clone Your Repository**: Clone your newly created repository to your local machine.

   ```bash
   git clone <your-repository-url>
   ```

3. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.

   ```bash
   cd <your-repository-name>
   pnpm install
   ```

4. **Set Up Environment Variables**: Create a `.env` file in the root directory and configure your environment variables. Refer to `.env.example` for guidance.

5. **Database Setup**: Ensure your database is running and configured correctly. Use Prisma or TypeORM migrations to set up your database schema.

6. **Run the Application**: Start the application in development mode.

   ```bash
   pnpm start:dev
   ```

7. **Access Swagger Documentation**: Visit `http://localhost:<3000/3001>/api` to view the automatically generated Swagger documentation.

8. **Explore and Customize**: Explore the codebase, add new features, and customize the template to fit your project needs.

---

Explore these features and more to build a powerful and flexible application with NestJS! 🚀
