import { Module } from "@nestjs/common";
import { BatchEntityModuleBase } from "./base/batchEntity.module.base";
import { BatchEntityService } from "./batchEntity.service";
import { BatchEntityController } from "./batchEntity.controller";
import { BatchEntityResolver } from "./batchEntity.resolver";

@Module({
  imports: [BatchEntityModuleBase],
  controllers: [BatchEntityController],
  providers: [BatchEntityService, BatchEntityResolver],
  exports: [BatchEntityService],
})
export class BatchEntityModule {}
