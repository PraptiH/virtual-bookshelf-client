import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import Books from '../BookShelf/Books';


const Home = () => {

    const Slider = () => {
        return (

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={50}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                navigation={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        coverflowEffect: {
                            depth: 150,
                            modifier: 1.5,
                        }
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        coverflowEffect: {
                            depth: 150,
                            modifier: 2,
                        }
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        coverflowEffect: {
                            depth: 150,
                            modifier: 2.5,
                        }
                    }
                }}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                className="mySwiper w-full max-w-7xl mx-auto"
            >
                <SwiperSlide>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img className='transition-all duration-300 opacity-60 w-full h-full object-cover' src="https://i.pinimg.com/236x/e5/24/d1/e524d1d14252daa2b81366a854a3f642.jpg" alt="Book" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="text-black-50 text-lg sm:text-xl lg:text-2xl font-bold mb-1">Find your next favorite read.</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img className='transition-all duration-300 opacity-60 w-full h-full object-cover' src="https://i.pinimg.com/736x/e8/68/b6/e868b678e3c7e0e0387323849a0eb5d7.jpg" alt="Book" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="text-black-50 text-lg sm:text-xl lg:text-2xl font-bold mb-1">Empowering minds through learning</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img className='transition-all duration-300 opacity-60 w-full h-full object-cover' src="https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2467818435.jpg" alt="Book" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="text-black-50 text-lg sm:text-xl lg:text-2xl font-bold mb-1">Every book is a journey waiting to begin.</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img className='transition-all duration-300 opacity-60 w-full h-full object-cover' src="https://images.unsplash.com/photo-1502979932800-33d311b7ce56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="Book" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="text-black-50 text-lg sm:text-xl lg:text-2xl font-bold mb-1">Your calm corner for learning and reflection.</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img className='transition-all duration-300 opacity-60 w-full h-full object-cover' src="https://wallpapers.com/images/hd/aesthetic-books-pictures-1080-x-1080-yuogc1h34necurfp.jpg" alt="Book" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="text-black-50 text-lg sm:text-xl lg:text-2xl font-bold mb-1">Today a reader, tomorrow a leader</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img className='transition-all duration-300 opacity-60 w-full h-full object-cover' src="https://media.istockphoto.com/id/155389199/photo/an-open-book-with-a-leather-bookmark.jpg?s=612x612&w=0&k=20&c=d9SB6nt99eUIU0jqY1e0ykpfewZc8nA4345E7US3Axg=" alt="Book" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                            <h3 className="text-black-50 text-lg sm:text-xl lg:text-2xl font-bold mb-1">A reader lives a thousand lives before he dies</h3>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        )
    }

    const [books, setBooks] =useState([])
    useEffect (()=>{
        fetch(`http://localhost:3000/books`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBooks(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div className=" py-8 px-4 sm:px-6 lg:px-8">

            {/* slider */}
            <div className="w-full mx-auto">
                <Slider />
            </div>

            {/* Popular  */}
            <h1 className='font-bold text-4xl text-center mt-10'>Popular Books</h1> 
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-5'>
                {
                    books.filter(book=>book.upvote>0)
                    .sort((a,b)=>b.upvote - a.upvote)
                    .slice(0,6)
                    .map(book=><Books key={book._id} book={book}></Books>)
                }
            </div>

        </div>
    );
};

export default Home;

