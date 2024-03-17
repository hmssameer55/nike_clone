import Image from "next/image";
import {
      Hero, PopularProducts, CustomerReviews, Quality, Services, SpecialOffers, Subscribe
} from '@/components/home'
import Footer from "@/components/common/footer";

export default function Home() {

      console.log("triggered")

      return (
            <main className="relative">
                  <section className="xl:padding-l wide:padding-r padding-b">
                        <Hero />
                  </section>
                  <section className="padding">
                        <PopularProducts />
                  </section>
                  <section className="padding">
                        <Quality />
                  </section>
                  <section className="padding">
                        <Services/>
                  </section>
                  <section className="padding">
                        <SpecialOffers/>
                  </section>
                  <section className="bg-pale-blue padding">
                        <CustomerReviews/>
                  </section>
                  <section className="padding">
                        <Subscribe/>
                  </section>
                  <section className="padding">
                        <Footer/>
                  </section>
            </main>
      );
}
