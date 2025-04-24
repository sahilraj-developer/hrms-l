import React, { useState } from 'react';
import Section1 from '@/components/admin/cms/Section1';
import Section2 from '@/components/admin/cms/Section2';
import Section3 from '@/components/admin/cms/Section3';
import Section4 from '@/components/admin/cms/Section4';
import Section5 from '@/components/admin/cms/Section5';
import Section6 from '@/components/admin/cms/Section6';

const CMS = () => {
  // Section 1: Titles and Subtitles
  const [titles, setTitles] = useState([
    { title: '', subtitle: '' },

  ]);


  const [bgColor, setBgColor] = useState("#ffffff"); // Default background color
  const [logo, setLogo] = useState(null); // Default logo
  const [navbarColor, setNavbarColor] = useState("#000000"); // Default navbar color
  const [navbarColorText, setNavbarColorText] = useState("#000000"); // Default navbar color
  

  // Section 2: Carousel Images (5 images)
  const [carouselImages, setCarouselImages] = useState([
    { id: 1, image: '', alt: 'Carousel Image 1' },
    { id: 2, image: '', alt: 'Carousel Image 2' },
    { id: 3, image: '', alt: 'Carousel Image 3' },
    { id: 4, image: '', alt: 'Carousel Image 4' },
    { id: 5, image: '', alt: 'Carousel Image 5' },
  ]);

  // Section 3: 3 Images to Edit
  const [threeImages, setThreeImages] = useState([
    { id: 1, image: '', alt: 'Image 1' },
    { id: 2, image: '', alt: 'Image 2' },
    { id: 3, image: '', alt: 'Image 3' },
  ]);

  // Section 4: 2 Images to Edit
  const [twoImages, setTwoImages] = useState([
    { id: 1, image: '', alt: 'Image 1' },
    { id: 2, image: '', alt: 'Image 2' },
  ]);

  // Section 5: Titles and Subtitles (similar to Section 1)
  const [titles2, setTitles2] = useState([
    { title: '', subtitle: '' },
  ]);

  // Handle input changes for titles and subtitles (section 1 & section 5)
  const handleTitleChange = (index: number, field: string, value: any, section: string) => {
    const updatedTitles:any = section === 'section1' ? [...titles] : [...titles2];
    updatedTitles[index][field] = value;
    section === 'section1' ? setTitles(updatedTitles) : setTitles2(updatedTitles);
  };

  // Handle image change for carousel and section 3 and section 4
  const handleImageChange = (index: number, field: string, value: any, section: string) => {
    const updatedSection:any = section === 'carousel' 
      ? [...carouselImages] 
      : section === 'threeImages' 
        ? [...threeImages] 
        : section === 'twoImages' 
          ? [...twoImages] 
          : [];
    updatedSection[index][field] = value;
    section === 'carousel' ? setCarouselImages(updatedSection) : 
    section === 'threeImages' ? setThreeImages(updatedSection) : 
    section === 'twoImages' ? setTwoImages(updatedSection) : null;
  };

  // Handle image upload with restrictions (dimensions check)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number, section: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width > 800 || img.height > 600) {
          alert('Image dimensions should not exceed 800x600 pixels.');
        } else {
          handleImageChange(index, 'image', URL.createObjectURL(file), section);
        }
      };
    }
  };

  // Handle Save and Cancel (reset changes)
  const handleSave = () => {
    alert('Changes Saved!');
    // You can add logic here to save the changes (e.g., making an API call to save the data)
  };

  const handleCancel = () => {
    alert('Changes Cancelled!');
    // Reset the sections to their initial state
    setTitles([{ title: '', subtitle: '' }, { title: '', subtitle: '' }, { title: '', subtitle: '' }, { title: '', subtitle: '' }, { title: '', subtitle: '' }]);
    setCarouselImages([{ id: 1, image: '', alt: 'Carousel Image 1' }, { id: 2, image: '', alt: 'Carousel Image 2' }, { id: 3, image: '', alt: 'Carousel Image 3' }, { id: 4, image: '', alt: 'Carousel Image 4' }, { id: 5, image: '', alt: 'Carousel Image 5' }]);
    setThreeImages([{ id: 1, image: '', alt: 'Image 1' }, { id: 2, image: '', alt: 'Image 2' }, { id: 3, image: '', alt: 'Image 3' }]);
    setTwoImages([{ id: 1, image: '', alt: 'Image 1' }, { id: 2, image: '', alt: 'Image 2' }]);
    setTitles2([{ title: '', subtitle: '' }, { title: '', subtitle: '' }, { title: '', subtitle: '' }, { title: '', subtitle: '' }, { title: '', subtitle: '' }]);
  };




  // Handle Logo Upload
const handleLogoUpload = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const reader:any = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Reset the form (used in Cancel)
  const handleCancelSection6 = () => {
    setBgColor("#ffffff");
    setLogo(null);
    setNavbarColor("#000000");
    setNavbarColorText("#ffffff");
  };
  
  // Save logic (You can customize this as per your needs)
  const handleSaveSection6 = () => {
    console.log("Background Color:", bgColor);
    console.log("Navbar Color:", navbarColor);
    console.log("Logo:", logo);
  };
  

  return (
    <div className="p-8 space-y-8">
      {/* Admin Page Header */}
      <h1 className="text-4xl font-bold text-center">CMS Dashboard</h1>

      {/* Section 1: Title and Subtitle */}
    <Section1  titles={titles} handleTitleChange={handleTitleChange} handleCancel={handleCancel} handleSave ={handleSave}/>

      {/* Section 2: Carousel Images */}
      <Section2 carouselImages={carouselImages} handleImageUpload={handleImageUpload} handleCancel={handleCancel} handleSave={handleSave}  />


      {/* Section 3: 3 Images to Edit */}
      <Section3  threeImages={threeImages} handleImageUpload={handleImageUpload} handleCancel={handleCancel} handleSave={handleSave} />

      {/* Section 4: 2 Images to Edit */}
<Section4 twoImages={twoImages} andleImageUpload={handleImageUpload} handleCancel={handleCancel} handleSave={handleSave}  />


      {/* Section 5: Titles and Subtitles */}
<Section5 titles2={titles2} handleTitleChange={handleTitleChange} handleCancel={handleCancel} handleSave={handleSave}  />



{/* Section 6: Edit Background Color, Logo, and Navbar Color */}
<Section6
        bgColor={bgColor}
        setBgColor={setBgColor}
        logo={logo}
        setNavbarColor={setNavbarColor}
        setNavbarColorText={setNavbarColorText}
        navbarColor={navbarColor}
        navbarColorText={navbarColorText}
        handleLogoUpload={handleLogoUpload}
        handleSaveSection6={handleSaveSection6}
        handleCancelSection6={handleCancelSection6}
      />



      {/* Save and Cancel Buttons */}
      {/* <div className="flex space-x-4 justify-center">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </div> */}
    </div>
  );
};

export default CMS;
