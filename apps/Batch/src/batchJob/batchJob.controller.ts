import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatchJobService } from "./batchJob.service";
import { BatchJobControllerBase } from "./base/batchJob.controller.base";

@swagger.ApiTags("batchJobs")
@common.Controller("batchJobs")
export class BatchJobController extends BatchJobControllerBase {
  constructor(protected readonly service: BatchJobService) {
    super(service);
  }
}
