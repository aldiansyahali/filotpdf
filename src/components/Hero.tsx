import Image from "next/image";
import PageIllustration from "./page-illustration";
import filottest from "@/public/images/flottest.png";
import { LogIn } from "lucide-react";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Mengubah Cara Anda Berinteraksi dengan <span className="text-blue-600">PDF</span> <br className="max-lg:hidden" />
              
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Selamat datang di Filot, platform inovatif untuk berinteraksi dengan file PDF. Unggah file PDF Anda dan ajukan pertanyaan – biarkan Filot mengubah cara Anda mengelola dokumen. Dengan teknologi canggih kami, dapatkan jawaban cepat dan akurat langsung dari isi PDF tanpa repot. Nikmati pengalaman baru dalam berkomunikasi dengan dokumen digital Anda, hanya di Filot!
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Ayo mulai <LogIn className="w-4 h-4 ml-2"/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="flexCenter max-container relative w-full">
                <Image 
                  src={filottest}
                  alt="boat"
                  width={800}
                  height={350}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}