import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import {LogIn} from "lucide-react"
import FileUpload from "@/components/FileUpload";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import Hero from "@/components/Hero";
import BusinessCategories from "@/components/BusinessCategories";
import FeaturesPlanet from "@/components/FeaturesPlanet";
import LargeTestimonial from "@/components/LargeTestimonial";
import Cta from "@/components/Cta";
import Header from "@/components/ui/header";
import PageIllustration from "@/components/page-illustration";
import filottest from "@/app/images/flottest.png"
import Scope from "@/components/Scope";

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId;
  let firstchat;
  if (userId) {
    firstchat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstchat){
      firstchat = firstchat[0];
    }
  }
  return (
    <div>
      {!isAuth && ( 
        <Header />           
      )}
    <section>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 md:pb-20 md:pt-32">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
            >
              Mengubah Cara Anda Berinteraksi dengan <span className="text-blue-600">PDF  </span><UserButton afterSignOutUrl="/"/>
            </h1>
            
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                Selamat datang di Filot, platform inovatif untuk berinteraksi dengan file PDF. Unggah file PDF Anda dan ajukan pertanyaan. Nikmati pengalaman baru dalam berkomunikasi dengan dokumen digital Anda, hanya di Filot!
              </p>           

                    <div className="w-full mt-4">
                      {isAuth && firstchat && ( 
                        <>
                        <Link href={`/chat/${firstchat.id}`}>
                        <Button>Go to chats</Button>
                        </Link>
                        </>
                      )}
                    </div>
                    <div className="w-full mt-4">
                      {
                        isAuth ? (<FileUpload />):(
                          <Link href='/sign-in'>
                            <Button className="bg-blue-600 hover:bg-blue-500">Login to get started
                              <LogIn className="w-4 h-4 ml-2"/>
                            </Button>
                          </Link>
                        )
                      }
                    </div>
            </div>
          </div>
          {!isAuth && (
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
          )}
        </div>
      </div>
    </section>
    {!isAuth && (
      <div>
        <BusinessCategories />
        <FeaturesPlanet />
        <Scope />
        <LargeTestimonial />
        <Cta />
      </div>
    )}
    </div>
  );
}
