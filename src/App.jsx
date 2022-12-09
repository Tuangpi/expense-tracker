import "./App.css";
import { AddNewTransaction } from "./component/AddNewTransaction";
import { Header } from "./component/Header";
import { History } from "./component/History";
import { TransactionContext } from "./context/GlobalContext";

function App() {
  return (
    <TransactionContext>
      <div className="main">
        <Header />
        <History />
        <AddNewTransaction />
      </div>
    </TransactionContext>
  );
}

export default App;
