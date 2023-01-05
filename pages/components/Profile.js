const Profile = () => {
  return (
    <>
      <img
        className="profile-logo profile-logo-rings"
        src="/pattern-rings.svg"
        alt=""
      />
      <div className="profile-info">
        <h2>
          Nice to meet you! I'm <span>Kenneth Chang</span>.
        </h2>
        <p className="text-secondary profile-copy">
          I am a front-end developer with a strong passion for crafting
          intuitive, visually stunning, and functional user experiences.
        </p>
        <p className="btn btn-header">Contact me</p>
      </div>
    </>
  );
};

export default Profile;
