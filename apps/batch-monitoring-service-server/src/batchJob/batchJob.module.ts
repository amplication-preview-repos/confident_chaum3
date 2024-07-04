import { Module } from "@nestjs/common";
import { BatchJobModuleBase } from "./base/batchJob.module.base";
import { BatchJobService } from "./batchJob.service";
import { BatchJobController } from "./batchJob.controller";
import { BatchJobResolver } from "./batchJob.resolver";

@Module({
  imports: [BatchJobModuleBase],
  controllers: [BatchJobController],
  providers: [BatchJobService, BatchJobResolver],
  exports: [BatchJobService],
})
export class BatchJobModule {}
