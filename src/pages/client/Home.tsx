import { Carousel } from "@/components/ui/carousel";
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from 'react-router-dom'; 
import { useRef, useState } from "react";

const Home = () => {

  const products = Array(5).fill({
    image:
      "https://www.searchenginejournal.com/wp-content/uploads/2021/09/find-whats-trending-6151d8276c49d-sej.png",
  });



  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Handle Next Button Click
  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first item
    }
  };

  // Handle Previous Button Click
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - 1); // Loop back to the last item
    }
  };

  return <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
    {/* Hero Section */}
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-2xl text-muted-foreground mb-8">
        Experience the future of simplicity and efficiency.
      </p>
      <Link to="/client/products">
      <Button variant="default" size="lg">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      </Link>
    </section>


  {/* Featured Products Section */}
  <section className="w-full max-w-6xl py-10">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">
          Featured Products
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            >
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 300}px)` }}
              ref={carouselRef}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[300px] mx-2 h-64 shadow-xl rounded-xl overflow-hidden group transform transition-all hover:scale-105 duration-300 ease-in-out"
                >
                  <img
                    src={product.image}
                    alt="Product"
                    className="w-full h-full object-cover rounded-xl group-hover:opacity-80 transition-all"
                  />
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all">
                    <h3 className="text-lg text-white font-semibold">{product.name}</h3>
                    <p className="text-sm text-white">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            >
              <ArrowRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </section>






    {/* Image Gallery */}
    <section className="max-w-6xl w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64">
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/09/find-whats-trending-6151d8276c49d-sej.png"  alt="Product Image" 
  className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64">
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/09/find-whats-trending-6151d8276c49d-sej.png"  alt="Product Image" 
  className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64">
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/09/find-whats-trending-6151d8276c49d-sej.png"  alt="Product Image" 
  className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>

    {/* Feature Highlights */}
    <section className="max-w-4xl w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6" />
              Fast and Efficient Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our app processes tasks quickly and efficiently, saving you time.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6" />
              Reliable and Secure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Enjoy peace of mind with our reliable and secure services.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6" />
              User-Friendly Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our intuitive interface makes it easy for everyone to use.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Product Highlights */}
    <section className="max-w-6xl w-full mb-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-xl w-full h-64 shadow-lg">
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/09/find-whats-trending-6151d8276c49d-sej.png"  alt="Product Image" 
  className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-xl w-full h-64 shadow-lg">
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/09/find-whats-trending-6151d8276c49d-sej.png"  alt="Product Image" 
  className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>


    {/* Testimonials */}
    <section className="max-w-6xl w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              "This app has transformed my workflow. It's fast, reliable, and easy to use."
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              "The security features are top-notch. I feel very safe using this app."
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sam Johnson</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              "The user interface is intuitive and makes navigation a breeze."
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>

    {/* Call to Action (CTA) */}
    <section className="text-center">
      <p className="text-2xl text-muted-foreground mb-8">
        Ready to transform your experience? Get started today!
      </p>
      <Button variant="default" size="lg">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  </div>
};

export default Home;
