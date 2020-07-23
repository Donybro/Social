import React from 'react';

import MenuBar from "./components/menu_bar";
import SideBar from "./components/side_bar";
import PostsBody from "./components/posts_body";
import "../src/style/CSS/App.css"

function App() {
  return (
   <div className="App">
     <MenuBar />
     <div className="wrapper">
      <SideBar />
      {/* <PostsBody /> */}
     </div>
   </div>
  );
}

export default App;
