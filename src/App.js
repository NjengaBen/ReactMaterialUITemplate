import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./pages/global/Sidebar";
import Team from "./pages/team";
// import Invoice from "./pages/invoice";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import Form from "./pages/form";
// import Calendar from "./pages/calendar";
// import Geography from "./pages/geography";
// import FAQ from "./pages/faq";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/invoice" element={<Invoice />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
