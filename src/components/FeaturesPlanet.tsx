import Image from "next/image";
import ssUpload from "@/app/images/ssUpload.png";
import ssLogin from "@/app/images/ssLogin.png";
import ssfilottest from "@/app/images/ssflottest.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900" id="howTo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center">
            <h3 className="text-3xl font-bold text-gray-200 md:text-4xl mt-20">
              Filot membantu Anda dengan cara yang mudah
            </h3>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
            <div className="flexCenter max-container relative w-full">
                <Image 
                  src={ssLogin}
                  alt="ss"
                  width={800}
                  height={350}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 mt-4">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Login dengan mudah</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Collect essential insights about how visitors are using your
                site with in-depth page view metrics like pages, referring
                sites, and more.
              </p>
            </article>
            <article>
              <div className="flexCenter max-container relative w-full">
                <Image 
                  src={ssUpload}
                  alt="ss"
                  width={800}
                  height={350}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 mt-4">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Metadata</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Collect essential insights about how visitors are using your
                site with in-depth page view metrics like pages, referring
                sites, and more.
              </p>
            </article>
            <article>
              <div className="flexCenter max-container relative w-full">
                <Image 
                  src={ssfilottest}
                  alt="ss"
                  width={800}
                  height={350}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 mt-4">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>SEO &amp; Performance</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Collect essential insights about how visitors are using your
                site with in-depth page view metrics like pages, referring
                sites, and more.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
