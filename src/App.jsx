import {
  Hero,
  Footer,
  CustomerReviews,
  PopularProducts,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  Services,
} from "./sections/index";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="xl:padding mx-5">
      <PopularProducts />
    </section>
    <section className="xl:padding mx-5">
      <SuperQuality />
    </section>
    <section className="xl:padding-x py-10">
      <Services />
    </section>
    <section className="xl:padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
