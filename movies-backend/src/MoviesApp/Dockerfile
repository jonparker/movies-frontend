FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine as build

WORKDIR /src

COPY . .

RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -r linux-musl-x64 -o /app

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-alpine as runtime

WORKDIR /app
COPY --from=publish /app .

ENTRYPOINT [ "dotnet", "MoviesApp.dll" ]
