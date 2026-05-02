# E-commerce Sandbox
## [👉Link to application👈](https://e-commerce-sandbox-zeta.vercel.app/)
Obs: maybe take a while to load because the backend server is free


**Is my project to test and learn all the type of feature, and will be a functional e-commerce too**

Playground for learning full-stack patterns, with a working e-commerce UI and a .NET API backed and PostgreSQL database.

---

👉[ Link to application](https://e-commerce-sandbox-zeta.vercel.app/) 👈

(Obs: maybe take a while to load because the backend server is free.)

---

## Quick start with Docker Compose

If you have [Docker](https://docs.docker.com/get-docker/) and **Docker Compose**, you can bring up the full stack from the **repository root** by running:

```bash
docker compose up
```

using [`docker-compose.yaml`](docker-compose.yaml). That file give together PostgreSQL, .NET API, and the Next.js frontend on ports **3000** and **8080** by default.

The compose file references the images `ecommerce-backend:latest` and `ecommerce-frontend:latest` that has in my dockerhub public repository . 

**Sample data in Postgres:** the Postgres service mounts [`backend/DatabasesBackup/postgresBackup`](backend/DatabasesBackup/postgresBackup) into `/docker-entrypoint-initdb.d` on container. On the **first** initialization of an empty database, PostgreSQL runs the SQL files there—including [`backend/DatabasesBackup/postgresBackup/PostgresBackup.sql`](backend/DatabasesBackup/postgresBackup/PostgresBackup.sql)— `ecommercesandbox` database will be created with all the example tables that are needed to run the project.

**URLs (default ports):**

| Service       | URL                                                                      |
| ------------- | ------------------------------------------------------------------------ |
| Frontend      | [http://localhost:3000](http://localhost:3000)                           |
| API (example) | [http://localhost:8080/api/Products](http://localhost:8080/api/Products) |

Environment files used by Compose live under [`dockerConfigs/envFiles/`](dockerConfigs/envFiles/) (Postgres credentials and `ConnectionStrings__Postgres` for the API container). 

**OBS: All this is hardcoded only for this sample.**

---

## Backend overview (`backend/Csharp/`)

The API is an ASP.NET Core **.NET 9** solution with a layered layout:

| Project                                               | Role                                                                                                  |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Ecommerce.Api**                                     | HTTP entrypoint: controllers, `Program.cs`, Swagger UI in Development                                 |
| **Ecommerce.Application**                             | Services, DTOs, AutoMapper profiles                                                                   |
| **Ecommerce.Domain**                                  | Domain models and repository interfaces                                                               |
| **Ecommerce.Infrastructure**                          | EF Core `AppDbContext`, PostgreSQL (Npgsql), naming convention snake_case, repository implementations |
| **Ecommerce.Communication** / **Ecommerce.Exception** | Shared contracts and errors                                                                           |

`Program.cs` registers CORS, controllers, infrastructure (`AddInfrastructureAPI`), and Swagger (`AddSwaggerGen`). The database connection is read from configuration key **`ConnectionStrings:Postgres`** (see [`Ecommerce.Api/appsettings.json`](backend/Csharp/Ecommerce.Api/appsettings.json)). 

**OBS: As said before, ConnectionStrings it's hardcoded for example purposes only.** The best wyas its using secrets.

Controllers use routes such as `api/Products` and `api/Categories` (see [`ProductsController`](backend/Csharp/Ecommerce.Api/Controllers/ProductsController.cs)).

---

## Running the backend locally (without Docker for the API)

**Prerequisites**

- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- PostgreSQL (15+ recommended), running and reachable on the host

**1. Create the database and load sample data**

Create a database named `ecommercesandbox` (or adjust the connection string in step 3). Then execute the seed script:

[`backend/DatabasesBackup/postgresBackup/PostgresBackup.sql`](backend/DatabasesBackup/postgresBackup/PostgresBackup.sql)

This script defines the schema (e.g. `products`, `categories`, `product_states`, `categories_products`) and inserts example rows aligned with the EF Core snake_case model.

Example using `psql` (adjust user/host as needed):

```bash
psql -U postgres -h localhost -c "CREATE DATABASE ecommercesandbox;"
psql -U postgres -h localhost -d ecommercesandbox -f backend/DatabasesBackup/postgresBackup/PostgresBackup.sql
```

**2. Match the connection string**

Default local settings in `appsettings.json` use `Host=localhost`, `Port=5432`, `Database=ecommercesandbox`, `Username=postgres`, `Password=admin`. Change them to match your PostgreSQL user and password, or override with an environment variable:

```bash
set ConnectionStrings__Postgres=Host=localhost;Port=5432;Database=ecommercesandbox;Username=YOUR_USER;Password=YOUR_PASSWORD;
```



**3. Run the API**

From the API project folder:

```bash
cd backend/Csharp/Ecommerce.Api
dotnet run
```

By default the **http** profile listens on **http://localhost:5224** (see [`launchSettings.json`](backend/Csharp/Ecommerce.Api/Properties/launchSettings.json)). In **Development**, Swagger UI is at `/swagger` (e.g. the **https** profile opens it on launch).

**Example endpoint:** `http://localhost:5224/api/Products`

---

## Running the frontend locally

From [`frontend/`](frontend/), install dependencies and start the dev server. The app calls the API using `NEXT_PUBLIC_API_URL`; it should include the `/api` prefix, for example running on terminal:

```bash
set NEXT_PUBLIC_API_URL=http://localhost:5224/api
cd frontend
npm install
npm run dev
```
Adjust the port if your API runs on another URL (e.g. `http://localhost:8080/api` when using the Dockerized backend).

---

## Repository layout (short)

- `backend/Csharp/` — .NET solution and [`Dockerfile`](backend/Csharp/Dockerfile) for the API image  
- `backend/DatabasesBackup/postgresBackup/` — PostgreSQL seed scripts (including `PostgresBackup.sql`)  
- `frontend/` — Next.js app and [`Dockerfile`](frontend/Dockerfile)  
- `dockerConfigs/` — env files for Compose  
- `docker-compose.yaml` — Postgres + backend + frontend orchestration  
