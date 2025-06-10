// components/Projects.jsx
export default function Projects() {
    const projects = [
      { title: "Portfolio Website", desc: "React + Bootstrap based personal website" },
      { title: "CMS System", desc: "Content management app for publishing journal articles" },
    ];
  
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Projects</h2>
          <div className="row">
            {projects.map((proj, i) => (
              <div className="col-md-6 mb-3" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  