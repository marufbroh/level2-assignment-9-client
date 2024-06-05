import Image from 'next/image';
import React from 'react';

const Review = () => {
    return (
        <section data-aos="slide-up my-5 my-4">
            <h1 className='text-4xl container mx-auto rounded-lg text-white  text-center py-9 font-bold bg-gradient-to-r from-red-300 via-red-400 to-red-500'>What Our Customar Say</h1>
            <div className="grid mb-8 border container mx-auto border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Great Experience with Pet-Harmony</h3>
                        <p className="my-5">I recently adopted a pet from Pet-Harmony, and I'm thrilled with the experience. The website was easy to use, and the adoption process was clear and straightforward.

                            The team at Pet-Harmony was very supportive and answered all my questions. It's clear they care a lot about their animals.

                            When I brought my new pet home, they were happy and well-cared-for. Pet-Harmony truly made sure I found the perfect pet.

                            I highly recommend Pet-Harmony to anyone looking to adopt a pet. My new furry friend has brought so much joy into my life, and I have Pet-Harmony to thank for that.

                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <Image width={36} height={36} className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Students of Oxford</div>
                        </div>
                    </figcaption>
                </figure>



                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Wonderful Experience with Pet-Harmony</h3>
                        <p className="my-4">Adopting from Pet-Harmony was a breeze. Their website was easy to navigate, and the staff was incredibly helpful. My new pet is healthy and happy, and the entire process was smooth. Highly recommend Pet-Harmony for pet adoption!</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <Image width={36} height={36} className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Roberta Casas</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Amazing Service from Pet-Harmony</h3>
                        <p className="my-4">Pet-Harmony exceeded my expectations. The website was user-friendly, and the staff was knowledgeable and kind. My pet is happy and healthy, and the adoption process was smooth. Pet-Harmony is a fantastic choice for pet adoption!</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <Image width={36} height={36} className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Web It</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Pet-Harmony is Fantastic</h3>
                        <p className="my-4">I had a great experience with Pet-Harmony. The adoption process was simple, and the staff was very supportive. My new pet is wonderful and well-cared-for. Pet-Harmony really cares about their animals and it shows. Highly recommend!</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <Image width={36} height={36} className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Joseph McFall</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">CTO at JObs BD</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Review;