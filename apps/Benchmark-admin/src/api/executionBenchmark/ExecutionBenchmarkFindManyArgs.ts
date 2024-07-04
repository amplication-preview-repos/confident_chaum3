import { ExecutionBenchmarkWhereInput } from "./ExecutionBenchmarkWhereInput";
import { ExecutionBenchmarkOrderByInput } from "./ExecutionBenchmarkOrderByInput";

export type ExecutionBenchmarkFindManyArgs = {
  where?: ExecutionBenchmarkWhereInput;
  orderBy?: Array<ExecutionBenchmarkOrderByInput>;
  skip?: number;
  take?: number;
};
