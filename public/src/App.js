

import AllRoutes from './allRoutes/AllRoutes';
import Navbar from './components/Header/Navbar';
import Sidebar from './components/Header/Sidebar';

function App() {
  const linkData = [
    {
      link: "/create",
      destination: "Create Task",
    },
    {
      link: "/",
      destination: "Tasks",
    },
    {
      link: "/completed",
      destination: "Completed",
    },
    {
      link: "/pending",
      destination: "Pending",
    },
  ];
  return (
    <>
      <Navbar data={linkData} />
      <Sidebar data={linkData} />
      <AllRoutes />
    </>
  );
}

export default App;
