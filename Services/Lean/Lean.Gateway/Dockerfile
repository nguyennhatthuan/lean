FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["Lean.Gateway/Lean.Gateway.csproj", "Lean.Gateway/"]
RUN dotnet restore "Lean.Gateway/Lean.Gateway.csproj"
COPY . .
WORKDIR "/src/Lean.Gateway"
RUN dotnet build "Lean.Gateway.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Lean.Gateway.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Lean.Gateway.dll"]