import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Prisma 7 reads datasource URLs from config instead of schema.prisma.
    url: process.env.POSTGRES_PRISMA_URL ?? "",
  },
});
