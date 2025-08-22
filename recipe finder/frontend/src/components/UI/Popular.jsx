import { Hamburger } from "lucide-react";
import React from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Container from "../Container";

const Popular = () => {
  const category = [
    {
      title: "Breakfast",
      img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
    },
    {
      title: "Lunch",
      img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVuY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Dinner",
      img: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlubmVyfGVufDB8fDB8fHww",
    },
    {
      title: "Desserts",
      img: "https://images.unsplash.com/photo-1702742322469-36315505728f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <section className="py-12">
      <Container>
        {/* <!-- Heading --> */}
        <div className="text-center mb-10">
          <Heading>Popular Cateogories</Heading>
          <SubHeading>Explore recipes by category</SubHeading>
        </div>

        {/* <!-- Grid --> */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* <!-- Card --> */}
          {category.map((curElem, idx) => {
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={curElem.img}
                  alt="Breakfast"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {curElem.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Popular;
