import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BatchJobServiceBase } from "./base/batchJob.service.base";

@Injectable()
export class BatchJobService extends BatchJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
