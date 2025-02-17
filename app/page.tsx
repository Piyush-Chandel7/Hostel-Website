'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shripad Hostel</h1>
          <button
            className="block md:hidden text-primary-foreground"
            onClick={toggleNav}
          >
            ☰
          </button>
          <nav className={`fixed inset-0 bg-primary-foreground bg-opacity-90 z-50 transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:bg-transparent md:flex w-full md:w-auto`}>
            <div className="flex flex-col md:flex-row w-full md:w-auto">
              <button
                className="self-end md:hidden text-black p-4"
                onClick={closeNav}
              >
                ✕
              </button>
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-8 md:p-0 text-primary md:text-primary-foreground">
                <li>
                  <Link href="#about" legacyBehavior>
                    <a className="hover:underline" onClick={closeNav}>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" legacyBehavior>
                    <a className="hover:underline" onClick={closeNav}>Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="#rooms" legacyBehavior>
                    <a className="hover:underline" onClick={closeNav}>Rooms</a>
                  </Link>
                </li>
                <li>
                  <Link href="#staff" legacyBehavior>
                    <a className="hover:underline" onClick={closeNav}>Staff</a>
                  </Link>
                </li>
                <li>
                  <Link href="#events" legacyBehavior>
                    <a className="hover:underline" onClick={closeNav}>Events</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" legacyBehavior>
                    <a className="hover:underline" onClick={closeNav}>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="about" className="py-12 bg-background">
          <div className="container mx-auto">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Shripad Hostel"
                layout="fill"
                objectFit="cover"
                className="brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Shripad Hostel</h1>
                <p className="text-xl md:text-2xl text-center max-w-2xl px-4">
                  Your home away from home. We offer comfortable accommodations, a friendly atmosphere, and a great
                  location for exploring the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Gallery image ${i}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="rooms" className="py-12 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Rooms & Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dorm Bed",
                  floor: "1st Floor",
                  price: "$600/month",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Private Room",
                  floor: "2nd Floor",
                  price: "$1200/month",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Family Room",
                  floor: "3rd Floor",
                  price: "$2000/month",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((room) => (
                <div key={room.name} className="border rounded-lg overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.name} bunk beds`}
                    width={300}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{room.name}</h3>
                    <p className="text-muted-foreground">{room.floor}</p>
                    <p className="text-muted-foreground font-bold mt-2">{room.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="staff" className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Staff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "John Doe", role: "Manager" },
                { name: "Jane Smith", role: "Receptionist" },
                { name: "Mike Johnson", role: "Housekeeper" },
                { name: "Sarah Brown", role: "Tour Guide" },
              ].map((staff) => (
                <div key={staff.name} className="text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt={staff.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-2"
                  />
                  <h3 className="font-semibold">{staff.name}</h3>
                  <p className="text-muted-foreground">{staff.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-12 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <ul className="space-y-4">
              {[
                { name: "Movie Night", date: "Every Friday, 8 PM" },
                { name: "City Tour", date: "Saturdays, 10 AM" },
                { name: "Cooking Class", date: "Sundays, 4 PM" },
              ].map((event) => (
                <li key={event.name} className="border-b pb-2">
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-muted-foreground">{event.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="reviews" className="py-12 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Residents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  role: "Student",
                  comment:
                    "Shripad Hostel has been an amazing place to live during my studies. The staff is friendly and the facilities are top-notch!",
                },
                {
                  name: "Jane Smith",
                  role: "Parent",
                  comment:
                    "I feel at ease knowing my daughter is staying at Shripad Hostel. The security and cleanliness are impressive.",
                },
                {
                  name: "Mike Johnson",
                  role: "Student",
                  comment:
                    "The events and community at Shripad Hostel have made my university experience unforgettable. I've made friends for life here!",
                },
              ].map((review, index) => (
                <div key={index} className="bg-muted p-6 rounded-lg shadow-md">
                  <p className="text-muted-foreground mb-4">"{review.comment}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact & Enquiry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p>location</p>
                <p>Phone: +03809328490</p>
                <p>Email: info@shripadhostel.com</p>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Enquiry</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Shripad Hostel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

