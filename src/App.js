import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//import Budget.js
import Budget from "./components/Budget";

//Other components
import AllocationForm from "./components/AllocationForm";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";

import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
             {" "}
          {
            // Budget component
            <div className="col-sm">
              <Budget />
            </div>
          }
             {" "}
          {
            //Remaining component
            <div className="col-sm">
              <Remaining />
            </div>
          }
             {" "}
          {
            //ExpenseTotal component
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          }
             {" "}
          {
            // Add ExpenseList component here
            <div>
              <ExpenseList />
            </div>
          }
             {" "}
          {
            //ExpenseItem component here
            <div>
              <ExpenseItem />
            </div>
          }
             {" "}
          {
            // AllocationForm component
            <div>
              <AllocationForm />
            </div>
          }
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
