const Skills = () => {
    const SKILLS = [
      { name: "React", experience: "2 years", icon: "⚛️" },
      { name: "Tailwind", experience: "1.5 years", icon: "🎨" },
      { name: "Framer Motion", experience: "1 year", icon: "🎥" },
      // Add more skills as needed
    ];
  
    return (
      <div className="container mx-auto p-6" id="skills">
        <h2 className="mb-12 mt-20 text-center text-4xl font-semibold text-gray-800">
          Skills
        </h2>
  
        <div className="mx-2 flex flex-col rounded-3xl px-4 py-6 lg:px-20 border border-gray-200 shadow-lg">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className={`py-6 flex items-center justify-between ${
                index !== SKILLS.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex items-center">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="px-6 text-lg lg:text-2xl text-gray-700">
                  {skill.name}
                </h3>
              </div>
              <div className="text-md font-semibold lg:text-xl text-gray-600">
                <span>{skill.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  