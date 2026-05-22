function Profile({ image, title, bio }) {
  return (
    <section className="profile">
     <div className="profile-image-wrapper">
     <img src={image} alt="profile" className="profile-img" />

     <div className="profile-lines"></div>
     </div>

      <div className="profile-content">
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
}

export default Profile;