import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
})

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismadb
}

export default prismadb;
