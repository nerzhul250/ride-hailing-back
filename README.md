# ride-hailing-back

## Run local dev environment (app + postgres)
```
docker compose up -d
```
Next commands should be run inside ride-manager
## Seed db
```
yarn prisma db seed
```
## Run unit tests
```
yarn test
```
## Run e2e tests
```
yarn test:e2e
```
