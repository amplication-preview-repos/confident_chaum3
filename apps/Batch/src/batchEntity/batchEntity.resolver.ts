import * as graphql from "@nestjs/graphql";
import { BatchEntityResolverBase } from "./base/batchEntity.resolver.base";
import { BatchEntity } from "./base/BatchEntity";
import { BatchEntityService } from "./batchEntity.service";

@graphql.Resolver(() => BatchEntity)
export class BatchEntityResolver extends BatchEntityResolverBase {
  constructor(protected readonly service: BatchEntityService) {
    super(service);
  }
}
