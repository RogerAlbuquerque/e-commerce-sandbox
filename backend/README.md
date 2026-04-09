# Backend — API E-commerce (.NET)

Este diretório contém a API REST do e-commerce, implementada em **C# / ASP.NET Core** com **Clean Architecture** (camadas `Api`, `Application`, `Domain`, `Infrastructure`), **Entity Framework Core** e **PostgreSQL**.

## Estrutura relevante

| Caminho | Descrição |
|---------|-----------|
| `Csharp/C#.sln` | Solução principal |
| `Csharp/Ecommerce.Api` | Projeto web (controllers, `Program.cs`, `appsettings.json`) |
| `Csharp/Ecommerce.Application` | Serviços, DTOs, AutoMapper |
| `Csharp/Ecommerce.Domain` | Entidades e interfaces de repositório |
| `Csharp/Ecommerce.Infrastructure` | `DbContext`, repositórios e **migrations** do EF Core |
| `Csharp/Dockerfile` | Imagem Docker da API (opcional) |

## Pré-requisitos

1. **.NET SDK 9.0** ([download](https://dotnet.microsoft.com/download))
2. **PostgreSQL** em execução (local ou contêiner), acessível pela connection string abaixo
3. (Opcional) **CLI do EF Core** para aplicar migrações:

   ```bash
   dotnet tool install --global dotnet-ef
   ```

   Se já estiver instalado, atualize quando necessário:

   ```bash
   dotnet tool update --global dotnet-ef
   ```

## Passo a passo para rodar localmente

Execute os comandos a partir da raiz do repositório clonado (ajuste caminhos se estiver em outro diretório).

### 1. Clonar o repositório

```bash
git clone <url-do-repositório>
cd e-commerce-sandbox
```

### 2. Subir o PostgreSQL

Crie um banco compatível com a connection string do projeto (por padrão o nome é `ecommercesandbox`).

**Exemplo com Docker:**

```bash
docker run --name ecommerce-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=ecommercesandbox -p 5432:5432 -d postgres:16
```

Se usar outro usuário, senha, host ou nome do banco, atualize o `ConnectionStrings:Postgres` no próximo passo.

### 3. Configurar a connection string

O arquivo `Csharp/Ecommerce.Api/appsettings.json` define:

- **Chave:** `ConnectionStrings:Postgres`
- **Exemplo (padrão do repositório):** `Host=localhost;Port=5432;Database=ecommercesandbox;Username=postgres;Password=admin;`

Para não commitar segredos, prefira **User Secrets** no projeto da API (aqui está hardcoded só para motivos de exemplo):

```bash
cd backend/Csharp/Ecommerce.Api
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:Postgres" "Host=localhost;Port=5432;Database=ecommercesandbox;Username=postgres;Password=SUA_SENHA;"
cd ../..
```

### 4. Restaurar dependências e compilar

```bash
cd backend/Csharp
dotnet restore
dotnet build
```

### 5. Aplicar as migrações do banco

As migrations estão em `Ecommerce.Infrastructure/Migrations`. A partir de `backend/Csharp`:

```bash
dotnet ef database update --project Ecommerce.Infrastructure/Ecommerce.Infrastructure.csproj --startup-project Ecommerce.Api/Ecommerce.Api.csproj
```

Isso cria/atualiza as tabelas no PostgreSQL conforme o modelo atual.

### 6. Executar a API

```bash
dotnet run --project Ecommerce.Api/Ecommerce.Api.csproj
```

Por padrão (veja `Ecommerce.Api/Properties/launchSettings.json`):

- **HTTP:** `http://localhost:5224`
- **HTTPS:** `https://localhost:7132`

Em ambiente **Development**, a API expõe documentação OpenAPI e a UI **Scalar**:

- OpenAPI: `/openapi/v1.json` (conforme `Program.cs` com `MapOpenApi()`)
- Scalar: `/scalar/v1` (perfil `https` no `launchSettings.json` abre isso automaticamente)

Endpoints principais da API (prefixo `api`):

- `GET/POST` … `/api/products`
- `GET/PUT/DELETE` … `/api/products/{id}`
- `GET/POST` … `/api/categories`
- `GET/PUT/DELETE` … `/api/categories/{id}`

### 7. (Opcional) Rodar com Docker

O `Dockerfile` em `backend/Csharp` constrói apenas a aplicação. Você ainda precisa de um PostgreSQL acessível e de passar a connection string em runtime (variável de ambiente ou configuração), por exemplo construindo a imagem a partir de `backend/Csharp` e publicando a porta conforme o seu `docker run` ou `compose`.

## Resolução de problemas

| Sintoma | O que verificar |
|---------|-----------------|
| Erro de conexão com o banco | PostgreSQL ligado, porta `5432`, usuário/senha e nome do banco iguais à connection string |
| Tabelas inexistentes | Rodar `dotnet ef database update` (passo 5) |
| `dotnet ef` não encontrado | Instalar a ferramenta global `dotnet-ef` (pré-requisitos) |
| HTTPS com certificado inválido no navegador | Confie no certificado de desenvolvimento: `dotnet dev-certs https --trust` |

---

Com isso, qualquer pessoa que clonar o repositório consegue subir PostgreSQL, aplicar migrations e executar a API localmente seguindo os passos acima.
