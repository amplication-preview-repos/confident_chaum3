import { BatchJob as TBatchJob } from "../api/batchJob/BatchJob";

export const BATCHJOB_TITLE_FIELD = "id";

export const BatchJobTitle = (record: TBatchJob): string => {
  return record.id?.toString() || String(record.id);
};
