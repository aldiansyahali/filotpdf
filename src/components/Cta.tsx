import Image from "next/image";
import logoPnj from "@/app/images/logoPnj.jpg";
import temanPrestasi from "@/app/images/temanPrestasi.jpg";

export default function Cta() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 space-y-3 text-center" id="supportBy">
      <div className="mx-auto max-w-sm px-4 sm:px-6">
      <p className="text-gray-700">Didukung oleh</p>
        <div className="grid overflow-hidden lg:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-150 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-150 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
          <article>
              <div className="flexCenter max-container relative w-full">
                <Image 
                  src={logoPnj}
                  alt="ss"
                  width={400}
                  height={400}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
          </article>
          <article>
              <div className="flexCenter max-container relative w-full">
                <Image 
                  src={temanPrestasi}
                  alt="ss"
                  width={400}
                  height={400}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
          </article>
        </div>
      </div>
    </section>
  );
}
