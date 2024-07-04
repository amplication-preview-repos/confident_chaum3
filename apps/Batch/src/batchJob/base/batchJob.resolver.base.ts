/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BatchJob } from "./BatchJob";
import { BatchJobCountArgs } from "./BatchJobCountArgs";
import { BatchJobFindManyArgs } from "./BatchJobFindManyArgs";
import { BatchJobFindUniqueArgs } from "./BatchJobFindUniqueArgs";
import { DeleteBatchJobArgs } from "./DeleteBatchJobArgs";
import { BatchJobService } from "../batchJob.service";
@graphql.Resolver(() => BatchJob)
export class BatchJobResolverBase {
  constructor(protected readonly service: BatchJobService) {}

  async _batchJobsMeta(
    @graphql.Args() args: BatchJobCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BatchJob])
  async batchJobs(
    @graphql.Args() args: BatchJobFindManyArgs
  ): Promise<BatchJob[]> {
    return this.service.batchJobs(args);
  }

  @graphql.Query(() => BatchJob, { nullable: true })
  async batchJob(
    @graphql.Args() args: BatchJobFindUniqueArgs
  ): Promise<BatchJob | null> {
    const result = await this.service.batchJob(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BatchJob)
  async deleteBatchJob(
    @graphql.Args() args: DeleteBatchJobArgs
  ): Promise<BatchJob | null> {
    try {
      return await this.service.deleteBatchJob(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}