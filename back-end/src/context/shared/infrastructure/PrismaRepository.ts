import { PrismaClient } from "./prisma";

export class PrismaRepository {
  constructor(protected readonly client: PrismaClient) { }

  async close() {
    await this.client.$disconnect();
  }
}
