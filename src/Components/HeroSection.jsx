import React from 'react'

const HeroSection = () => {
  return (
 <section>
    <section className="text-gray-600 body-font bg-BgColor">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Food Fables: Stories & Recipes from the Heart of the Kitchen
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Food is more than just sustenance—it's an experience. It's the rich aroma that fills your kitchen, the vibrant colors of a freshly prepared dish, and the joy of sharing a meal with loved ones. Here, at Lokesh Boligorla, we’re all about celebrating those moments and bringing you closer to the flavors that make life so delicious.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-psd/cook-home-landing-page-theme_23-2148612789.jpg?t=st=1731058117~exp=1731061717~hmac=b3b775ce35b1aef2cd7ebeb2202e3e77e6eaf191259055b82e2f182789724768&w=1060"/>
    </div>
  </div>
</section>
 </section>
  )
}

export default HeroSection;
