gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section')

sections.forEach( section => {
    const h2 = section.querySelector('h2')
    const ps = section.querySelectorAll('p')

    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 50%", // Animationen sættes igang, når toppen a section-elementet rammer 50% ind i viewporten
            end: "+=200px", // Animationen er slut, når man har scrollet 200px ned
            scrub: true // Animationen bindes op på scrollbaren
        }
    })
    .from(h2, {
        opacity: 0,
    })
    .from(ps, {
        opacity: 0,
        y: 100,
        stagger: 0.5
    })
})

