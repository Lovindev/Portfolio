{//run for shadow in intro
let intro = document.querySelector(".introduction_skill");
if (intro.classList.length==1) {
    intro.classList.add("introduction_note3");
}
}

{//read more
    let button = document.querySelector(".read_more");
    button.addEventListener("click", () => {
        document.querySelector(".more_about_me").classList.remove("display");
        button.classList.add("display");

    })
}

{//know if div is on screen

    let isScrolling;

    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {

            function inview(element) {

                let rect = element.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom >= 0;
            }

                
                //for about imp notes
                let note_about = document.querySelector(".imp_notes");
                if (inview(note_about)) {
                    note_about.classList.add("highlighted_note");
                }

                
            
        })


    })






}

{//scroll to section
    function scrollinview(element) {
        element.scrollIntoView({ behavior: "smooth" })
        
    }

    //for home section
    document.querySelector(".nav_element1").addEventListener("click", () => {
        let home_section = document.querySelector(".Home_section")
        scrollinview(home_section)
    })

    //for about section
    document.querySelector(".nav_element2").addEventListener("click", () => {
        let about_section = document.querySelector(".About_section")
        scrollinview(about_section)
    })


    //for skill section
    document.querySelector(".nav_element3").addEventListener("click", () => {
        let skills_section = document.querySelector(".skills_section")
        scrollinview(skills_section)
    })

    //for Work section
    document.querySelector(".nav_element4").addEventListener("click", () => {
        let Work_section = document.querySelector(".Work_section")
        scrollinview(Work_section)
    })

    //for Work section
    document.querySelector(".nav_element5").addEventListener("click", () => {
        let contact_section = document.querySelector(".contact_section")
        scrollinview(contact_section)
    })

}

{//ancher tag _blank attibute

    let ancher = document.querySelectorAll("a");

    ancher.forEach(element => {
        element.target="_blanck"
    });
}

{//section info hover effect
    let section_info = document.querySelectorAll(".section_info");

    section_info.forEach(element => {
        element.addEventListener("hover" , ()=>{
            
        })
    });

}



