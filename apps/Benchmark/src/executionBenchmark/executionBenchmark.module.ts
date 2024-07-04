import { Module } from "@nestjs/common";
import { ExecutionBenchmarkModuleBase } from "./base/executionBenchmark.module.base";
import { ExecutionBenchmarkService } from "./executionBenchmark.service";
import { ExecutionBenchmarkController } from "./executionBenchmark.controller";
import { ExecutionBenchmarkResolver } from "./executionBenchmark.resolver";

@Module({
  imports: [ExecutionBenchmarkModuleBase],
  controllers: [ExecutionBenchmarkController],
  providers: [ExecutionBenchmarkService, ExecutionBenchmarkResolver],
  exports: [ExecutionBenchmarkService],
})
export class ExecutionBenchmarkModule {}
