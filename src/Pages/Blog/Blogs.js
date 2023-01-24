import React from 'react';
import DynamicTitle from '../../Hooks/DynamicTitle';

const Blogs = () => {

    DynamicTitle("Blogs");

    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="##">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://cdn2.outdoorphotographer.com/2023/01/Icy-Tree-By-natrpixdvm.jpeg" />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-white" href="##">
                                    Photo By Natrpixdvm
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/2023
                            </p>
                        </header>
                        <p className='px-4'>Today’s Photo of the Day is “Icy Tree” by natrpixdvm. Location: Guadalupe Mountains National Park, Texas.

                            Want to get your images in the running for a Photo of the Day feature? Photo of the Day is chosen from various galleries, including Assignments, Galleries and Contests. Assignments have weekly winners that are featured on the website homepage, Facebook, Twitter and Instagram. To get your photos in the running, all you have to do is submit them.</p>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-white" href="##">
                                <img alt="Placeholder" className="block rounded-full w-14 h-14" src="https://i.ibb.co/yP99HxM/01788362766-removebg-preview.png" />
                                <p className="ml-2 text-sm">
                                    Antu Das
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="##">
                                <span className="hidden" >Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="##">
                            <img alt="Placeholder" className="block h-auto w-full" src="https://cdn2.outdoorphotographer.com/2023/01/American-Robin-in-a-Flurry-%E2%80%98Waiting-on-Spring-By-Sandra-Rust.jpg" />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-white" href="##">
                                    Nature Photography
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                17/1/2023
                            </p>
                        </header>
                        <p className='px-4'>Today’s Photo of the Day is “American Robin in a Flurry ‘Waiting on Spring’.” Location: Joliet, Illinois.

                            Want to get your images in the running for a Photo of the Day feature? Photo of the Day is chosen from various galleries, including Assignments, Galleries and Contests. Assignments have weekly winners that are featured on the website homepage, Facebook, Twitter and Instagram. To get your photos in the running, all you have to do is submit them..</p>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-white" href="##">
                                <img alt="Placeholder" className="block rounded-full w-14 h-14" src="https://i.ibb.co/yP99HxM/01788362766-removebg-preview.png" />
                                <p className="ml-2 text-sm">
                                    Antu Das
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="##">
                                <span className="hidden" >Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>

                </div>
            </div>
        </div>
    )
};

export default Blogs;
