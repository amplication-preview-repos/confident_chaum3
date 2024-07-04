import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExecutionBenchmarkService } from "./executionBenchmark.service";
import { ExecutionBenchmarkControllerBase } from "./base/executionBenchmark.controller.base";

@swagger.ApiTags("executionBenchmarks")
@common.Controller("executionBenchmarks")
export class ExecutionBenchmarkController extends ExecutionBenchmarkControllerBase {
  constructor(protected readonly service: ExecutionBenchmarkService) {
    super(service);
  }
}
