
import Footer from '../../components/LayoutDir/Footer/Footer';
import Header from '../../components/LayoutDir/Header/Header';
import ModalMenuMobile from '../../components//LayoutDir/ModalMenuMobile/ModalMenuMobile';
import { MyContextProvider } from '../../components//LayoutDir/MyContextProvider/MyContextProvider';
import Modal from '../../components/LayoutDir/Modal/Modal';
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
<>
<MyContextProvider>
<ModalMenuMobile/>
  <Modal/>
  <Header/>
    <Outlet/>
  <Footer/>
</MyContextProvider>
</>
    );
}
 
export {Layout};