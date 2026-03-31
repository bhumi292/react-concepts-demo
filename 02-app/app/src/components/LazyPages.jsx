import React, { Suspense, useState } from 'react';

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));

function LazyPages() {
  const [page, setPage] = useState("home");
  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>

      <Suspense fallback = {<h2>loading..</h2>}>
        {page === "home" ? <Home/>:<About/>}
      </Suspense>
    </div>
  );
}

export default LazyPages