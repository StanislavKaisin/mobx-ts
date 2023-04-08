import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./hooks/useStore";

function App() {
  const { cartStore } = useStore();
  useEffect(() => {
    cartStore.getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>App</div>;
}

export default observer(App);
