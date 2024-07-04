import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ElasticSearchLogService } from "./elasticSearchLog.service";
import { ElasticSearchLogControllerBase } from "./base/elasticSearchLog.controller.base";

@swagger.ApiTags("elasticSearchLogs")
@common.Controller("elasticSearchLogs")
export class ElasticSearchLogController extends ElasticSearchLogControllerBase {
  constructor(protected readonly service: ElasticSearchLogService) {
    super(service);
  }
}
