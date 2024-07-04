import { ExecutionBenchmark as TExecutionBenchmark } from "../api/executionBenchmark/ExecutionBenchmark";

export const EXECUTIONBENCHMARK_TITLE_FIELD = "id";

export const ExecutionBenchmarkTitle = (
  record: TExecutionBenchmark
): string => {
  return record.id?.toString() || String(record.id);
};
