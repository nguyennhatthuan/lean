FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["Lean.IdentityServer/Lean.IdentityServer.csproj", "Lean.IdentityServer/"]
RUN dotnet restore "Lean.IdentityServer/Lean.IdentityServer.csproj"
COPY . .
WORKDIR "/src/Lean.IdentityServer"
RUN dotnet build "Lean.IdentityServer.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Lean.IdentityServer.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Lean.IdentityServer.dll"]