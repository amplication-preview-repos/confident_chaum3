import { Module } from "@nestjs/common";
import { ElasticSearchLogModuleBase } from "./base/elasticSearchLog.module.base";
import { ElasticSearchLogService } from "./elasticSearchLog.service";
import { ElasticSearchLogController } from "./elasticSearchLog.controller";
import { ElasticSearchLogResolver } from "./elasticSearchLog.resolver";

@Module({
  imports: [ElasticSearchLogModuleBase],
  controllers: [ElasticSearchLogController],
  providers: [ElasticSearchLogService, ElasticSearchLogResolver],
  exports: [ElasticSearchLogService],
})
export class ElasticSearchLogModule {}
