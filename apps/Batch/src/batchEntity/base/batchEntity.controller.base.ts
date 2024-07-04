/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BatchEntityService } from "../batchEntity.service";
import { BatchEntityCreateInput } from "./BatchEntityCreateInput";
import { BatchEntity } from "./BatchEntity";
import { BatchEntityFindManyArgs } from "./BatchEntityFindManyArgs";
import { BatchEntityWhereUniqueInput } from "./BatchEntityWhereUniqueInput";
import { BatchEntityUpdateInput } from "./BatchEntityUpdateInput";

export class BatchEntityControllerBase {
  constructor(protected readonly service: BatchEntityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BatchEntity })
  async createBatchEntity(
    @common.Body() data: BatchEntityCreateInput
  ): Promise<BatchEntity> {
    return await this.service.createBatchEntity({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BatchEntity] })
  @ApiNestedQuery(BatchEntityFindManyArgs)
  async batchEntities(@common.Req() request: Request): Promise<BatchEntity[]> {
    const args = plainToClass(BatchEntityFindManyArgs, request.query);
    return this.service.batchEntities({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BatchEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async batchEntity(
    @common.Param() params: BatchEntityWhereUniqueInput
  ): Promise<BatchEntity | null> {
    const result = await this.service.batchEntity({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BatchEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBatchEntity(
    @common.Param() params: BatchEntityWhereUniqueInput,
    @common.Body() data: BatchEntityUpdateInput
  ): Promise<BatchEntity | null> {
    try {
      return await this.service.updateBatchEntity({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BatchEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBatchEntity(
    @common.Param() params: BatchEntityWhereUniqueInput
  ): Promise<BatchEntity | null> {
    try {
      return await this.service.deleteBatchEntity({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
