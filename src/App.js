import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div
      style={{
        background: `url("https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=996&t=st=1671693991~exp=1671694591~hmac=2ee08bd2a3cbd0009317d3109322e9ccfe3f3e8c1541a083e181078070a31e41")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
