import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BatchJobList } from "./batchJob/BatchJobList";
import { BatchJobCreate } from "./batchJob/BatchJobCreate";
import { BatchJobEdit } from "./batchJob/BatchJobEdit";
import { BatchJobShow } from "./batchJob/BatchJobShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { ExecutionBenchmarkList } from "./executionBenchmark/ExecutionBenchmarkList";
import { ExecutionBenchmarkCreate } from "./executionBenchmark/ExecutionBenchmarkCreate";
import { ExecutionBenchmarkEdit } from "./executionBenchmark/ExecutionBenchmarkEdit";
import { ExecutionBenchmarkShow } from "./executionBenchmark/ExecutionBenchmarkShow";
import { BatchEntityList } from "./batchEntity/BatchEntityList";
import { BatchEntityCreate } from "./batchEntity/BatchEntityCreate";
import { BatchEntityEdit } from "./batchEntity/BatchEntityEdit";
import { BatchEntityShow } from "./batchEntity/BatchEntityShow";
import { ElasticSearchLogList } from "./elasticSearchLog/ElasticSearchLogList";
import { ElasticSearchLogCreate } from "./elasticSearchLog/ElasticSearchLogCreate";
import { ElasticSearchLogEdit } from "./elasticSearchLog/ElasticSearchLogEdit";
import { ElasticSearchLogShow } from "./elasticSearchLog/ElasticSearchLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BatchMonitoringService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BatchJob"
          list={BatchJobList}
          edit={BatchJobEdit}
          create={BatchJobCreate}
          show={BatchJobShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="ExecutionBenchmark"
          list={ExecutionBenchmarkList}
          edit={ExecutionBenchmarkEdit}
          create={ExecutionBenchmarkCreate}
          show={ExecutionBenchmarkShow}
        />
        <Resource
          name="BatchEntity"
          list={BatchEntityList}
          edit={BatchEntityEdit}
          create={BatchEntityCreate}
          show={BatchEntityShow}
        />
        <Resource
          name="ElasticSearchLog"
          list={ElasticSearchLogList}
          edit={ElasticSearchLogEdit}
          create={ElasticSearchLogCreate}
          show={ElasticSearchLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
