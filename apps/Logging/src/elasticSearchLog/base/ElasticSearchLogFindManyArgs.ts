/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ElasticSearchLogWhereInput } from "./ElasticSearchLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ElasticSearchLogOrderByInput } from "./ElasticSearchLogOrderByInput";

@ArgsType()
class ElasticSearchLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ElasticSearchLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ElasticSearchLogWhereInput, { nullable: true })
  @Type(() => ElasticSearchLogWhereInput)
  where?: ElasticSearchLogWhereInput;

  @ApiProperty({
    required: false,
    type: [ElasticSearchLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ElasticSearchLogOrderByInput], { nullable: true })
  @Type(() => ElasticSearchLogOrderByInput)
  orderBy?: Array<ElasticSearchLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ElasticSearchLogFindManyArgs as ElasticSearchLogFindManyArgs };