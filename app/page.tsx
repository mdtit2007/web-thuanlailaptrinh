import React from "react";
import Homee from "./Homee/page"
import Narbar from "./component/Narbar"
import Contact from "./component/contact"
import Membership from "./membership/page"
import Courses from "./component/courses"
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
