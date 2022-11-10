import React from 'react';
import DynamicTitle from '../../../Hooks/DynamicTitle';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const AddService = () => {

    DynamicTitle('AddService');


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.service_name.value;
        const image = form.image.value;
        const details = form.details.value;
        const silver = form.silver_price.value;
        const gold = form.gold_price.value;
        const platinum = form.platinum_price.value;

        console.log(`${name}, ${image}, ${details}, ${silver}, ${gold}, ${platinum}`);

        const service = {
            service_name: name,
            image_url : image,
            details : details,
            packages : {
                silver : {
                    price : `$${silver}`
                },
                gold : {
                    price : `$${gold}`
                },
                platinum : {
                    price : `$${platinum}`
                }

            }


        };

        if (details.length < 200) {
            toast('Please give a reasonable comment Please...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            fetch(`https://lens-king-server.vercel.app/services`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        form.reset();
                        toast('Your service is successfully added...Thank you.', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
                .catch(err => console.log(err.message));
        }

    }

    // {
    //     "service_id": "6",
    //     "service_name": "Videography",
    //     "image_url": "https://wiso.foxthemes.me/wp-content/uploads/2018/04/christian-sterk-174005.jpg",
    //     "details": "Videography is the process of capturing moving images on electronic media (e.g., videotape, direct to disk recording, or solid state storage) and even streaming media. The term includes methods of video production and post-production.Videography is used to create video content, and use audio equipment and video cameras to sound and capture moving scenes and document events. Photography creates visual content by capturing images of landscapes, events, and people.",
    //     "packages" : {
    //         "silver": {
    //             "price": "$1400"
    //         },
    //         "gold": {
    //             "price" : "$200"
    //         },
    //         "platinum" : {
    //             "price" : "$280"
    //         }
    //     }
    // }

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl text-cyan-500 font-bold'>Add Service</h1>
            </div>

            <div className="">
                <div className="">
                    <div className="card shadow-2xl w-full bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input name='service_name' type="text" placeholder="Service Name" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input name='image' type="text" placeholder="Image Url" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <textarea name='details' className="textarea textarea-info" placeholder="Details" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Silver Package Price</span>
                                </label>
                                <input name='silver_price' type="number" placeholder="Price" className="input input-bordered"  required/>
                            </div>  
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gold Package Price</span>
                                </label>
                                <input name='gold_price' type="number" placeholder="Price" className="input input-bordered"  required/>
                            </div>  
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Platinum Package Price</span>
                                </label>
                                <input name='platinum_price' type="number" placeholder="Price" className="input input-bordered"  required/>
                            </div>                            
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddService;