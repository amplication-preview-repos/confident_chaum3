import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElasticSearchLogServiceBase } from "./base/elasticSearchLog.service.base";

@Injectable()
export class ElasticSearchLogService extends ElasticSearchLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
