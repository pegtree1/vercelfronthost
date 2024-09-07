import React, { useState } from "react";
import Navbar from '../../component/Navbar/Navbar';
import './gallery.css';

const GalleryPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage("");
  };

  return (
    <div className="section">
      <div className='navContent'>
        <Navbar />
      </div>
      
      <div className="section-name">
        <h2>First Meet at Ampara</h2>
        <div className="section-content">
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725639363/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1931_k3qcdt.jpg" 
            alt="1" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725639363/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1931_k3qcdt.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725639365/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1926_uu8zxd.jpg" 
            alt="2" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725639365/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1926_uu8zxd.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725639356/PET%20FOLDER/IMG_1938_zuje6y.jpg" 
            alt="3" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725639356/PET%20FOLDER/IMG_1938_zuje6y.jpg")} 
          />

        <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/t_ooo/v1725639372/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1976_oga37t.jpg" 
            alt="4" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/t_ooo/v1725639372/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1976_oga37t.jpg.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725639361/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1925_dkqcvj.jpg" 
            alt="4" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725639361/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1925_dkqcvj.jpg")} 
          />

            
            <video src="https://res.cloudinary.com/dxi46aisk/video/upload/v1725639364/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_2038_bwuhig.mp4" controls />
          <video src="https://res.cloudinary.com/dxi46aisk/video/upload/v1725639361/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_2041_qjeeez.mp4" controls />
          <video src="https://res.cloudinary.com/dxi46aisk/video/upload/v1725639400/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_1982_cmxxxy.mp4" controls />
          <video src="https://res.cloudinary.com/dxi46aisk/video/upload/v1725639372/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_2019_zyomef.mp4" controls />
          <video src="https://res.cloudinary.com/dxi46aisk/video/upload/v1725639371/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_2020_fvlfxi.mp4" controls />
          <video src="https://res.cloudinary.com/dxi46aisk/video/upload/v1725639393/PET%20FOLDER/FIRST%20MEET%20AMPARA/IMG_2009_gzufho.mp4" controls />
        </div>
      </div>

      <div className="section-name">
        <h2>Meet at Erumely</h2>
        <div className="section-content">
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643359/PET%20FOLDER/MEET%20AT%20ERUMELY/e95173ce-5bc7-48ac-a448-87d46e090e67_jruore.jpg" 
            alt="1" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643359/PET%20FOLDER/MEET%20AT%20ERUMELY/e95173ce-5bc7-48ac-a448-87d46e090e67_jruore.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643359/PET%20FOLDER/MEET%20AT%20ERUMELY/00925a88-0f42-4095-934e-ebbcf16b3de0_o4lfra.jpg" 
            alt="2" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643359/PET%20FOLDER/MEET%20AT%20ERUMELY/00925a88-0f42-4095-934e-ebbcf16b3de0_o4lfra.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643358/PET%20FOLDER/MEET%20AT%20ERUMELY/9f13c6a1-e930-4502-80d9-7b3679cafb8d_gqsdqd.jpg" 
            alt="3" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643358/PET%20FOLDER/MEET%20AT%20ERUMELY/9f13c6a1-e930-4502-80d9-7b3679cafb8d_gqsdqd.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643358/PET%20FOLDER/MEET%20AT%20ERUMELY/6583fdcc-6e0c-4a79-998b-90b22ee8d4d6_yzwl9h.jpg" 
            alt="4" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643358/PET%20FOLDER/MEET%20AT%20ERUMELY/6583fdcc-6e0c-4a79-998b-90b22ee8d4d6_yzwl9h.jpg")} 
          />
        </div>
      </div>

      <div className="section-name">
        <h2>Meet at Anakkalu</h2>
        <div className="section-content">
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725644379/PET%20FOLDER/ANAKKALU/2ae2e9a0-073b-4f43-a6b2-41cb93da40e7_mwpvqv.jpg" 
            alt="1" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725644379/PET%20FOLDER/ANAKKALU/2ae2e9a0-073b-4f43-a6b2-41cb93da40e7_mwpvqv.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725644379/PET%20FOLDER/ANAKKALU/9d8b9034-2c87-466c-a1c0-7edf5645173b_j8pyea.jpg" 
            alt="2" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725644379/PET%20FOLDER/ANAKKALU/9d8b9034-2c87-466c-a1c0-7edf5645173b_j8pyea.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725644378/PET%20FOLDER/ANAKKALU/b4519f70-3bba-45ce-872e-dad291e76dfa_vjyknj.jpg" 
            alt="3" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725644378/PET%20FOLDER/ANAKKALU/b4519f70-3bba-45ce-872e-dad291e76dfa_vjyknj.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725644377/PET%20FOLDER/ANAKKALU/7f163b12-73d5-45d9-b8d0-4c36d5f0f488_davbbk.jpg" 
            alt="4" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725644377/PET%20FOLDER/ANAKKALU/7f163b12-73d5-45d9-b8d0-4c36d5f0f488_davbbk.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725644376/PET%20FOLDER/ANAKKALU/5c97d78a-05e8-42f0-8fad-de564f09bbe7_xatqe1.jpg" 
            alt="5" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725644376/PET%20FOLDER/ANAKKALU/5c97d78a-05e8-42f0-8fad-de564f09bbe7_xatqe1.jpg")} 
          />
        </div>
      </div>

      <div className="section-name">
        <h2>Meet at Edamaruku</h2>
        <div className="section-content">
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643606/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/4384bddd-6917-4e00-9225-b75c73ac5b21_i3bjdb.jpg" 
            alt="1" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643606/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/4384bddd-6917-4e00-9225-b75c73ac5b21_i3bjdb.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643606/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/830cfc4a-0c27-40e6-a99b-397276bf2cde_vrz52d.jpg" 
            alt="2" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643606/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/830cfc4a-0c27-40e6-a99b-397276bf2cde_vrz52d.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643606/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/814eccba-f219-4f48-b9c7-e1b030bf4996_l73qlf.jpg" 
            alt="3" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643606/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/814eccba-f219-4f48-b9c7-e1b030bf4996_l73qlf.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643564/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/14a8d9cb-aff9-43ed-a295-b3f04b33a2ec_zcl5so.jpg" 
            alt="4" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643564/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/14a8d9cb-aff9-43ed-a295-b3f04b33a2ec_zcl5so.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643552/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/ebd55b8f-ff1b-4fa6-8226-7b502f064e28_vsljb3.jpg" 
            alt="5" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643552/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/ebd55b8f-ff1b-4fa6-8226-7b502f064e28_vsljb3.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643566/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/3a9741f6-7d89-4db7-92d2-e452b0e3c4d4_gnojfx.jpg" 
            alt="6" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643566/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/3a9741f6-7d89-4db7-92d2-e452b0e3c4d4_gnojfx.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643548/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/b621c479-12ca-4c8d-a663-cbd89affc05c_k6zdmm.jpg" 
            alt="7" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643548/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/b621c479-12ca-4c8d-a663-cbd89affc05c_k6zdmm.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643551/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/f3d39726-bca2-4cc3-997a-6bc1cb316394_fbs7g3.jpg" 
            alt="8" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643551/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/f3d39726-bca2-4cc3-997a-6bc1cb316394_fbs7g3.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643548/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/180397af-ed2a-432e-aff8-ecf809e9087e_gufzs1.jpg" 
            alt="9" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643548/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/180397af-ed2a-432e-aff8-ecf809e9087e_gufzs1.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643547/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/b53be6bc-f4a0-42e5-9438-bed2edf701a4_kzbiwl.jpg" 
            alt="10" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643547/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/b53be6bc-f4a0-42e5-9438-bed2edf701a4_kzbiwl.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643553/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/10c25e74-6f2f-4fbd-be4d-a73e9f54b2b2_izbbkn.jpg" 
            alt="11" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643553/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/10c25e74-6f2f-4fbd-be4d-a73e9f54b2b2_izbbkn.jpg")} 
          />
          <img 
            src="https://res.cloudinary.com/dxi46aisk/image/upload/v1725643550/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/afe08ce5-7e42-47e6-956c-27c5250a01b8_vs59ee.jpg" 
            alt="12" 
            onClick={() => openModal("https://res.cloudinary.com/dxi46aisk/image/upload/v1725643550/PET%20FOLDER/MEET%20AT%20ERUMELY/EDAMURUKU/afe08ce5-7e42-47e6-956c-27c5250a01b8_vs59ee.jpg")} 
          />
        </div>
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
