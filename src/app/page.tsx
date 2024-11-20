import Hero from "@/components/Hero"
import ProductList from "@/app/product/page"
import About from "@/app/about/page"
import Contact from "@/app/contact/page"

export default function Home(){
  return(
    <div>
      <Hero/>
      <ProductList/>
      <About/>
      <Contact/>
    </div>
  )
}