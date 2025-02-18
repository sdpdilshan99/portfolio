import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Service />
    </>
  );
}
