const ExperienceItem = ({ title, exp }) => {
  return (
    <div className="experience-container">
      <h3 className="experience-title">{title}</h3>
      <p className="text-secondary">{exp} Years Experience</p>
    </div>
  );
};

export default ExperienceItem;
