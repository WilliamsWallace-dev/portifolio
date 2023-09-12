import { ScrollToTop } from "../../components/ScrollToTop"
import { AboutSection } from "../../sections/AboutSection"
import { AfterSectionHero } from "../../sections/AfterSectionHero"
import { ContactSection } from "../../sections/ContactSection"
import { CourseSection } from "../../sections/CourseSection"
import { Hero } from "../../sections/Hero"
import { ProjectSection } from "../../sections/ProjectSection"
import { TechSection } from "../../sections/TechSection"


export const Home = ()=>{
    return(
        <>
            <ScrollToTop></ScrollToTop>
            <Hero></Hero>
            <AfterSectionHero></AfterSectionHero>
            <TechSection></TechSection>
            <ProjectSection></ProjectSection>
            <CourseSection></CourseSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>
        </>
    )
}