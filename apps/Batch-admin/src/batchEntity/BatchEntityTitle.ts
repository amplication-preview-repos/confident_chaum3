import { BatchEntity as TBatchEntity } from "../api/batchEntity/BatchEntity";

export const BATCHENTITY_TITLE_FIELD = "id";

export const BatchEntityTitle = (record: TBatchEntity): string => {
  return record.id?.toString() || String(record.id);
};
