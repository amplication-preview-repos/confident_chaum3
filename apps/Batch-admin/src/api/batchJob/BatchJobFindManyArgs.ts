import { BatchJobWhereInput } from "./BatchJobWhereInput";
import { BatchJobOrderByInput } from "./BatchJobOrderByInput";

export type BatchJobFindManyArgs = {
  where?: BatchJobWhereInput;
  orderBy?: Array<BatchJobOrderByInput>;
  skip?: number;
  take?: number;
};
