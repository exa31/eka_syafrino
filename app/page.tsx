import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import LogoSkills from "@/components/LogoSkills";
import Projects from "@/components/Projects";
import 'aos/dist/aos.css';
import Chat from "@/components/Chat";

export default function Page() {
    return (

        <main className="overflow-x-hidden">
            <Header/>
            <About/>
            <LogoSkills/>
            <Projects/>
            <Contact/>
            <Chat/>
        </main>
    );
}
