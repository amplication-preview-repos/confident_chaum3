import * as graphql from "@nestjs/graphql";
import { ExecutionBenchmarkResolverBase } from "./base/executionBenchmark.resolver.base";
import { ExecutionBenchmark } from "./base/ExecutionBenchmark";
import { ExecutionBenchmarkService } from "./executionBenchmark.service";

@graphql.Resolver(() => ExecutionBenchmark)
export class ExecutionBenchmarkResolver extends ExecutionBenchmarkResolverBase {
  constructor(protected readonly service: ExecutionBenchmarkService) {
    super(service);
  }
}
