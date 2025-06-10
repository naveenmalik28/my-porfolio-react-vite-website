// components/Skills.jsx
export default function Skills() {
    const skills = ['Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React Js','Django', 'GitHub'];
  
    return (
      <section id="skills" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Skills</h2>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card p-3 shadow-sm">
                  <h5>{skill}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  