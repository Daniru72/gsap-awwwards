import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {

   useGSAP(() =>{
    const titleSplit = SplitText.create('.hero-title', { type: 'chars', });

    const tl = gsap.timeline({
      delay: 1,
    });



    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    }).to(".hero-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
    })


   })


  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="hero-img"
          className="absolute bottom-[40%] left-1/2 transform -translate-x-1/2 translate-y-1/2 object-auto scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0">
            <div className="overflow-hidden">
                <h1 className="hero-title">Freaking Delicious</h1>
            </div>
            <div style={{ 
                  clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" ,
            }} 
            className="hero-text-scroll">
                <div className="hero-subtitle">
                    <h1>Proten + Caffine</h1>
                </div>
            </div>

            <h2>Live life to the fullest with SPYLT: Sheter boredom and embrace your inner kid with every deliciously smooth chug.</h2>

            <div className="hero-button">
                CHUG A SPYLT
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
