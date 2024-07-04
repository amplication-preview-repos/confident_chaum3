import * as graphql from "@nestjs/graphql";
import { BatchJobResolverBase } from "./base/batchJob.resolver.base";
import { BatchJob } from "./base/BatchJob";
import { BatchJobService } from "./batchJob.service";

@graphql.Resolver(() => BatchJob)
export class BatchJobResolver extends BatchJobResolverBase {
  constructor(protected readonly service: BatchJobService) {
    super(service);
  }
}
