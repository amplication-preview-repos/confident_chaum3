import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExecutionBenchmarkList } from "./executionBenchmark/ExecutionBenchmarkList";
import { ExecutionBenchmarkCreate } from "./executionBenchmark/ExecutionBenchmarkCreate";
import { ExecutionBenchmarkEdit } from "./executionBenchmark/ExecutionBenchmarkEdit";
import { ExecutionBenchmarkShow } from "./executionBenchmark/ExecutionBenchmarkShow";
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
        title={"Benchmark"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ExecutionBenchmark"
          list={ExecutionBenchmarkList}
          edit={ExecutionBenchmarkEdit}
          create={ExecutionBenchmarkCreate}
          show={ExecutionBenchmarkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
