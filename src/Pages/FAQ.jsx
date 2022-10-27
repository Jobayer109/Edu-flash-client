import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 h-screen">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer text-xl font-mono">
                Who is this course for?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Who wants to become a web developer. For those who want to learn web development
                  from scratch and then get a job in a software company as a web developer. For
                  those who don't know much about programming or web development. Even those who
                  have studied CSE for four years and could not decide what to do, did not learn
                  much, they can learn complete web development from this course and apply for jobs.
                  😀
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-mono">
                Do I need to have previous experience before doing this course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Since we are teaching from scratch. So you don't need to know anything beforehand.
                  But if you have time, you can do these three things. 1. You need to keep some
                  brain space to get the things in your head after watching the video. 2. Just
                  joining the course will not make you an auto web developer. Must have a
                  hard-working, stick-to-it mentality. 3. If you get stuck somewhere, you have to
                  have the mentality of asking for help and the will to stick around.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-mono">
                How can we get the videos of this course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Course videos will be pre-recorded. You open an account and enroll in this course.
                  Videos will be given one module per day from the start of the course. Each module
                  usually has 10 to 12 videos. You have to finish watching these videos within the
                  day they are released. Therefore, dedicated time should be kept daily for the
                  course. And during that time, you can watch the video lying down, standing,
                  leaning, swinging your legs, dancing, or even hiding under the bed.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-mono">
                How long will it take to complete this course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  If you watch videos for 1 to 1.5 hours every day, along with extra 4 to 6 hours of
                  practice, it will take you about 5 months. However, sometimes extra time should be
                  reserved for homework and take away projects. Must bring hard work mentality.
                  There are no cheats or shortcuts.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-mono">
                What things do I need?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  First, it takes dedicated time. Mast 6-8 hours per day. 8-10 hours if possible (If
                  you can't give time. If you don't want to do hard work, there will be no benefit
                  in enrolling in the course.) Secondly you will need a laptop or a computer (where
                  software like node, Visual Studio Code can be installed) and thirdly you will need
                  minimum 2 - 10 Mbps internet. Broadband is preferred so that the course videos can
                  be viewed well. To become a professional web developer, minimum 4 months of
                  serious hard work should be kept in mind.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
