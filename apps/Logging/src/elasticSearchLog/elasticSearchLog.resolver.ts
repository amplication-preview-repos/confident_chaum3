import * as graphql from "@nestjs/graphql";
import { ElasticSearchLogResolverBase } from "./base/elasticSearchLog.resolver.base";
import { ElasticSearchLog } from "./base/ElasticSearchLog";
import { ElasticSearchLogService } from "./elasticSearchLog.service";

@graphql.Resolver(() => ElasticSearchLog)
export class ElasticSearchLogResolver extends ElasticSearchLogResolverBase {
  constructor(protected readonly service: ElasticSearchLogService) {
    super(service);
  }
}
