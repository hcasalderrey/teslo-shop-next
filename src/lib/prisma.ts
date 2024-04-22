import { PrismaClient } from '@prisma/client'

const prismaClienteSingleton = () =>{
    return new PrismaClient()
}

type PrismaClienteSingleton  = ReturnType<typeof prismaClienteSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClienteSingleton | undefined
}

const prisma = globalForPrisma.prisma || prismaClienteSingleton()
export default prisma

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma