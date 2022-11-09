import React from 'react';

const Review = () => {


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comments.value;

        console.log(`${name}, ${email}, ${comment}`);

    }

    return (
        <div className='p-6'>
            <h1 className='text-4xl text-start font-semibold my-10'>Please review our service...</h1>


            <div>
                <form onSubmit={handleReview} action="">
                    <div>
                        <label className="label">
                            <span className="label-text">Name (Optional).</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered input-info w-full " />
                    </div>
                    <div className='my-6'>
                        <label className="label">
                            <span className="label-text">Email (Optional).</span>
                        </label>
                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-info w-full" />
                    </div>
                    <div className='my-6'>
                        <label className="label">
                            <span className="label-text">Comments</span>
                        </label>
                        <textarea name='comments' className="textarea textarea-info w-full" placeholder="Comments" required></textarea>
                    </div>
                    <div className='mt-10 text-center'>
                        <button type='submit' className="btn btn-outline btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;