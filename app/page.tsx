import { BlogPosts } from 'app/components/posts'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import AiIsCoolSection from './components/AiIsCool/AiIsCoolSection'
import ImportantSection from './components/Important/ImportantSection'
import Neon from './components/UI/Neon'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import CourseProgramSection from "@/app/components/CourseProgram/CourseProgramSection";
import AuthorSection from "./components/AuthorSection/AuthorSection";
import CarouselAnnouncements from "./components/CarouselAnnouncements/CarouselAnnouncements";
import VacanciesSection from "./components/VacanciesSection/VacanciesSection";
export default function Page() {
  return (
    <section>
      <Hero />
      <Neon />
      <Benefits />
      <Neon />
      <AiIsCoolSection />
      <Neon />
      <ImportantSection />
      <Neon />
      <BenefitsSection />
      <Neon />
      <CourseProgramSection />
      <Neon />
      <AuthorSection />
      <Neon />
      <CarouselAnnouncements />
      <Neon />
      <VacanciesSection />
    
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
