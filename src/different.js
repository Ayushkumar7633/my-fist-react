import React, { memo } from "react";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Different() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Ayush</p>} />
          <Route path="blogs" element={<p>Kumar</p>} />
          <Route path="contact" element={<p>Mandal</p>} />
          <Route path="*" element={<p>AK</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Different;
