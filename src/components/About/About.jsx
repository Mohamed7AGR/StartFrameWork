import StarLine from "../StarLine/StarLine";

export default function About() {
  return (
    <>
      <section>
        <div className="bg-green min-h-screen flex items-center justify-center flex-col text-white">
          <StarLine title="About component" color="white"/>
          <div className="w-3/4 mx-auto">
           <div className="md:grid md:grid-cols-2 gap-3 flex flex-col ">
           <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
           </div>
          </div>
        </div>
      </section>
    </>
  )
}
