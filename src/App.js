
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import { Layout } from './pages/Layout/Layout';
import {Home} from './pages/Home/Home'
import { WebPage } from './pages/WebPage/WebPage';
import { MobilePage } from './pages/MobilePage/MobilePage';
import { CRMPage } from './pages/CRMPage/CRMPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { DisignPage } from './pages/DisignPage/DisignPage';
import { PromotionPage } from './pages/PromotionPage/PromotionPage';
import { Login } from './pages/Login/Login';
import { PricePage } from './pages/PricePage/PricePage';
import { SalePage } from './pages/SalePage/SalePage';
import { Question } from './pages/Question/Question';
import React from 'react';

import { CalcPage } from './pages/CalcPage/CalcPage';
import {LandingPage} from './pages/LandingPage/LandingPage';
import {CardPage} from './pages/CardPage/CardPage';
import { CorpPage } from './pages/CorpPage/CorpPage';
import {ShopPage} from './pages/ShopPage/ShopPage';
import { ContactPage } from './pages/Contacts/ContacnsPage';
import { CalcPageHub } from './pages/CalcPage/CalcPageHub';
import { Confidencial } from './pages/Confidencial/Confidencial';
import { Helmet } from 'react-helmet';




function App() {

  return (
<>
<Helmet>
        <title>Профессиональное Создание и Продвижение Сайтов | Веб-дизайн и Разработка | WebHub</title>
        <meta name="description" content="`WebHub предлагает полный спектр услуг по созданию и продвижению веб-сайтов.
              От индивидуального веб-дизайна в Figma до адаптивной верстки и разработки на HTML, CSS и JavaScript.
               Эффективное SEO-продвижение для вашего бизнеса.`" />
</Helmet>
<Routes>
  
  <Route path='/' element={<Layout/>}>
    <Route index element={<Navigate replace to="/website" />}/>
    <Route path='/website' element={<WebPage/>}/>
    <Route path='/mobile' element={<MobilePage/>}/>
    <Route path='/crm' element={<CRMPage/>}/>
    <Route path='/disign' element={<DisignPage/>}/>
    <Route path='/promotion' element={<PromotionPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/price' element={<PricePage/>} />
    <Route path='/sale' element={<SalePage/>}/>
    <Route path='/question' element={<Question/>}/>
    <Route path='/calc' element={<CalcPageHub/>}/>
    <Route path='/landing' element={<LandingPage/>}/>
    <Route path='/card' element={<CardPage/>}/>
    <Route path='/corporate' element={<CorpPage/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
    <Route path='/contacts' element={<ContactPage/>}/>
    <Route path='/corp' element={<CorpPage/>}/>
    <Route path='/confidencial' element={<Confidencial/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Route>
</Routes>
</>
  );
}

export default App;


















