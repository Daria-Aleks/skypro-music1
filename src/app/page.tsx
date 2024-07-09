// import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
// import Track from "@/components/Track/Track";
import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CetnerBlock/CenterBlock";

export default function Home() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav/>
          <CenterBlock/>
          <Sidebar/>
        </main>
        <Bar/>
      </div>
    </div>
  </>
  
  );
}
