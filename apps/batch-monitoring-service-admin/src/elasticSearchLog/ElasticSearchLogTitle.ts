import { ElasticSearchLog as TElasticSearchLog } from "../api/elasticSearchLog/ElasticSearchLog";

export const ELASTICSEARCHLOG_TITLE_FIELD = "id";

export const ElasticSearchLogTitle = (record: TElasticSearchLog): string => {
  return record.id?.toString() || String(record.id);
};
