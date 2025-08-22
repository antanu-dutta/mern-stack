import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Heading from "../Heading";
import RecipeCard from "../RecipeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const Trending = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12">
      <Container>
        <div className="text-center mb-10">
          <Heading>Trending Recipes</Heading>
          <SubHeading>Explore trending recipes</SubHeading>
        </div>

        <div className="relative">
          {/* Custom Prev Button */}
          <button
            ref={prevRef}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          {/* Custom Next Button */}
          <button
            ref={nextRef}
            className="absolute -right-20  top-1/2  -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.navigation.prevEl = prevRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?pasta"
                title="Creamy Alfredo Pasta"
                description="A rich and creamy pasta made with parmesan cheese and garlic."
                time="30"
                calories="450"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?salad"
                title="Fresh Greek Salad"
                description="A refreshing mix of cucumber, tomato, olives, and feta cheese."
                time="15"
                calories="250"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?pizza"
                title="Cheesy Margherita Pizza"
                description="Classic pizza topped with mozzarella, basil, and tomato sauce."
                time="20"
                calories="600"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?burger"
                title="Juicy Beef Burger"
                description="A perfectly grilled beef patty with cheese, lettuce, and tomato."
                time="25"
                calories="700"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?burger"
                title="Juicy Beef Burger"
                description="A perfectly grilled beef patty with cheese, lettuce, and tomato."
                time="25"
                calories="700"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?burger"
                title="Juicy Beef Burger"
                description="A perfectly grilled beef patty with cheese, lettuce, and tomato."
                time="25"
                calories="700"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?burger"
                title="Juicy Beef Burger"
                description="A perfectly grilled beef patty with cheese, lettuce, and tomato."
                time="25"
                calories="700"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCard
                image="https://source.unsplash.com/400x300/?burger"
                title="Juicy Beef Burger"
                description="A perfectly grilled beef patty with cheese, lettuce, and tomato."
                time="25"
                calories="700"
              />
            </SwiperSlide>
          </Swiper>

          {/* Custom Next Button */}
        </div>
      </Container>
    </section>
  );
};

export default Trending;
