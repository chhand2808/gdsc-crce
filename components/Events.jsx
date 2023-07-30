"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Img1 from "../public/assets/Events/ideation.jpg"
import Img2 from "../public/assets/Events/HackOver3.0.jpg"
import Img3 from "../public/assets/Events/mathday.jpeg"
import Img4 from "../public/assets/Events/webdev.png"
import Img5 from "../public/assets/Events/seo.png"
import Img6 from "../public/assets/Events/Bit-N-Build.jpg"


const Events = () => {
    const eventsData = [
        {
            imgSrc: Img6,
            title: 'Bit n Built',
            subtitle: 'Offline Hackathon - Domains: Web/App Dev, AI/ML , Blockchain & Open Innovation',
            date: '28th January, 2023',
            link: 'https://bitnbuild.netlify.app/',
          },
        {
          imgSrc: Img5,
          title: 'Tech Talk',
          subtitle: 'Getting Started With Elastic Stack for SEO',
          speaker: 'Ashish Tiwari',
          date: '11th January, 2023',
          link: 'https://gdsc.community.dev/e/mg96jj/',
        },
        {
          imgSrc: Img4,
          title: 'Web Development Workshop',
          subtitle: 'Hands On Workshop on HTML5, CSS3, JavaScript',
          speaker: 'Candida Noronha',
          date: '7th January, 2023',
          link: 'https://gdsc.community.dev/e/mgbsdq/',
        },
        {
          imgSrc: Img3,
          title: 'National Mathematics Day',
          subtitle: 'Contests: Just ∫du it & Creat-e-matics',
          date: '22nd December, 2022',
          link: 'https://gdsc.community.dev/e/mbucfv/',
        },
        {
          imgSrc: Img2,
          title: 'HackOver 3.0',
          subtitle: 'Virtual Hackathon - Domains: Web/App Dev, Blockchain & Game Dev',
          date: '4th & 5th October, 2022',
          link: 'https://hackover.netlify.app/',
        },
        {
          imgSrc: Img1,
          title: 'Tech Talk',
          subtitle: 'Workshop on Problem Solving & Ideation',
          speaker: 'Princeton Baretto',
          date: '30th August, 2022',
          link: 'https://gdsc.community.dev/e/m89s4t/',
        }, 
      ]

  return (
    <motion.section id="services" className="bg-slate-100 py-16">
      <div className="flex-1 justify-center items-center" >
        <div className="text-center w-full">
          <h3 className=' text-gray-700 font-semibold text-5xl mb-6 py-3'>Events</h3>
          <p className="mx-2 text-gray-600 font-semibold text-center justify-center items-center lg:mx-auto max-w-full mb-4 lg:max-w-xl">
            We conduct regular events including tech talks and workshops to make students familiar with the latest tech advancements and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 justify-items-center mt-10 mx-auto lg:max-w-5xl ">
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              className="box card max-w-md rounded-lg shadow-lg flex items-center justify-center ml-2 cursor-pointer bg-white"
              animate={{ scale: 1.1 }}
              transition={{ duration: 2, delay: index * 0.1, type: "spring", damping: 2 }}
              whileHover={{ y: -10 }}
            >
              <div className="left">
                <div className="h-[100px] w-[100px] lg:w-[160px] lg:h-[160px] rounded-lg ">
                  <Image
                    src={event.imgSrc}
                    alt={event.title}
                    className=" ml-2 lg:ml-0  h-[100px] w-[100px] lg:w-[160px] lg:h-[160px] rounded-lg"
                    quality={100}
                    width={500}
                    height={500}
                    object-fit='cover'
                    
                  />
                </div>
              </div>
              <div className="right ml-4">
                <a href={event.link} style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
                  <h4 className="title font-bold text-xl text-gray-700">{event.title}</h4>
                  <p className="description font-medium"><b>{event.subtitle}</b></p>
                  {event.speaker && <p className="description font-semibold"><b>Speaker: </b>{event.speaker}</p>}
                  <p className="description"><b>Date: </b>{event.date}</p>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Events