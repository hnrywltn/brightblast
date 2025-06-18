// Item Name: Bright Blast JS template.
// Author: Maraviya Infotech
// Version: 1
// Copyright 2024

"use client";
import NewArrivals from "@/components/arrivals/NewArrivals";
import BannerOne from "@/components/banner/BannerOne";
import BannerTwo from "@/components/banner/BannerTwo";
import BlogSlider from "@/components/blog/BlogSlider";
import ExploreCategory from "@/components/category/ExploreCategory";
import DealSlider from "@/components/deal-slider/DealSlider";
import HeroSlider from "@/components/hero/HeroSlider";
import Instagram from "@/components/instagram/Instagram";
import About from "@/components/pages-section/about-us/About";
import Contact from "@/components/pages-section/contact-us/Contact";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import TopVendor from "@/components/top-vendor/TopVendor";

export default function Home() {
  return (
    <>
      <About />
      {/* <HeroSlider /> */}
      <ExploreCategory />
      {/* <DealSlider /> */}
      {/* <BannerOne /> */}
      {/* <BannerTwo /> */}
      {/* <NewArrivals /> */}
      {/* <Services /> */}
      {/* <TopVendor /> */}
      {/* <Testimonials /> */}
      {/* <BlogSlider /> */}
      {/* <Instagram /> */}
      <Contact />
    </>
  );
}
