/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Nimara from "@/assets/nimara.png";
import Arrow from "@/assets/arrow-down.svg"
import Algolia from "@/assets/tech/algolia.svg"
import Discord from "@/assets/tech/discord.svg"
import Github from "@/assets/tech/github.svg"
import Next from "@/assets/tech/next.svg"
import Saleor from "@/assets/tech/saleor.svg"
import Shadcn from "@/assets/tech/shadcn.svg"
import Stripe from "@/assets/tech/stripe.svg"
import Tailwind from "@/assets/tech/tailwind.svg"
import Vercel from "@/assets/tech/vercel.svg"
import NimaraFull from "@/assets/tech/nimara.svg"
import SaleorFull from "@/assets/tech/saleor-full.svg"
import StripeFull from "@/assets/tech/stripe-full.svg"
import VercelFull from "@/assets/tech/vercel-full.svg"

import Mocks from "@/assets/mocks.png"

import SpeedTamplete from "@/assets/speed-tamplate.png"
import VendorTemplate from "@/assets/vendor-tamplate.png"
import CustomisationTemplate from "@/assets/customize-template.png"
import IntegrationTemplate from "@/assets/integration-template.png"

import React from 'react'
import Image from "next/image"

export default async function Home() {




  return (
    <div className="bg-[#F5F5F4] relative font-aspekta ">
      <main className="container mx-auto px-6 relative">
        <div className="absolute top-[3757.5px] left-[calc(50%_-_725.77px)] [background:radial-gradient(50%_50%_at_50%_50%,_#eae7df_19%,_rgba(255,_255,_255,_0))] w-full h-[1577.8px]" />
        <div className="absolute top-[-19.5px] left-[-11.53px] [background:radial-gradient(50%_50%_at_50%_50%,_#eae7df_22.5%,_rgba(255,_255,_255,_0))] w-full h-[1577.8px]" />

        <span className="left-0 top-0 -bottom-96 absolute w-6 h-full lg:border-x-[1px] border-r-[1px] border-stone-700/30" />
        <span className="hidden lg:block lg:left-[calc(25%-0.375rem)] top-0 bottom-0 absolute w-6 h-full border-x-[1px] border-stone-700/30" />

        <span className="lg:left-[calc(50%-0.75rem)] left-[50%] top-0 bottom-0 absolute lg:w-6 h-full lg:border-x-[1px] border-l-[1px] border-stone-700/30" />

        <span className="hidden lg:block lg:right-[calc(25%-0.375rem)] top-0 bottom-0 absolute w-6 h-full border-x-[1px] border-stone-700/30" />
        <span className="right-0 top-0 bottom-0 absolute w-6 h-full lg:border-x-[1px] border-l-[1px] border-stone-700/30" />





        <div className="flex flex-col md:gap-24 gap-12 pb-20">
          <section className="z-10 relative">
            <div className="h-dvh flex flex-col justify-between py-10">
              <div>
                <Logo className="lg:mb-24" />
                <div className="w-1/2 md:w-1/5 h-[0px] border-t-[3px] border-black my-6 lg:my-12" />
                <div className="flex justify-between">
                  <h1 className="md:w-4/5 md:leading-[70px] md:text-5xl text-2xl z-10">
                    /*Build a Fully Customised <br />
                    E-Commerce Storefront Faster Than Ever with 100% Code Ownership*/
                  </h1>
                  <Image priority className="absolute top-[22%] -right-1/4 lg:top-[15%] lg:-right-0 origin-top-right -z-10" src={Nimara.src} alt="Nimara logo" width={600} height={600} placeholder="blur" blurDataURL={Nimara.blurDataURL} />
                </div>
              </div>
              <div className="flex justify-end md:justify-between items-center flex-wrap md:flex-nowrap gap-4">
                <Link href="https://mirumee.com/contact?utm_campaign=page&utm_medium=internal_link&utm_source=nimara_landing_page_cta_demo_top" target="_blank" rel="nofollow" aria-label="Go to mirumee" className="btn btn-neutral text-base font-normal bg-black md:w-[calc(25%-1.125rem)] w-full min-w-fit">
                  Book Your Personalized Demo
                  <Arrow />
                </Link>
                <div className="md:hidden w-full h-[0px] border-t-[3px] border-black" />
                <div className="flex flex-col items-end gap-3 text-right w-full">
                  <span>Powered by cutting-edge technology and world-class partners:</span>
                  <div className="flex w-full max-w-sm justify-between items-center">
                    <Link href="https://nextjs.org/" target="_blank" rel="nofollow" aria-label="Go to nextjs">
                      <Next />
                    </Link>
                    <Link href="https://ui.shadcn.com/" target="_blank" rel="nofollow" aria-label="Go to shadcn">
                      <Shadcn />
                    </Link>
                    <Link href="https://tailwindcss.com/" target="_blank" rel="nofollow" aria-label="Go to tailwindcss">
                      <Tailwind />
                    </Link>
                    <Link href="https://www.algolia.com/" target="_blank" rel="nofollow" aria-label="Go to algolia">
                      <Algolia
                      />
                    </Link>
                    <Link href="https://saleor.io" target="_blank" rel="nofollow" aria-label="Go to saleor">
                      <Saleor />
                    </Link>
                    <Link href="https://stripe.com" target="_blank" rel="nofollow" aria-label="Go to stripe">
                      <Stripe />
                    </Link>
                    <Link href="https://vercel.com" target="_blank" rel="nofollow" aria-label="Go to vercel">
                      <Vercel />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="w-1/2 lg:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-col gap-12 lg:w-1/2">
                <h2 className="text-2xl">OWN YOUR STOREFRONT EXPERIENCE WITH NIMARA</h2>
                <div className="flex flex-col gap-8 lg:w-2/3">
                  <h3 className="text-2xl">Nimara Storefront is the ultimate headless solution for businessesand developers who demand total freedom and flexibility in their e-commerce setup. </h3>
                  <p>Unlike other solutions, Nimara gives you full ownership of the code, empowering you to customize every aspect of your storefront with no risk of vendor lock-in.</p>
                  <p>Take advantage of ultra-fast deployment, seamless integration with third-party services, and freedom to scale business on your terms, without limits. Nimara empowers you to build, adapt, and grow faster than ever.</p>
                </div>
              </div>
              <div className="relative lg:w-1/2 aspect-[625/435]">
                <Image className="object-contain" fill src={Mocks.src} placeholder="blur" blurDataURL={Mocks.blurDataURL} alt="Example mock-ups" />
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="w-1/2 lg:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
            <div className="flex flex-col gap-20">
              <h2 className="text-2xl lg:w-2/5">BUILD THE STOREFRONT YOU NEED, THE WAY YOU WANT IT, AND GET IT LIVE RIGHT AWAY</h2>
              <div className="flex flex-col gap-8 justify-end">

                <div className="flex w-full flex-col-reverse lg:flex-row gap-8">
                  <div className="lg:w-1/2 m-auto">
                    <div className="lg:w-2/3 mx-auto">
                      <h3 className="text-2xl">Speed-up Launch by 150%</h3>
                      <div className="w-1/2 lg:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
                      <p>Don&apos;t start from scratch—with Nimara, you get a fully functional shop out of the box. Thanks to pre-built components and ready-to-use modules, you can optimize the development process and launch your e-commerce storefront in a fraction of the time it typically takes.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="lg:mr-auto lg:ml-0  mx-auto relative aspect-[473/396] w-3/4">
                      <Image className="object-contain" fill src={SpeedTamplete.src} alt="1" placeholder="blur" blurDataURL={SpeedTamplete.blurDataURL} />
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col-reverse lg:flex-row gap-8">
                  <div className="lg:w-1/2 m-auto">
                    <div className="lg:w-2/3 mx-auto">
                      <h3 className="text-2xl">Break Free from  Vendor Lock-In</h3>
                      <div className="w-1/2 lg:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
                      <p>Free yourself from the risk of hidden costs and vendor lock-in, and take complete control of your storefront experience. Nimara is, and always will be, open source, giving you full ownership of your code and independence from external vendors.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="lg:ml-auto lg:mr-0  mx-auto relative aspect-[473/396] w-3/4">
                      <Image className="object-contain" fill src={VendorTemplate.src} alt="1" placeholder="blur" blurDataURL={VendorTemplate.blurDataURL} />
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col-reverse lg:flex-row gap-8">
                  <div className="lg:w-1/2 m-auto">
                    <div className="lg:w-2/3 mx-auto">
                      <h3 className="text-2xl">Customize  without Limits</h3>
                      <div className="w-1/2 lg:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
                      <p>Nimara gives you the tools to customize every aspect of your e-commerce storefront. With a pre-configured &apos;shadcn/ui&apos; design system, you can quickly modify designs, features, and user experience, maintaining consistency across your platform.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="lg:mr-auto lg:ml-0  mx-auto relative aspect-[473/396] w-3/4">
                      <Image className="object-contain" fill src={CustomisationTemplate.src} alt="1" placeholder="blur" blurDataURL={CustomisationTemplate.blurDataURL} />
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col-reverse lg:flex-row gap-8">
                  <div className="lg:w-1/2 m-auto">
                    <div className="lg:w-2/3 mx-auto">
                      <h3 className="text-2xl">Integrate New Services with Ease</h3>
                      <div className="w-1/2 lg:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
                      <p>Nimara empowers you to seamlessly switch between payment providers, search services, analytics tools, and more. Isolation of connectors allows you to stay agile and adapt your storefront as your business evolves - all while retaining 100% control over the total cost of ownership (TCO).</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="lg:ml-auto lg:mr-0 mx-auto relative aspect-[473/396] w-3/4">
                      <Image className="object-contain" fill src={IntegrationTemplate.src} alt="1" placeholder="blur" blurDataURL={IntegrationTemplate.blurDataURL} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="bg-black flex justify-center md:justify-end items-center md:h-40 lg:p-24 p-10 relative rounded-lg md:rounded-none">
            <Image className="hidden md:block absolute left-20 -top-10 origin-top-right" src={Nimara.src} alt="1" width={170} height={170} placeholder="blur" blurDataURL={Nimara.blurDataURL} />
            <Link className="text-white flex items-center underline md:text-3xl text-2xl" href="https://www.demo.nimara.store/" aria-label="Go to demo">
              Try Live Demo
              <Arrow className="ml-2" />
            </Link>

          </section>

          <section className="relative">
            <div className="w-1/2 md:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
            <div className="flex flex-col gap-10">
              <h2 className="text-2xl md:w-7/12">NIMARA STOREFRONT IS A DEVELOPER-FRIENDLY AND BUSINESS-SAVVY SOLUTION, WHICH MAKES IT A PERFECT FIT FOR ALL KINDS OF E-COMMERCE PLAYERS</h2>
              <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid auto-rows-fr gap-6 mb-6">
                <div className="flex flex-col gap-8 bg-white rounded-[3px] shadow p-4 pr-10 pb-10">
                  <h3 className="text-2xl">B2B & B2C E-Commerce Businesses</h3>
                  <p>Companies looking for a flexible, customizable storefront without the risk of vendor lock-in.</p>
                </div>
                <div className="flex flex-col gap-8 bg-white rounded-[3px] shadow p-4 pr-10 pb-10">
                  <h3 className="text-2xl">Cross-Border Retailers</h3>
                  <p>Companies requiring the flexibility to manage multiple payment providers, optimize global checkout processes, and adapt quickly to international markets.</p>
                </div>
                <div className="flex flex-col gap-8 bg-white rounded-[3px] shadow p-4 pr-10 pb-10">
                  <h3 className="text-2xl">Enterprises with Complex Processes</h3>
                  <p>Businesses already using e-commerce platforms with multiple integrations who need a tailored solution that fits their specific needs and allows them to scale.</p>
                </div>
                <div className="flex flex-col gap-8 bg-white rounded-[3px] shadow p-4 pr-10 pb-10">
                  <h3 className="text-2xl">Agencies</h3>
                  <p>Professional teams managing multiple clients’ e-commerce projects that need a fast-deployable storefront solution that can be easily tailored for different needs - something we&apos;ve seen firsthand through our experience</p>
                </div>
                <div className="flex flex-col gap-8 bg-white rounded-[3px] shadow p-4 pr-10 pb-10">
                  <h3 className="text-2xl">Developers</h3>
                  <p>Professionals seeking to speed up development time, free themselves from repetitive tasks, and focus more on core business functions.</p>
                </div>
                <div className="flex flex-col gap-8 bg-white rounded-[3px] shadow p-4 pr-10 pb-10">
                  <h3 className="text-2xl">Startups</h3>
                  <p>New businesses that must launch and scale their e-commerce platform quickly while retaining full control over their growth.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="w-1/2 md:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
            <div className="flex md:flex-nowrap flex-wrap justify-between gap-8">
              <div className="md:w-1/2 flex flex-col gap-12">
                <h2 className="text-2xl">NIMARA STOREFRONT IS A DEVELOPER-FIRST SOLUTION, OFFERING OPEN-SOURCE FREEDOM, RAPID DEPLOYMENT, AND TOOLS FOR FAST PROTOTYPING</h2>
                <p className="md:w-3/5">Nimara stands as a flexible starting point that helps developers eliminate repetitive tasks and reduce both design and deployment time by up to four months. You can now skip the boring stuff and focus on building unique and impactful e-commerce features.</p>
              </div>
              <Link href="https://discord.com/invite/w4V3PZxGDj?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_black_box" target="_blank" rel="nofollow" aria-label="Go to discord" className="bg-black w-full rounded-lg xl:w-[calc(25%-1.125rem)] md:w-[calc(50%)] md:rounded-none text-white flex flex-col justify-center items-center gap-8 p-14 text-center">
                <Discord />
                <span className="text-2xl flex flex-col gap-2 items-center underline">
                  Join Discord Community
                  <Arrow />
                </span>
              </Link>
            </div>
          </section>

          <section className="bg-white flex min-h-fit justify-center items-center relative">
            <span className="lg:hidden left-0 top-0 absolute w-[400px] h-full shadow-[-400px_0px_0px_0px_rgba(255,255,255,1)]" />
            <span className="lg:hidden right-0 top-0 absolute w-[400px] h-full shadow-[400px_0px_0px_0px_rgba(255,255,255,1)]" />
            <div className="flex flex-col px-8 p-20 max-w-5xl ">
              <div className="flex flex-col lg:flex-row justify-between items-center ld:justify-center ld:items-center mb-2 gap-6 ld:gap-0">
                <NimaraFull className="self-start -ml-6 lg:-ml-0" />
                <span className="text-2xl">“We developed Nimara so you could focus on what matters <br/> - building the best possible e-commerce experience for your customers.”</span>
              </div>
              <div>
                <p className="text-right mb-1">Michał Ociepka</p>
                <p className="text-right text-xs">COO at Mirumee </p>
              </div>
            </div>
          </section>


          <section className="relative">
            <div className="w-1/2 md:w-1/5 h-[0px] border-t-[3px] border-black my-6" />
            <div className="flex flex-col gap-10">
              <h2 className="text-2xl lg:w-5/12">READY-MADE NIMARA STOREFRONT MODULES YOU GET OUT-OF-THE-BOX</h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 auto-rows-fr gap-6 p-6 lg:p-0">
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">User Account Management</h4>
                  <p className="pr-8">Secure account creation and seamless login</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Multi-Region & Language Support</h4>
                  <p className="pr-8">Customer experiences tailored by region and language</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Search & Filter Capabilities</h4>
                  <p className="pr-8">Advanced search and smart filters options</p>
                </div>
                <Link className="bg-black rounded-lg lg:rounded-none text-white lg:row-span-3 lg:col-span-1 md:col-span-2 row-span-2 -mx-6 lg:mx-0 flex flex-col justify-center items-center gap-4 lg:order-none order-last py-12" href="https://github.com/mirumee/nimara-ecommerce?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page" rel="nofollow" aria-label="Go to discord">
                  <Github />
                  <span className="underline text-2xl">Go to Github</span>
                  <Arrow />
                </Link>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Dynamic Product Management</h4>
                  <p className="pr-8">Rich, customizable and detail product displays</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Intuitive Shopping Cart</h4>
                  <p className="pr-8">Optimized cart functionality to reduce abandonment</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Flexible Voucher System</h4>
                  <p className="pr-8">Versatile discount options to enhance customer loyalty</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Global Checkout</h4>
                  <p className="pr-8">Hassle-free, secure checkout with multiple payment options</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Engaging Homepage Features</h4>
                  <p className="pr-8">Intuitive navigation and captivating product displays</p>
                </div>
                <div className="p-6 border-[3px] border-black flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="font-extrabold">Comprehensive Documentation</h4>
                  <p className="pr-8">Developer-friendly guides for seamless integration and effortless scaling</p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="grid lg:grid-cols-4 grid-cols:1 gap-6">
              <div className="p-1 border-black lg:shadow-[4px_0px_0px_-1px_rgba(0,0,0,1)]">
              <div className="w-1/2 md:w-3/5 border-t-[3px] border-black mb-6" />
                <h2 className="text-2xl w-3/4">BENEFIT FROM INTEGRATIONS WITH WORLD-CLASS  PARTNERS</h2>
              </div>
              <div className="flex flex-col gap-6 lg:border-b-0  border-b-4 border-black p-1 py-4 lg:shadow-[4px_0px_0px_-1px_rgba(0,0,0,1)]">
                <Link className="underline" href="https://saleor.io/?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_integrations" rel="nofollow" aria-label="Go to saleor">Saleor.io</Link>
                <SaleorFull />
                <h3 className="w-3/4 lg:w-11/12">100% native integration with Saleor, plus the flexibility to connect with other leading e-commerce platforms.</h3>
              </div>
              <div className="flex flex-col gap-6 lg:border-b-0 border-b-4 border-black p-1 py-4 lg:shadow-[4px_0px_0px_-1px_rgba(0,0,0,1)]">
                <Link className="underline" href="https://stripe.com/?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_integrations" rel="nofollow" aria-label="Go to stripe">Stripe.com</Link>
                <StripeFull />
                <h3 className="w-3/4 lg:w-11/12">Fast and secure payment processing powered by Stripe Payment Element for smooth checkout experience for your customers.</h3>
              </div>
              <div className="flex flex-col gap-6 border-b-[3px] lg:border-b-0  border-black p-1 py-4">
                <Link className="underline" href="https://vercel.com/?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_integrations" rel="nofollow" aria-label="Go to vercel">Vercel.com</Link>
                <VercelFull />
                <h3 className="w-3/4 lg:w-11/12">Seamless deployment and more personalized web experiences through Vercel’s robust cloud infrastructure and developers&apos; tools.</h3>
              </div>
            </div>
          </section>


          <section className="bg-black relative">
            <span className="lg:hidden left-0 top-0 absolute w-[400px] h-full shadow-[-400px_0px_0px_0px_rgba(0,0,0,1)]" />
            <span className="lg:hidden right-0 top-0 absolute w-[400px] h-full shadow-[400px_0px_0px_0px_rgba(0,0,0,1)]" />
            <div className="flex justify-center items-center text-white w-full min-h-fit py-12">
              <div className="flex flex-col justify-start xl:flex-row gap-8 max-w-6xl w-full lg:justify-between px-8">
                <div className="basis-4/5">
                  <h2 className="text-5xl mb-2 leading-[70px]">Try Nimara Storefront in Action</h2>
                  <p className="text-2xl">Get your personalized demo today and find out what Nimara can do for your e&#x2011;commerce business</p>
                </div>
                <Link className="text-white underline justify-center text-[32px] flex items-center text-nowrap gap-4" href="https://mirumee.com/contact?utm_campaign=page&utm_medium=internal_link&utm_source=nimara_landing_page_cta_demo_bottom" target="_blank" rel="nofollow" aria-label="Go to mirumee contant site">
                  Book a demo
                  <Arrow className="scale-[1.6]" />
                </Link>
              </div>
            </div>
          </section>
        </div>

      </main>

      <div className="lg:bg-white">
        <footer className="container mx-auto px-6 relative pt-12 text-sm">

          <span className="lg:hidden left-0 top-0 -bottom-96 absolute w-6 h-full lg:border-x-[1px] border-r-[1px] border-stone-700/30" />
          <span className="lg:hidden hidden lg:left-[calc(25%-0.375rem)] top-0 bottom-0 absolute w-6 h-full border-x-[1px] border-stone-700/30" />

          <span className="lg:hidden lg:left-[calc(50%-0.75rem)] left-[50%] top-0 bottom-0 absolute lg:w-6 h-full lg:border-x-[1px] border-l-[1px] border-stone-700/30" />

          <span className="lg:hidden hidden lg:right-[calc(25%-0.375rem)] top-0 bottom-0 absolute w-6 h-full border-x-[1px] border-stone-700/30" />
          <span className="lg:hidden right-0 top-0 bottom-0 absolute w-6 h-full lg:border-x-[1px] border-l-[1px] border-stone-700/30" />

          <div className="grid grid-cols-6 gap-y-12 gap-x-12 py-8 mb-16">
            <aside className="flex flex-col col-span-6 lg:col-span-2 gap-4 text-[#78716C]">
              <Logo className="scale-[0.6] origin-top-left ml-2" />
              <h4>NIMARA STOREFRONT.</h4>
              <span className="w-2/3 lg:w-full">
                Powered by Mirumee. Fully Customised E&#x2011;Commerce Storefront Faster Than Ever, with 100% Code Ownership
              </span>
            </aside>
            <nav className="flex flex-col col-span-3 lg:col-span-2 gap-4 pl-4">
              <h6 className="text-[#78716C]">Resources</h6>
              <Link href="https://github.com/mirumee/nimara-ecommerce?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_footer">Github</Link>
              <Link href="https://discord.com/invite/w4V3PZxGDj?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_footer">Discord</Link>
            </nav>
            <nav className="flex flex-col col-span-3 lg:col-span-2 gap-4 pl-4">
              <h6 className="text-[#78716C]">Help</h6>
              <Link href="https://mirumee.com/contact?utm_campaign=page&utm_medium=external_link&utm_source=nimara_landing_page_footer">Contact</Link>
            </nav>
          </div>
          <div className="py-4 xl:-mx-4 2xl:-mx-6 border-stone-700/30 border-t-[2px] text-[#78716C]">
            <span>All rights reserved.. © Mirumee 2024</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
