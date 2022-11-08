import React from 'react';
import DynamicTitle from '../../Hooks/DynamicTitle';

const Blogs = () => {

    DynamicTitle("Blogs");

    return (
        <div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>
                        <img src="https://social.technet.microsoft.com/wiki/cfs-filesystemfile.ashx/__key/communityserver-wikis-components-files/00-00-00-00-05/6433.sql-vs-nosql.jpg" alt="" />
                    </p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. <br />
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>
                        <img src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-4-1024x576.jpg" alt="" />
                    </p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    <img className='my-6' src="https://i.stack.imgur.com/awRTq.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
