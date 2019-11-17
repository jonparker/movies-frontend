FROM mcr.microsoft.com/dotnet/core/sdk:3.0 as build

COPY . .

WORKDIR "src/MoviesApp/"

RUN dotnet build

RUN dotnet test

RUN dotnet publish MoviesApp.csproj -c Release -o /app

WORKDIR /app

ENTRYPOINT [ "dotnet", "MoviesApp.dll" ]
