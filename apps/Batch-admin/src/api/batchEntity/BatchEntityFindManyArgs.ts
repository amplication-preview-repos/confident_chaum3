import { BatchEntityWhereInput } from "./BatchEntityWhereInput";
import { BatchEntityOrderByInput } from "./BatchEntityOrderByInput";

export type BatchEntityFindManyArgs = {
  where?: BatchEntityWhereInput;
  orderBy?: Array<BatchEntityOrderByInput>;
  skip?: number;
  take?: number;
};
