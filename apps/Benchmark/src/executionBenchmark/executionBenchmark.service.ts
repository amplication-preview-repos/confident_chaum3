import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExecutionBenchmarkServiceBase } from "./base/executionBenchmark.service.base";

@Injectable()
export class ExecutionBenchmarkService extends ExecutionBenchmarkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
