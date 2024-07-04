import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BatchEntityList } from "./batchEntity/BatchEntityList";
import { BatchEntityCreate } from "./batchEntity/BatchEntityCreate";
import { BatchEntityEdit } from "./batchEntity/BatchEntityEdit";
import { BatchEntityShow } from "./batchEntity/BatchEntityShow";
import { BatchJobList } from "./batchJob/BatchJobList";
import { BatchJobCreate } from "./batchJob/BatchJobCreate";
import { BatchJobEdit } from "./batchJob/BatchJobEdit";
import { BatchJobShow } from "./batchJob/BatchJobShow";
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
        title={"Batch"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BatchEntity"
          list={BatchEntityList}
          edit={BatchEntityEdit}
          create={BatchEntityCreate}
          show={BatchEntityShow}
        />
        <Resource
          name="BatchJob"
          list={BatchJobList}
          edit={BatchJobEdit}
          create={BatchJobCreate}
          show={BatchJobShow}
        />
      </Admin>
    </div>
  );
};

export default App;
