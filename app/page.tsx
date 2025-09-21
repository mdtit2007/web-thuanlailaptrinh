import React from "react";
import Homee from "./Homee/page"
import Narbar from "./components/Narbar"
import Contact from "./components/contact"
import Membership from "./membership/page"
import Courses from "./components/courses"
export default function Home() {
  return (
    <section>
      <Narbar />
      <Homee />
      <Courses />
      <Membership />
      <Contact />
      </section>
  );
}
