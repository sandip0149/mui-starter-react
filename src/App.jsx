import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/base/Button";
import { Card, CardMedia } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card sx={{
        mb:3,
        p:2
      }}>
        This is a sample mui contained react project repo

      </Card>

      <Button>Click me</Button>
    </>
  );
}

export default App;
