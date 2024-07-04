import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatchEntityService } from "./batchEntity.service";
import { BatchEntityControllerBase } from "./base/batchEntity.controller.base";

@swagger.ApiTags("batchEntities")
@common.Controller("batchEntities")
export class BatchEntityController extends BatchEntityControllerBase {
  constructor(protected readonly service: BatchEntityService) {
    super(service);
  }
}
