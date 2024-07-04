import { ElasticSearchLogWhereInput } from "./ElasticSearchLogWhereInput";
import { ElasticSearchLogOrderByInput } from "./ElasticSearchLogOrderByInput";

export type ElasticSearchLogFindManyArgs = {
  where?: ElasticSearchLogWhereInput;
  orderBy?: Array<ElasticSearchLogOrderByInput>;
  skip?: number;
  take?: number;
};
