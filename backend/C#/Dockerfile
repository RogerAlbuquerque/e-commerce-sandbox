# Use a imagem base do ASP.NET Core
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Exponha a porta da Api
EXPOSE 80

# Use a imagem de build para compilar a aplicação
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

# Defina o diretório de trabalho
WORKDIR /src

# Copie o arquivo .csproj da Api e restaure as dependências
COPY Ecommerce.Api/Ecommerce.Api.csproj ./Ecommerce.Api/
COPY Ecommerce.Application/Ecommerce.Application.csproj ./Ecommerce.Application/
COPY Ecommerce.Communication/Ecommerce.Communication.csproj ./Ecommerce.Communication/
COPY Ecommerce.Domain/Ecommerce.Domain.csproj ./Ecommerce.Domain/
COPY Ecommerce.Exception/Ecommerce.Exception.csproj ./Ecommerce.Exception/
COPY Ecommerce.Infrastructure/Ecommerce.Infrastructure.csproj ./Ecommerce.Infrastructure/
RUN dotnet restore Ecommerce.Api/Ecommerce.Api.csproj

# Copie o restante do código da Api
COPY Ecommerce.Api/ . /src/Ecommerce.Api/

# Defina o diretório de trabalho para a build
WORKDIR /src/Ecommerce.Api

# Compile a aplicação
RUN dotnet build Ecommerce.Api.csproj -c Release -o /app/build

# Publique a aplicação
FROM base AS final
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "Ecommerce.Api.dll"]