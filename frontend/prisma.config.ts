import { definePrismaConfig } from "prisma/config";
import "dotenv/config";

export default definePrismaConfig({
  orm: {
    schema: "prisma/schema.prisma",
    migrations: {
      path: "prisma/migrations",
      seed: "tsx prisma/seed.ts",
    },
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
});
