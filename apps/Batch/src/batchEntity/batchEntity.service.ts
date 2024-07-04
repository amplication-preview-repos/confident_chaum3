import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BatchEntityServiceBase } from "./base/batchEntity.service.base";

@Injectable()
export class BatchEntityService extends BatchEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
