import exPdf from '@/app/images/exPdf.png'
import exChat from '@/app/images/exChat.png'
import ssfilottest from '@/app/images/flottest.png'
import Image from 'next/image'

export default function Scope(){
  return (
    <div>
      <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-white" id="scope">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py6 md:py-6">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center">
            <h3 className="text-3xl font-bold text-slate-800 md:text-4xl mt-20">
              Tips Menggunakan Filot
            </h3>
          </div>
          {/* Grid */}
          <div className="bg-gray-900 grid overflow-hidden lg:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10 rounded-2xl">
            <article>
            <div className="flexCenter max-container relative w-full">
                <Image 
                  src={exPdf}
                  alt="ss"
                  width={800}
                  height={350}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-white mt-4">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>File PDF berformat satu kolom</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Gunakan artikel, jurnal atau file lainnya dengan PDF berformat satu kolom untuk hasil lebih akurat.
              </p>
            </article>
            <article>
              <div className="flexCenter max-container relative w-full">
                <Image 
                  src={exChat}
                  alt="ss"
                  width={800}
                  height={350}
                  className="w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-white mt-4">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Berikan prompt yang spesifik</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                berikan pertanyaan atau perintah secara spesifik untuk hasil yang lebih baik
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}