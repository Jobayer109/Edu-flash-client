import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-3xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
      <ul className="space-y-12">
        <li className="flex items-center space-x-3 shadow-lg rounded-xl p-4">
          <p className="font-bold bg-gray-500 rounded-full text-white mt-10 p-2">Q.1</p>
          <div className="flex-1">
            <div className="flex">
              <p className="inline-flex mx-auto px-6 py-1 my-1 text-sm">
                <span className="font-bold text-xl ">What is cors ? </span>
              </p>
            </div>
            <div className=" bg-gradient-to-r from-gray-200 to-white rounded-l-full p-10">
              <p className="text-justify text-lg">
                Cross-origin resource sharing is a mechanism that allows restricted resources on a
                web page to be requested from another domain outside the domain from which the first
                resource was served. A web page may freely embed cross-origin images, stylesheets,
                scripts, iframes, and videos.
              </p>
            </div>
          </div>
        </li>
        <li className="flex items-center space-x-3 shadow-lg rounded-xl p-4">
          <p className="font-bold bg-gray-500 rounded-full text-white mt-10 p-2">Q.2</p>
          <div className="flex-1">
            <div className="flex">
              <p className="inline-flex mx-auto px-6 py-1 my-1 text-sm">
                <span className="font-bold text-xl ">
                  Why are you using firebase? What other options do you have to implement
                  authentication?
                </span>
              </p>
            </div>
            <div className=" bg-gradient-to-r from-gray-200 to-white rounded-l-full p-10">
              <p className="text-justify text-lg">
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made
                UI libraries to authenticate users to your app. It supports authentication using
                passwords, phone numbers, popular federated identity providers like Google, Facebook
                and Twitter, and more.
              </p>
            </div>
          </div>
        </li>
        <li className="flex items-center space-x-3 shadow-lg rounded-xl p-4">
          <p className="font-bold bg-gray-500 rounded-full text-white mt-10 p-2">Q.3</p>
          <div className="flex-1">
            <div className="flex">
              <p className="inline-flex mx-auto px-6 py-1 my-1 text-sm">
                <span className="font-bold text-xl ">How does the private route work?</span>
              </p>
            </div>
            <div className=" bg-gradient-to-r from-gray-200 to-white rounded-l-full p-10">
              <p className="text-justify text-lg">
                The private route component is similar to the public route, the only change is that
                redirect URL and authenticate condition. If the user is not authenticated he will be
                redirected to the login page and the user can only access the authenticated routes
                If he is authenticated.
              </p>
            </div>
          </div>
        </li>
        <li className="flex items-center space-x-3 shadow-lg rounded-xl p-4">
          <p className="font-bold bg-gray-500 rounded-full text-white mt-10 p-2">Q.4</p>
          <div className="flex-1">
            <div className="flex">
              <p className="inline-flex mx-auto px-6 py-1 my-1 text-sm">
                <span className="font-bold text-xl ">What is Node? How does Node work?</span>
              </p>
            </div>
            <div className=" bg-gradient-to-r from-gray-200 to-white rounded-l-full p-10">
              <p className="text-justify text-lg">
                Node js is an open-source, cross-platform. It is a used as backend service where
                javascript works on the server-side of the application. This way javascript is used
                on both frontend and backend. Node. js runs on chrome v8 engine which converts
                javascript code into machine code, it is highly scalable, lightweight, fast, and
                data-intensive.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
