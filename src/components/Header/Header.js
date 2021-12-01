import './Header.css'

function Header({ headerEntries }) {
  console.log(headerEntries);

  if (!headerEntries.length > 0) {
    return <div>loading</div>;
  }

  const {
    logoheader,
    link1,
    link2,
    link3,
    titleHeader,
    descriptionHeader,
    singUpHeader,
    picturesHeader,
  } = headerEntries[0].fields;

  return (
<div className="header-wapper">
    <div className="leftside-header">
        <div className="logo-links-wrap white-text">
          <img src={logoheader.fields.file.url} alt="logo" />
          <div >{link1}</div>
          <div>{link3}</div>
          <div>{link2}</div>
        </div>

        <div className="content-header">
          <div className="white-text title-header">{titleHeader}</div>
          <div className="description-header">{descriptionHeader}</div>
          <div className="white-text singup-text ">{singUpHeader}</div>
          <input className="input-header" type="text" placeholder="Your Email..." />
          <button className="white-text button-header">SUBSCRIBE</button>
        </div>
    </div>

    <div className="rightside-header">
        <div className="toppictures-wrap">
          <img src={picturesHeader[0].fields.file.url} alt="Boots" />
        <img src={picturesHeader[1].fields.file.url} alt="Peopel hiking" />  
        </div>
        <div className="downpicture-wrap">
         <img src={picturesHeader[2].fields.file.url} alt="Mountains" />   
        </div>
        
    </div>
</div>
  );
}

export default Header;
