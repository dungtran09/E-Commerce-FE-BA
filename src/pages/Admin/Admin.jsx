import React from "react";
import { Footer, Header, Main, Sidebar } from "../../components/Admin";

const Admin = () => {
  return (
    <div className="w-main m-auto">
      <Header />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8 mt-5">
        <section className="h-[500px] bg-gray-50">
          <Sidebar />
        </section>
        <section className="h-100 bg-gray-50">
          <Main />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
